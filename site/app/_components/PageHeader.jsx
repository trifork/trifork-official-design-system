const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/system";

export default function PageHeader({ label }) {
  return (
    <header className="tf-pageheader">
      <div className="tf-label-spaced">{label}</div>
    </header>
  );
}
