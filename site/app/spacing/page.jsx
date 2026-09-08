import PageHeader from "../_components/PageHeader";
import "./spacing.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export const metadata = {
  title: "Spacing · Trifork Design System",
  description: "An 8 px scale, four corner radii, and the chrome of a Trifork slide.",
};

export default function SpacingPage() {
  return (
    <>
      <PageHeader label="SPACING" />
      <div className="tf-page spacing-page">
        <section className="tf-section">
          <h2 className="tf-section-title">Eight, all the way down.</h2>
          <p className="lead">Every gap, padding, and offset is a multiple of 8 px. The rhythm is calm because the maths is simple.</p>

          <div className="row"><b>--tf-s-1</b><span className="px">4 px</span><div className="bar" style={{ width: "4px" }}></div></div>
          <div className="row"><b>--tf-s-2</b><span className="px">8 px</span><div className="bar" style={{ width: "8px" }}></div></div>
          <div className="row"><b>--tf-s-3</b><span className="px">16 px</span><div className="bar" style={{ width: "16px" }}></div></div>
          <div className="row"><b>--tf-s-4</b><span className="px">24 px</span><div className="bar" style={{ width: "24px" }}></div></div>
          <div className="row"><b>--tf-s-5</b><span className="px">32 px</span><div className="bar" style={{ width: "32px" }}></div></div>
          <div className="row"><b>--tf-s-6</b><span className="px">48 px</span><div className="bar" style={{ width: "48px" }}></div></div>
          <div className="row"><b>--tf-s-7</b><span className="px">64 px</span><div className="bar" style={{ width: "64px" }}></div></div>
          <div className="row"><b>--tf-s-8, slide outer margin</b><span className="px">80 px</span><div className="bar" style={{ width: "80px" }}></div></div>
          <div className="row"><b>--tf-s-9</b><span className="px">120 px</span><div className="bar" style={{ width: "120px" }}></div></div>
          <div className="row"><b>--tf-s-10</b><span className="px">160 px</span><div className="bar" style={{ width: "160px" }}></div></div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Corners</h2>
          <p className="lead">12 px on small elements, 24 px on large surfaces, full pill on actions and tags. The transition between 12 and 24 happens at the 200 px width threshold.</p>
          <div className="radii">
            <div>
              <div className="swatch" style={{ borderRadius: "8px" }}></div>
              <b>--tf-r-sm · 8 px</b>
              <small>Pills, chips, inline badges, very small icons backings.</small>
            </div>
            <div>
              <div className="swatch" style={{ borderRadius: "12px" }}></div>
              <b>--tf-r-md · 12 px</b>
              <small>Default for elements ≤ 199 px wide. Buttons, inputs, small cards.</small>
            </div>
            <div>
              <div className="swatch" style={{ borderRadius: "24px" }}></div>
              <b>--tf-r-lg · 24 px</b>
              <small>Default for surfaces &gt; 200 px. Photo containers, large cards, modals.</small>
            </div>
            <div>
              <div className="swatch" style={{ borderRadius: "999px" }}></div>
              <b>--tf-r-pill</b>
              <small>Action buttons, tags, status indicators.</small>
            </div>
          </div>
        </section>

        <section className="tf-section">
          <h2 className="tf-section-title">Slide chrome</h2>
          <p className="lead">A 1920 × 1080 slide with an 80 px outer margin (4.16% of width). The slide label sits top-left in tracked orange; the page number and deck name sit bottom-left, and the Trifork wordmark anchors bottom-right.</p>
          <div className="slide-frame">
            <div className="margin"></div>
            <div className="label">LABEL</div>
            <div className="content">
              <div className="ph h"></div>
              <div className="ph b"></div>
              <div className="ph b"></div>
              <div className="ph b short"></div>
            </div>
            <div className="pagenum">12</div>
            <div className="corner">
              <span>presentation label</span>
              <img src={`${basePath}/assets/logo/Trifork_logo_RGB.svg`} alt="Trifork" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
