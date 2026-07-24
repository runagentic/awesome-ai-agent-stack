"use client";

import Link from "next/link";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import type { FlatTool } from "@/lib/tools";

const REPO = "https://github.com/narayann7/awesome-ai-agent-stack";

export function SiteHeader({ tools }: { tools: FlatTool[] }) {
  return (
    <header className="sticky top-0 z-30 h-14 border-border border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="shrink-0 font-mono font-medium text-sm">
          awesome-ai-agent-stack
        </Link>
        <div className="flex flex-1 justify-center">
          <CommandMenu tools={tools} />
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <a
            href={REPO}
            className="hidden rounded-lg px-2.5 py-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
