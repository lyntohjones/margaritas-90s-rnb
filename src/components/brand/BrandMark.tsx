export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={compact ? "brand-mark brand-mark--compact" : "brand-mark"}
      aria-label="Margaritas & 90s R&B"
    >
      <span className="brand-mark__script">Margaritas</span>
      <span className="brand-mark__sub">&amp; 90s R&amp;B</span>
    </span>
  );
}
