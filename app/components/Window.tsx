import type { CSSProperties, ReactNode } from "react";

export type Tint = "green" | "blue" | "red" | "teal" | "peach" | "yellow" | "dark" | "sky";

// A macOS-style window: traffic lights, centered title, optional tint and "sample" tag.
export default function Window({
  title,
  tint,
  tag,
  caption,
  closeX,
  className,
  bodyClassName,
  style,
  children,
}: {
  title?: string;
  tint?: Tint;
  tag?: string;
  caption?: string;
  closeX?: boolean;
  className?: string;
  bodyClassName?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <figure style={{ margin: 0, ...style }} className={className}>
      <div className="win" style={{ height: "100%" }}>
        <div className="win-bar" data-tint={tint}>
          <span className="win-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {title ? <span className="win-title">{title}</span> : null}
          {tag ? <span className="win-tag">{tag}</span> : null}
          {closeX ? <span className="win-x" aria-hidden="true">x</span> : null}
        </div>
        <div className={`win-body ${bodyClassName ?? ""}`}>{children}</div>
      </div>
      {caption ? <figcaption className="win-cap">{caption}</figcaption> : null}
    </figure>
  );
}
