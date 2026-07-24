"use client";

import { SearchIcon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import type { FlatTool } from "@/lib/tools";

export function CommandMenu({ tools }: { tools: FlatTool[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderItem = (item: unknown) => {
    const t = item as FlatTool;
    return (
      <CommandItem
        key={`${t.slug}-${t.name}-${t.url}`}
        value={t}
        onClick={() => {
          window.open(t.url, "_blank", "noopener,noreferrer");
          setOpen(false);
        }}
      >
        <span className="font-mono text-sm">{t.name}</span>
        <span className="ml-3 hidden truncate text-muted-foreground text-xs sm:inline">
          {t.desc}
        </span>
        <CommandShortcut>{t.category}</CommandShortcut>
      </CommandItem>
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-full max-w-xs items-center gap-2 rounded-lg border border-border bg-card px-3 text-muted-foreground text-sm transition-colors hover:border-ring sm:h-8"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="flex-1 text-left">Search tools</span>
        <kbd className="hidden select-none rounded border border-border px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandDialogPopup>
          <Command
            items={tools}
            itemToStringValue={(item) => {
              const t = item as FlatTool;
              return `${t.name} ${t.desc} ${t.category}`;
            }}
          >
            <CommandInput placeholder="Search 146 tools by name, use, or category…" />
            <CommandEmpty>No tools match your search.</CommandEmpty>
            <CommandList>{renderItem as unknown as ReactNode}</CommandList>
          </Command>
        </CommandDialogPopup>
      </CommandDialog>
    </>
  );
}
