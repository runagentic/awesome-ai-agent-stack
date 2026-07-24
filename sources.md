# Sources

This list is curated, not scraped. It draws on established awesome-lists, then filters hard for tools that actually work in an agent loop: scriptable, composable, non-interactive, and doing real work worth delegating. Tools known to work well in agent workflows (Firecrawl, crawl4ai, the `llm`/`simonw` family, Whisper, Tesseract, Marker, Docling, DuckDB, Docker, kubectl, Terraform, and others) are added on top even where the older lists predate them.

[← back to index](README.md)

## Lists mined

- **[toolleeo/cli-apps](https://github.com/toolleeo/cli-apps)** - large, well-maintained catalog of CLI/TUI apps, backed by a structured `data/apps.csv`. The broadest source.
- **[agarrharr/awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps)** - popular awesome-list of command-line apps grouped by purpose.
- **[ibraheemdev/modern-unix](https://github.com/ibraheemdev/modern-unix)** - modern replacements for classic unix commands; source for the [Modern CLI](tools/modern-cli.md) category.
- **[sintaxi/awesome-cli](https://github.com/sintaxi/awesome-cli)** - curated CLI list.

## Selection criteria

A tool earns a place only if an AI agent would realistically shell out to it:

1. **Scriptable** - runs non-interactively (flags/args/stdin), no human required at the keyboard.
2. **Composable** - reads stdin or args, writes stdout, returns honest exit codes; fits in a pipeline.
3. **Does real work** - offloads something the model should not do itself (transcode video, OCR a scan, query a database, crawl a site).
4. **Mature or clearly best-in-class** - prefer the tool an experienced engineer would already reach for.

Excluded: interactive-only TUIs, games, chat/music clients, terminal eye-candy, and novelty toys.

## Maintenance

- Source repos are shallow-cloned into `_sources/` (gitignored) for mining. Re-clone to refresh.
- Keep categories in sync with the taxonomy in [`_docs/Agent-Native-Tooling.md`](_docs/Agent-Native-Tooling.md).
- Prefer official repos/homepages for links; verify a tool still ships a non-interactive mode before adding.
