"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

const NAV = [
  {
    label: "System",
    items: [
      { href: "/", title: "Overview", sub: "Index", exact: true },
      { href: "/install", title: "Use with AI", sub: "Skill" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { href: "/brand", title: "Brand", sub: "Voice" },
      { href: "/type", title: "Type", sub: "Poppins" },
      { href: "/colors", title: "Colour", sub: "Palette" },
      { href: "/spacing", title: "Spacing", sub: "8 px" },
      { href: "/iconography", title: "Iconography", sub: "Line" },
    ],
  },
  {
    label: "Patterns",
    items: [
      { href: "/components", title: "Components", sub: "Slide UI" },
      { href: "/slide-kit", title: "Slide kit", sub: "Layouts" },
      { href: "/social", title: "Social", sub: "Rules", exact: true },
    ],
  },
  {
    label: "Tools",
    items: [
      { href: "/social/playground", title: "Social playground", sub: "Build & export" },
    ],
  },
];

export default function SideNav() {
  const pathname = usePathname();
  const normalized = pathname.replace(basePath, "") || "/";

  return (
    <aside className="tf-sidenav" aria-label="Design system navigation">
      <Link href="/" className="tf-sidenav__brand" aria-label="Trifork home">
        <img src={`${basePath}/assets/logo/Trifork_logo_RGB.svg`} alt="Trifork" />
      </Link>

      {NAV.map((group) => (
        <div key={group.label} className="tf-sidenav__group">
          <div className="tf-sidenav__group-label">{group.label}</div>
          {group.items.map((item) => {
            const active = item.href === "/" || item.exact
              ? normalized === item.href || (item.href === "/" && normalized === "")
              : normalized === item.href || normalized.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="tf-sidenav__link"
                data-active={active ? "true" : "false"}
              >
                <span>{item.title}</span>
                {item.sub && <span className="tf-sidenav__link-sub">{item.sub}</span>}
              </Link>
            );
          })}
        </div>
      ))}

      <div className="tf-sidenav__foot">
        <div>Trifork Design System</div>
        <div>
          <a href={`${basePath}/tokens.css`}>tokens.css</a> ·{" "}
          <a href={`${basePath}/llms.txt`}>llms.txt</a>
        </div>
      </div>
    </aside>
  );
}
