import type { ReactNode } from "react";
import type { Tool } from "@/lib/tools";

/** Render `inline code` spans in a description. */
export function renderDesc(desc: string): ReactNode {
  return desc.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code
        key={i}
        className="rounded bg-foreground/[0.06] px-1 py-0.5 font-mono text-[0.8em]"
      >
        {part.slice(1, -1)}
      </code>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function ToolRows({ tools }: { tools: Tool[] }) {
  return (
    <ul>
      {tools.map((t, i) => (
        <li key={`${t.url}-${i}`}>
          <a
            href={t.url}
            target="_blank"
            rel="noreferrer"
            className="-mx-3 flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-foreground/[0.04] sm:grid sm:grid-cols-[minmax(8rem,12rem)_1fr] sm:items-baseline sm:gap-5"
          >
            <span className="font-mono text-foreground text-sm">{t.name}</span>
            <span className="text-muted-foreground text-sm leading-relaxed">
              {renderDesc(t.desc)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
