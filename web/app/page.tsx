import Link from "next/link";
import { categoryIcon } from "@/components/category-icons";
import { getCategories, getTotals } from "@/lib/tools";

export default function Home() {
  const categories = getCategories();
  const totals = getTotals(categories);

  return (
    <main className="mx-auto w-full max-w-5xl grow px-4 pb-24 sm:px-6">
      <section className="flex flex-col items-start gap-3 pt-14 pb-10 sm:pt-20">
        <h1 className="text-balance font-heading font-semibold text-3xl tracking-tight sm:text-5xl">
          The CLI stack for building AI agents
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          A curated index of mature, scriptable command-line tools an agent can
          shell out to. Pick a category, or press{" "}
          <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs">
            ⌘K
          </kbd>{" "}
          to search all {totals.tools}.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const Icon = categoryIcon(c.slug);
          const sample = c.tools.slice(0, 4).map((t) => t.name);
          return (
            <Link
              key={c.slug}
              href={`/c/${c.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-ring"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="font-mono text-muted-foreground text-xs tabular-nums">
                  {c.tools.length}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-base">{c.title}</h2>
                <p className="line-clamp-2 text-muted-foreground text-sm">
                  {c.intro}
                </p>
              </div>
              <p className="mt-auto truncate font-mono text-muted-foreground/70 text-xs">
                {sample.join("  ·  ")}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
