# AI & Agent Utilities

The layer specific to running LLMs and agents: model CLIs, context builders, token accounting, sandboxes, and notifications. Tools an agent uses to call other models or prepare its own inputs.

[← back to index](../README.md)

## LLM CLIs

- **[llm](https://github.com/simonw/llm)** - Simon Willison's CLI for talking to LLMs (local and hosted); pipe text in, get completions out, with a plugin ecosystem. The default for scripting model calls in a shell.
- **[AIChat](https://github.com/sigoden/aichat)** - all-in-one LLM CLI (chat, shell assistant, RAG) usable non-interactively; delegate sub-prompts to models.
- **[Ollama](https://ollama.com/)** - run open LLMs locally with a simple CLI/API; offline inference for agent subtasks.

## Context building

- **[files-to-prompt](https://github.com/simonw/files-to-prompt)** - concatenate a directory of files into a single prompt-ready block for an LLM.
- **[code2prompt](https://github.com/mufeedvh/code2prompt)** - turn a codebase into a structured LLM prompt with token counts and file trees.
- **[strip-tags](https://github.com/simonw/strip-tags)** - strip HTML tags down to text (optionally by selector) to feed pages to a model cheaply.

## Tokens & measurement

- **[ttok](https://github.com/simonw/ttok)** - count and truncate text by token using tiktoken; budget prompts before sending.

## Sandboxing & safety

- **[greywall](https://github.com/GreyhavenHQ/greywall)** - deny-by-default sandbox with filesystem/network isolation for running agent-generated commands safely.

## Notifications

- **[ntfy](https://github.com/binwiederhier/ntfy)** - send push/desktop notifications on demand or when a long command finishes; agents ping a human on completion.

## MCP servers

The Model Context Protocol standardizes how agents connect to tools and data. When a capability has no good CLI, an MCP server is often the next best integration.

- **[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)** - large curated directory of MCP servers across categories.
- **[Reference MCP servers](https://github.com/modelcontextprotocol/servers)** - the official server implementations (filesystem, git, fetch, and more).
