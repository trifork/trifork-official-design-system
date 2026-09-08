import "./globals.css";
import SideNav from "./_components/SideNav";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Trifork Design System",
  description:
    "The Trifork brand and design system: voice, type, colour, spacing, iconography, components, slide kit, and social templates.",
  metadataBase: new URL("https://brand.trifork.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${basePath}/tokens.css`} />
        <link rel="icon" href={`${basePath}/assets/logo/Trifork_logo_RGB.svg`} />
      </head>
      <body>
        <div className="tf-app">
          <SideNav />
          <main className="tf-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
