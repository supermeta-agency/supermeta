import { PALETTE, PIXEL_ICONS, type PixelIconName } from "../lib/pixel-icons";
import { PXA, PXA_VIEWBOX, type PxaName } from "../lib/pixelarticons";

// Turns one 16x16 frame into rects, merging horizontal runs of the same color.
function frameRects(rows: string[]) {
  const rects: { x: number; y: number; w: number; fill: string }[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === "." || !PALETTE[ch]) { x++; continue; }
      let end = x;
      while (end < row.length && row[end] === ch) end++;
      rects.push({ x, y, w: end - x, fill: PALETTE[ch] });
      x = end;
    }
  });
  return rects;
}

export type PixelMotion = "bob" | "bounce" | "spin" | "wiggle" | "pulse" | "none";

// A colored pixel icon. Two-frame icons flip frames; `motion` adds a stepped CSS animation.
export default function PixelIcon({
  name,
  size = 32,
  motion = "none",
  title,
  className,
}: {
  name: PixelIconName;
  size?: number;
  motion?: PixelMotion;
  title?: string;
  className?: string;
}) {
  const art = PIXEL_ICONS[name];
  const flip = art.frames.length > 1;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={`px-icon${motion !== "none" ? ` px-${motion}` : ""}${className ? ` ${className}` : ""}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {art.frames.map((f, i) => (
        <g key={i} className={flip ? `px-frame px-frame-${i}` : undefined}>
          {frameRects(f).map((r) => (
            <rect key={`${r.x}-${r.y}`} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
          ))}
        </g>
      ))}
    </svg>
  );
}

// Monochrome UI icons from Pixelarticons (via Iconify); they take the text color.
export function Px({ name, size = 18, className }: { name: PxaName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={PXA_VIEWBOX}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: PXA[name] }}
    />
  );
}
