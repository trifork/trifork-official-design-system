import PageHeader from "../_components/PageHeader";
import { renderSlideHtml, slideTemplates, webSlideAssetPaths } from "../../content/slide-templates.mjs";
import "./slide-kit.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Slide kit · Trifork Design System",
  description: "Master slides modelled directly on the Trifork presentation template.",
};

export default function SlideKitPage() {
  const paths = webSlideAssetPaths(basePath);

  return (
    <>
      <PageHeader label="SLIDE KIT" />
      <div className="tf-page slide-kit-page">
        <section className="tf-section">
          <div className="intro">
            <h1>The slide kit.</h1>
            <p>Master slides modelled directly on the Trifork presentation template. <b>Covers</b> stand apart: no page footer, the wordmark placed inside the artwork or top-left, and the presentation name with year bottom-left. <b>Separators</b> and content slides share one reusable chrome component: an <b>Orange&nbsp;500</b> label top-left, the title at the 80&nbsp;px margin in Regular weight, a bottom-left footer carrying page number, slash and slide name, and the Trifork wordmark bottom-right. Spacing, sizing, and colour stay identical across the kit.</p>
          </div>

          <div className="deck">
          {slideTemplates.map((template) => (
            <div key={template.id}>
              <div className="slide-meta">
                <b>{template.metaTitle}</b>
                <code>{template.code}</code>
              </div>
              <div dangerouslySetInnerHTML={{ __html: renderSlideHtml(template, paths) }} />
            </div>
          ))}
          </div>
        </section>
      </div>
    </>
  );
}
