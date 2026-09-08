const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

/* Slide label — top-left, orange, tracked caps. */
export function SlideLabel({ children }) {
  return <div className="s-label">{children}</div>;
}

/* Footer — bottom-left: page number / slide name, with a light slash separator. */
export function SlideFoot({ page, name }) {
  return (
    <div className="s-foot">
      <span className="page">{page}</span>
      <span className="sep">/</span>
      <span className="deck">{name}</span>
    </div>
  );
}

/* Wordmark — bottom-right. Uses the negative logo on dark slides. */
export function SlideLogo({ dark = false }) {
  const src = dark
    ? `${basePath}/assets/logo/Trifork_logo_neg_RGB.svg`
    : `${basePath}/assets/logo/Trifork_logo_RGB.svg`;
  return (
    <div className="s-logo">
      <img src={src} alt="Trifork" />
    </div>
  );
}

/* Full corner chrome (footer + wordmark) for a standard slide. */
export function SlideChrome({ page, name, dark = false }) {
  return (
    <>
      <SlideFoot page={page} name={name} />
      <SlideLogo dark={dark} />
    </>
  );
}
