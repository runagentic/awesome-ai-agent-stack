# Modern CLI

Modern, fast, parseable replacements for classic unix tools. Better default output means less prompt space spent teaching the agent to read it, and cleaner data to pipe onward. (Search tools like ripgrep/fd live under [Development](development.md).)

[← back to index](../README.md)

## Viewing & listing

- **[bat](https://github.com/sharkdp/bat)** - cat clone with syntax highlighting and git integration; use `--plain` for clean piping.
- **[eza](https://github.com/eza-community/eza)** - modern, maintained `ls` with tree view and git awareness; structured directory listings.
- **[hexyl](https://github.com/sharkdp/hexyl)** - command-line hex viewer with colored output; inspect binary files.
- **[tldr](https://github.com/tldr-pages/tldr)** - community simplified man pages with practical examples; quick command-usage lookup.

## Navigation & selection

- **[zoxide](https://github.com/ajeetdsouza/zoxide)** - smarter `cd` that learns your directories; `zoxide query` resolves paths in scripts.
- **[fzf](https://github.com/junegunn/fzf)** - general-purpose fuzzy finder; usable non-interactively via `--filter` to rank/select lines in a pipeline.

## Disk usage

- **[dust](https://github.com/bootandy/dust)** - intuitive `du` alternative showing directory sizes as a tree.
- **[duf](https://github.com/muesli/duf)** - better `df` with parseable (JSON) output; inspect filesystem/mount usage.
- **[gdu](https://github.com/dundee/gdu)** - fast parallel disk-usage analyzer with a non-interactive mode.

## Text helpers

- **[choose](https://github.com/theryangeary/choose)** - human-friendly field selector; simpler `cut`/`awk` for extracting columns.
- **[hasha-cli](https://github.com/sindresorhus/hasha-cli)** - hash text, files, or stdin from the command line; quick checksums.
