import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { brandSystem as ds } from "../content/brand-system.mjs";
import { canonicalSlideTemplates } from "../content/slide-templates.mjs";

const root = new URL("..", import.meta.url).pathname;

const failures = [];

function fail(message) {
  failures.push(message);
}

async function read(rel) {
  return readFile(join(root, rel), "utf8");
}

function expect(condition, message) {
  if (!condition) fail(message);
}

function expectExists(rel) {
  expect(existsSync(join(root, rel)), `Missing required file: ${rel}`);
}

async function expectContains(rel, needle) {
  const text = await read(rel);
  expect(text.includes(needle), `${rel} must contain ${needle}`);
}

async function expectNotContains(rel, needle) {
  const text = await read(rel);
  expect(!text.includes(needle), `${rel} must not contain ${needle}`);
}

const skillDir = (name) => `public/skill/${name}`;
const presentations = ds.skills.find((s) => s.slides);
const social = ds.skills.find((s) => s.schemas.includes("social-post.schema.json"));
const brandCore = ds.skills.find((s) => s.claudeMd);

async function lintGeneratedDocs() {
  const files = ["public/llms.txt", `${skillDir(brandCore.name)}/CLAUDE.md`];
  const llmsFiles = await readdir(join(root, "public", "llms"));
  files.push(...llmsFiles.filter((f) => f.endsWith(".md")).map((f) => `public/llms/${f}`));
  for (const skill of ds.skills) files.push(`${skillDir(skill.name)}/SKILL.md`);

  const emojiOrAstral = /[\u{1F300}-\u{1FAFF}]/u;
  for (const file of files) {
    const raw = await read(file);
    // Prose only: strip fenced and inline code so snippets (e.g. color:#fff) don't trip these checks.
    const text = raw.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
    expect(!text.includes("—"), `${file} contains an em dash`);
    expect(!text.includes("!"), `${file} contains an exclamation mark`);
    expect(!emojiOrAstral.test(text), `${file} contains emoji`);
    expect(!/\bcolor\b/i.test(text.replace(/statColor|eyebrowColor/g, "")), `${file} uses US spelling "color"`);
  }
}

async function lintSchemas() {
  expectExists("public/schemas/social-post.schema.json");
  expectExists("public/schemas/slide.schema.json");
  expectExists("public/schemas/index.html");
  expectExists(`${skillDir(presentations.name)}/schemas/slide.schema.json`);
  expectExists(`${skillDir(social.name)}/schemas/social-post.schema.json`);

  const social_ = JSON.parse(await read("public/schemas/social-post.schema.json"));
  const slide = JSON.parse(await read("public/schemas/slide.schema.json"));

  expect(
    JSON.stringify(social_).includes('"1:1"') && JSON.stringify(social_).includes('"9:16"'),
    "Social schema must include all social formats"
  );
  expect(
    JSON.stringify(social_).includes('"event"') && JSON.stringify(social_).includes('"case"'),
    "Social schema must include all social variants"
  );
  expect(
    JSON.stringify(slide).includes('"cover-card"') && JSON.stringify(slide).includes('"closing-logo"'),
    "Slide schema must include canonical slide layout ids"
  );
  expect(
    JSON.stringify(slide).includes("rgba(44, 58, 66, 0.90)"),
    "Slide schema must require the canonical photo overlay"
  );
}

async function lintAssetManifests() {
  expectExists("public/assets/icons/index.json");
  expectExists("public/assets/imagery/index.json");
  expectExists("public/assets/icons/index.html");
  expectExists("public/assets/imagery/index.html");

  // Brand-core bundles the full asset set.
  expectExists(`${skillDir(brandCore.name)}/assets/tokens.css`);
  expectExists(`${skillDir(brandCore.name)}/assets/icons/index.json`);
  expectExists(`${skillDir(brandCore.name)}/assets/imagery/index.json`);
  expectExists(`${skillDir(brandCore.name)}/assets/logo/Trifork_logo_RGB.svg`);
  expectExists(`${skillDir(brandCore.name)}/assets/logo/Trifork_logo_neg_RGB.svg`);

  const icons = JSON.parse(await read("public/assets/icons/index.json"));
  const imagery = JSON.parse(await read("public/assets/imagery/index.json"));

  for (const icon of ds.iconography.icons) {
    expectExists(`public/assets/icons/${icon.file}`);
    const found = icons.icons.find((entry) => entry.file === icon.file && entry.name === icon.name);
    expect(Boolean(found), `Icon manifest missing ${icon.file} / ${icon.name}`);
  }

  for (const image of ds.imagery) {
    expectExists(`public/assets/imagery/${image.file}`);
    const found = imagery.images.find((entry) => entry.file === image.file && entry.allowed === image.allowed);
    expect(Boolean(found), `Imagery manifest missing ${image.file} allowed=${image.allowed}`);
  }

  const stock = imagery.images.find((entry) => entry.file === "trifork-stock-1.jpg");
  expect(stock && stock.allowed === false, "trifork-stock-1.jpg must be marked as disallowed placeholder imagery");
}

async function lintSlideTemplates() {
  expectExists("public/templates/index.html");
  expectExists("public/templates/slides/index.html");
  expectExists("public/templates/slides/index.json");
  expectExists("public/templates/slides/trifork-slide.css");
  expectExists("public/visuals/index.html");
  expectExists("public/visuals/slide-kit/index.html");

  const presDir = skillDir(presentations.name);
  expectExists(`${presDir}/assets/slide-templates/index.json`);
  expectExists(`${presDir}/assets/slide-templates/trifork-slide.css`);
  expectExists(`${presDir}/assets/slide-previews/index.json`);

  const manifest = JSON.parse(await read("public/templates/slides/index.json"));
  const skillManifest = JSON.parse(await read(`${presDir}/assets/slide-templates/index.json`));

  for (const template of canonicalSlideTemplates) {
    expectExists(`public/templates/slides/${template.id}.html`);
    expectExists(`public/visuals/slide-kit/${template.id}.png`);
    expectExists(`${presDir}/assets/slide-templates/${template.id}.html`);
    expectExists(`${presDir}/assets/slide-previews/${template.id}.png`);

    const publicEntry = manifest.templates.find((entry) => entry.id === template.id && entry.layoutId === template.layoutId);
    const skillEntry = skillManifest.templates.find((entry) => entry.id === template.id && entry.layoutId === template.layoutId);

    expect(Boolean(publicEntry), `Slide template manifest missing ${template.id}`);
    expect(Boolean(skillEntry), `Skill slide template manifest missing ${template.id}`);
    expect(
      publicEntry && publicEntry.templateUrl.endsWith(`/templates/slides/${template.id}.html`),
      `Slide template manifest has wrong template URL for ${template.id}`
    );
    expect(
      publicEntry && publicEntry.previewUrl.endsWith(`/visuals/slide-kit/${template.id}.png`),
      `Slide template manifest has wrong preview URL for ${template.id}`
    );
  }
}

async function lintKnownDrift() {
  await expectContains(
    "app/social/_lib/SocialPost.jsx",
    'const PHOTO_OVERLAY = "rgba(44, 58, 66, 0.90)"'
  );
  await expectNotContains("app/social/_lib/SocialPost.jsx", "0.66");
  await expectNotContains("app/colors/page.jsx", "The default slide background");
  await expectNotContains("public/llms.txt", "White, default");
  await expectContains("public/llms.txt", "Do not use white as a slide background");

  // Per-skill SKILL.md content.
  const core = skillDir(brandCore.name);
  const pres = skillDir(presentations.name);
  const soc = skillDir(social.name);
  await expectContains(`${core}/SKILL.md`, "## Asset fallback");
  await expectContains(`${core}/SKILL.md`, "assets/logo/Trifork_logo_RGB.svg");
  await expectContains(`${core}/SKILL.md`, "### Wordmark");
  await expectContains(`${pres}/SKILL.md`, "references/slide-kit-visual.md");
  await expectContains(`${pres}/SKILL.md`, "schemas/slide.schema.json");
  await expectContains(`${pres}/SKILL.md`, "Storytelling structure");
  await expectContains(`${pres}/SKILL.md`, "trifork-brand-core");
  await expectContains(`${soc}/SKILL.md`, "schemas/social-post.schema.json");
  await expectContains(`${soc}/SKILL.md`, "playground");
  await expectContains(`${soc}/SKILL.md`, "trifork-brand-core");

  await expectContains("public/llms/assets.md", "## Asset Resolution Order");
  await expectContains("public/llms/assets.md", "Bundled dark logo: assets/logo/Trifork_logo_RGB.svg");
  await expectNotContains("public/llms/assets.md", "Directory:");

  expectExists("public/llms/index.html");
  expectExists(`${pres}/references/slides.md`);
  expectExists(`${pres}/references/index.md`);
  expectExists(`${soc}/references/social.md`);
  expectExists(`${core}/references/assets.md`);
}

async function lintSkills() {
  expectExists("public/skill/skills.json");
  expectExists("public/skill/index.html");
  const list = JSON.parse(await read("public/skill/skills.json"));
  expect(list.skills.length === ds.skills.length, `skills.json lists ${list.skills.length}, expected ${ds.skills.length}`);

  for (const skill of ds.skills) {
    const dir = skillDir(skill.name);
    expectExists(`${dir}/SKILL.md`);
    expectExists(`${dir}/version.json`);
    expectExists(`${dir}/references/index.md`);
    expectExists(`public/skill/${skill.name}.zip`);

    const md = await read(`${dir}/SKILL.md`);
    expect(md.includes(`name: ${skill.name}`), `${dir}/SKILL.md frontmatter name must be ${skill.name}`);
    expect(md.includes("when_to_use:"), `${dir}/SKILL.md must declare when_to_use`);

    for (const ref of skill.references) expectExists(`${dir}/references/${ref}`);
    for (const schema of skill.schemas) expectExists(`${dir}/schemas/${schema}`);

    const version = JSON.parse(await read(`${dir}/version.json`));
    expect(version.version === ds.version, `${skill.name} version is ${version.version}, expected ${ds.version}`);
    expect(version.updated === ds.updated, `${skill.name} updated is ${version.updated}, expected ${ds.updated}`);
  }
}

await lintGeneratedDocs();
await lintSchemas();
await lintAssetManifests();
await lintSlideTemplates();
await lintKnownDrift();
await lintSkills();

if (failures.length) {
  console.error("Brand lint failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Brand lint passed");
