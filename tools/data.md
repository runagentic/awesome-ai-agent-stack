# Data

Slice, filter, transform, and query structured data: JSON, YAML, XML, CSV, and SQL. The glue that turns raw output into something the agent can reason over.

[← back to index](../README.md)

## JSON

- **[jq](https://jqlang.github.io/jq/)** - sed/awk for JSON; filter, transform, and query JSON streams. The canonical agent JSON tool.
- **[gojq](https://github.com/itchyny/gojq)** - pure-Go jq with better error messages; drop-in replacement.
- **[fx](https://github.com/antonmedv/fx)** - JSON viewer and processor with JS expressions; scriptable transforms.
- **[jless](https://github.com/PaulJuliusMartinez/jless)** - read-only viewer for exploring and searching large JSON payloads.
- **[gron](https://github.com/tomnomnom/gron)** - flatten JSON into greppable `path = value` assignments and back; makes JSON searchable with grep.
- **[jc](https://github.com/kellyjonbrazil/jc)** - convert the output of common CLIs (ls, ps, dig, ifconfig...) into JSON. Turns arbitrary command output into structured data an agent can parse.

## YAML / XML / multi-format

- **[yq](https://github.com/mikefarah/yq)** - portable YAML (and JSON/XML) processor; edit config/data files programmatically.
- **[dasel](https://github.com/TomWright/dasel)** - query and modify JSON/YAML/TOML/XML/CSV with one selector syntax.
- **[xq](https://github.com/sibprogrammer/xq)** - XML/HTML beautifier and content extractor.
- **[dyff](https://github.com/homeport/dyff)** - structural diff for YAML files; readable config diffs.

## CSV / tabular

- **[Miller](https://github.com/johnkerl/miller)** - awk/sed/cut/join/sort for CSV, TSV, JSON, and JSON Lines; streaming tabular transforms.
- **[csvkit](https://github.com/wireservice/csvkit)** - suite to convert, query, and manipulate CSV files.
- **[qsv](https://github.com/dathere/qsv)** - extremely fast CSV query/slice/join/validate/transform toolkit for large data.
- **[xsv](https://github.com/BurntSushi/xsv)** - fast CSV indexing, slicing, joining, and stats.
- **[VisiData](https://github.com/saulpw/visidata)** - data multitool with a batch/replay mode for scripted tabular processing.

## SQL over files & embedded databases

- **[DuckDB](https://github.com/duckdb/duckdb)** - in-process analytical SQL over CSV/Parquet/JSON and databases; blazing fast, zero setup. A default for agent data work.
- **[SQLite](https://sqlite.org/cli.html)** - the embedded SQL database; `sqlite3` runs queries against local `.db` files non-interactively.
- **[sqlite-utils](https://github.com/simonw/sqlite-utils)** - build, query, and manipulate SQLite databases from the CLI; great for agents assembling structured stores.
- **[sq](https://github.com/neilotoole/sq)** - jq-style access across SQL databases, CSV, and Excel; unified querying of structured sources.
- **[q](https://harelba.github.io/q/)** - run SQL directly against CSV/TSV files as if they were tables.
