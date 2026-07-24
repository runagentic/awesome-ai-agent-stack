# awesome-ai-agent-stack

> The CLI stack for building AI agents.

AI agents are strongest at the command line. Give an agent a shell and a set of mature, scriptable CLIs and it can edit code, process media, crawl the web, transform data, and ship infrastructure without you writing custom tool code for each task.

This is a curated list of **command-line tools an agent can shell out to**, plus the notable MCP servers and APIs that fill the gaps. Every tool here is picked for one job: it is scriptable, composable (args in, stdout out, honest exit codes), and does real work the agent can delegate. Interactive-only TUIs, games, and novelty toys are left out.

**Guiding pattern:** the LLM decides *what* to do (reasoning, planning, tool selection); mature specialized tools decide *how*.

## Categories

| List | What is in it |
|------|---------------|
| [Web & Research](tools/web-research.md) | HTTP clients, scraping, crawling, search, DNS |
| [Media](tools/media.md) | Image, video, and audio processing and download |
| [Documents & OCR](tools/documents-ocr.md) | Format conversion, PDF, OCR, doc-to-markdown |
| [Data](tools/data.md) | JSON/YAML/CSV processors, SQL over files, embedded DBs |
| [Development](tools/development.md) | Git, code search, static analysis, testing, benchmarking |
| [Files & Cloud](tools/files-cloud.md) | Sync, transfer, backup, archive, cloud storage |
| [Infrastructure](tools/infrastructure.md) | Containers, orchestration, IaC, secrets, network |
| [Modern CLI](tools/modern-cli.md) | Better-output replacements for classic unix tools |
| [AI & Agent Utilities](tools/ai-agent-utils.md) | LLM CLIs, context builders, token tools, sandboxes |

## How to read an entry

Each entry is `name - what it does; why it matters for an agent`. Prefer the tool over reimplementing its job in agent code. Compose small tools into pipelines.

## Sources

Curated from established awesome-lists plus tools known to work well in agent loops. See [sources.md](sources.md) for credits and how this list is maintained.

## License

[MIT](LICENSE)
