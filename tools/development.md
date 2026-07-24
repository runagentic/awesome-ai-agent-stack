# Development

Git, code search, static analysis, refactoring, testing, and benchmarking. The tools an agent uses to navigate and change a codebase.

[← back to index](../README.md)

## Version control

- **[git](https://git-scm.com/)** - the base version-control CLI; every agent commit, diff, branch, and blame goes through it.
- **[GitHub CLI (gh)](https://cli.github.com/)** - scriptable access to PRs, issues, releases, Actions, and the GitHub API.
- **[git-cliff](https://github.com/orhun/git-cliff)** - generate changelogs and release notes from Conventional Commits.
- **[gitleaks](https://github.com/gitleaks/gitleaks)** - detect hardcoded secrets, API keys, and tokens in a repo; audit before pushing.

## Code search

- **[ripgrep](https://github.com/BurntSushi/ripgrep)** - extremely fast recursive regex search that respects gitignore. The default agent code-search tool.
- **[ugrep](https://github.com/Genivia/ugrep)** - fast grep with boolean queries, fuzzy search, and hexdumps.
- **[fd](https://github.com/sharkdp/fd)** - simple, fast alternative to `find`; locate files by name/pattern.
- **[fselect](https://github.com/jhspetersson/fselect)** - find files with SQL-like queries.

## Structural search & refactor

- **[ast-grep](https://github.com/ast-grep/ast-grep)** - structural code search, lint, and rewrite by AST pattern; semantic refactors across languages.
- **[tree-sitter](https://github.com/tree-sitter/tree-sitter)** - incremental parser and CLI powering language-aware tooling; query syntax trees directly.
- **[Semgrep](https://github.com/semgrep/semgrep)** - fast pattern-based static analysis for bugs and security across 30+ languages.
- **[srgn](https://github.com/alexpovel/srgn)** - syntax-aware grep-and-manipulate for source code.
- **[sd](https://github.com/chmln/sd)** - intuitive find-and-replace (a simpler sed) for literal/regex substitution.
- **[amber](https://github.com/dalance/amber)** - code-aware search-and-replace for project-wide edits.

## Diff & metrics

- **[difftastic](https://github.com/Wilfred/difftastic)** - syntax-aware structural diff that compares by AST; meaningful diffs to reason over.
- **[delta](https://github.com/dandavison/delta)** - syntax-highlighting viewer for git and diff output.
- **[tokei](https://github.com/XAMPPRocky/tokei)** - fast code statistics (files, lines, comments) by language, with JSON output.
- **[scc](https://github.com/boyter/scc)** - fast code counter with complexity and COCOMO estimates.

## Lint, test, run

- **[ShellCheck](https://www.shellcheck.net/)** - static analysis for shell scripts; validate generated bash before running it.
- **[shfmt](https://github.com/mvdan/sh)** - format and parse shell scripts.
- **[just](https://github.com/casey/just)** - modern make-like command runner for project tasks.
- **[bats-core](https://github.com/bats-core/bats-core)** - Bash automated testing system; scriptable test suites with exit codes.
- **[Step CI](https://github.com/stepci/stepci)** - declarative API testing driven by config files.
- **[loadtest](https://github.com/alexfernandez/loadtest)** - run HTTP load tests from the CLI.
- **[grex](https://github.com/pemistahl/grex)** - generate a regex from example strings.

## Watch & benchmark

- **[watchexec](https://github.com/watchexec/watchexec)** - run commands in response to file changes; build/test-on-change loops.
- **[entr](https://github.com/eradman/entr)** - run an arbitrary command when files change; minimal automation glue.
- **[hyperfine](https://github.com/sharkdp/hyperfine)** - command-line benchmarking with statistical output; compare command performance.
