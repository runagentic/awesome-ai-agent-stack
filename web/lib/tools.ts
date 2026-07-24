import { readFileSync } from "node:fs";
import { join } from "node:path";

// The awesome-list markdown lives at the repo root, one file per category.
// This module runs at build time (static export), parses those files, and is
// the single source of truth for the site. Edit the markdown, rebuild, done.

export type Tool = {
  name: string;
  url: string;
  /** Raw description, may contain `inline code` backticks. */
  desc: string;
  /** Sub-heading the tool sits under inside its category file, if any. */
  group?: string;
};

export type Category = {
  slug: string;
  title: string;
  /** One-line intro pulled from the file's first prose paragraph. */
  intro: string;
  tools: Tool[];
};

// Order and display names are fixed here; icons are mapped client-side by slug.
const CATEGORY_META: { slug: string; title: string }[] = [
  { slug: "web-research", title: "Web & Research" },
  { slug: "media", title: "Media" },
  { slug: "documents-ocr", title: "Documents & OCR" },
  { slug: "data", title: "Data" },
  { slug: "development", title: "Development" },
  { slug: "files-cloud", title: "Files & Cloud" },
  { slug: "infrastructure", title: "Infrastructure" },
  { slug: "modern-cli", title: "Modern CLI" },
  { slug: "ai-agent-utils", title: "AI & Agent Utilities" },
];

// `- **[name](url)** - description`
const ENTRY = /^- \*\*\[(.+?)\]\((.+?)\)\*\* - (.+)$/;
const GROUP = /^## +(.+?)\s*$/;
const PROSE = /^[A-Za-z]/; // a paragraph line (not heading, bullet, or link)

const TOOLS_DIR = join(process.cwd(), "..", "tools");

function parseCategory(slug: string, title: string): Category {
  const raw = readFileSync(join(TOOLS_DIR, `${slug}.md`), "utf8");
  const lines = raw.split("\n");

  let intro = "";
  let group: string | undefined;
  const tools: Tool[] = [];

  for (const line of lines) {
    if (!intro && PROSE.test(line)) {
      intro = line.trim();
      continue;
    }
    const g = line.match(GROUP);
    if (g) {
      group = g[1];
      continue;
    }
    const e = line.match(ENTRY);
    if (e) {
      tools.push({ name: e[1], url: e[2], desc: e[3].trim(), group });
    }
  }

  return { slug, title, intro, tools };
}

export function getCategories(): Category[] {
  return CATEGORY_META.map(({ slug, title }) => parseCategory(slug, title));
}

export function getTotals(categories: Category[]) {
  return {
    tools: categories.reduce((n, c) => n + c.tools.length, 0),
    categories: categories.length,
  };
}

export function getCategory(slug: string): Category | undefined {
  const meta = CATEGORY_META.find((c) => c.slug === slug);
  return meta ? parseCategory(meta.slug, meta.title) : undefined;
}

export function getCategorySlugs(): string[] {
  return CATEGORY_META.map((c) => c.slug);
}

export type FlatTool = Tool & { category: string; slug: string };

/** Every tool flattened, tagged with its category, for global search. */
export function getAllTools(categories: Category[]): FlatTool[] {
  return categories.flatMap((c) =>
    c.tools.map((t) => ({ ...t, category: c.title, slug: c.slug })),
  );
}
