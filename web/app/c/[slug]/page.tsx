import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryIcon } from "@/components/category-icons";
import { ToolRows } from "@/components/tool-rows";
import { getCategory, getCategorySlugs, type Tool } from "@/lib/tools";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category ? `${category.title} · awesome-ai-agent-stack` : "" };
}

/** Preserve source order while bucketing tools under their subsection. */
function groupBySubsection(tools: Tool[]): { label: string; tools: Tool[] }[] {
  const groups: { label: string; tools: Tool[] }[] = [];
  for (const t of tools) {
    const label = t.group ?? "";
    const last = groups.at(-1);
    if (last && last.label === label) last.tools.push(t);
    else groups.push({ label, tools: [t] });
  }
  return groups;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const Icon = categoryIcon(slug);
  const groups = groupBySubsection(category.tools);

  return (
    <main className="mx-auto w-full max-w-3xl grow px-4 pb-24 sm:px-6">
      <div className="pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All categories
        </Link>
      </div>

      <header className="flex flex-col gap-3 pt-8 pb-10">
        <div className="flex items-center gap-3">
          <Icon className="size-6 text-foreground" />
          <h1 className="font-heading font-semibold text-3xl tracking-tight">
            {category.title}
          </h1>
          <span className="ml-1 font-mono text-muted-foreground text-sm tabular-nums">
            {category.tools.length}
          </span>
        </div>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          {category.intro}
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {groups.map((g) => (
          <section key={g.label || "_"}>
            {g.label && (
              <h2 className="mb-2 font-mono text-muted-foreground text-xs uppercase tracking-[0.15em]">
                {g.label}
              </h2>
            )}
            <ToolRows tools={g.tools} />
          </section>
        ))}
      </div>
    </main>
  );
}
