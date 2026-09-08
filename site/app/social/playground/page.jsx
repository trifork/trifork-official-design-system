import PageHeader from "../../_components/PageHeader";
import { Playground } from "../_lib/Playground";
import "./playground.css";

export const metadata = {
  title: "Social playground · Trifork Design System",
  description: "Build LinkedIn social posts and carousels interactively. Edit copy, adjust format and background, then export as PNG or zip.",
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHeader label="PLAYGROUND" />
      <div className="tf-page playground-page">
        <section className="tf-section playground-intro">
          <p className="tf-eyebrow">Social post builder</p>
          <h1 className="playground-intro__title">Drop in real copy. Build a carousel. Download.</h1>
          <p className="playground-intro__lead">
            Edit any field; the title autosizes to fit. Add pages with ＋ to build a swipeable
            carousel, reorder them, then export — a single page as a PNG, or the whole carousel
            as a zip of numbered images, all at full LinkedIn resolution.
          </p>
        </section>
        <section className="tf-section playground-section">
          <Playground />
        </section>
      </div>
    </>
  );
}
