# Web & Research

HTTP clients, scraping, crawling, search, and DNS. How an agent reaches out to the internet and pulls structured data back.

[← back to index](../README.md)

## Scraping & crawling

- **[Firecrawl](https://github.com/mendableai/firecrawl)** - turn any site into clean LLM-ready markdown; crawl, scrape, and extract via CLI/API. Built for agents; handles JS rendering and returns parseable content.
- **[crawl4ai](https://github.com/unclecode/crawl4ai)** - open-source LLM-friendly web crawler with a `crwl` CLI; outputs markdown and extracted structured data.
- **[monolith](https://github.com/Y2Z/monolith)** - save a complete web page (CSS, JS, images inlined) as one self-contained HTML file for later parsing/archiving.
- **[pup](https://github.com/ericchiang/pup)** - parse HTML on the command line with CSS selectors; pull structured data out of fetched pages into text/JSON.
- **[crawley](https://github.com/s0rg/crawley)** - unix-way web crawler that emits links/data to stdout for pipelines.
- **[hget](https://github.com/bevacqua/hget)** - render a web page as plain text in the terminal; cheap page-to-text.
- **[deadlink](https://github.com/nschloe/deadlink)** - find dead/broken links in files and pages; scriptable link validation.
- **[Playwright](https://github.com/microsoft/playwright)** - drive a real browser (click, type, screenshot, wait) from code/CLI when a page needs full JS execution.

## HTTP clients

- **[HTTPie](https://github.com/httpie/httpie)** - human-friendly HTTP client with JSON support and clean output; hit REST APIs and inspect responses non-interactively.
- **[xh](https://github.com/ducaale/xh)** - fast HTTPie-compatible request tool in Rust; scriptable API calls and downloads.
- **[curlie](https://github.com/rs/curlie)** - curl power with HTTPie ergonomics; drop-in scriptable HTTP client.

## DNS & network lookup

- **[dog](https://github.com/ogham/dog)** - modern DNS client with JSON output and DoT/DoH; resolve and inspect DNS programmatically.
- **[doggo](https://github.com/mr-karan/doggo)** - DNS client with JSON/tabular output and reverse lookups; scriptable queries.

## Search & translation APIs

Not CLIs, but the search/read layer agents commonly call. Reach them over HTTP (or their MCP servers).

- **[Exa](https://exa.ai/)** - embeddings-based web search API built for LLMs; returns clean content, not just links.
- **[Tavily](https://tavily.com/)** - search API optimized for agent RAG with source-ranked results.
- **[Jina Reader](https://github.com/jina-ai/reader)** - prepend `r.jina.ai/` to any URL to get LLM-ready markdown of the page.
- **[translate-shell](https://github.com/soimort/translate-shell)** - translate text via Google/Bing/Yandex from the CLI; scriptable, reads args/stdin.
