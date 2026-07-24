# Files & Cloud

Sync, transfer, back up, compress, and rename. Moving bytes between the agent's disk and cloud storage.

[← back to index](../README.md)

## Sync & transfer

- **[rclone](https://rclone.org/)** - sync and manage files across 50+ cloud storage providers; the agent's data mover for S3, GCS, Drive, and more.
- **[rsync](https://rsync.samba.org/)** - efficient incremental file/directory sync locally or over SSH.
- **[s5cmd](https://github.com/peak/s5cmd)** - very fast parallel S3 (and local) operations; batch commands from a file.
- **[croc](https://github.com/schollz/croc)** - securely send files/folders between machines with a code phrase.
- **[aria2](https://github.com/aria2/aria2)** - multi-protocol, multi-source download utility (HTTP/FTP/SFTP/BitTorrent) with RPC control.

## Cloud provider CLIs

- **[AWS CLI](https://github.com/aws/aws-cli)** - scriptable control of every AWS service; agents provision and query cloud resources.
- **[Google Cloud CLI](https://cloud.google.com/sdk/gcloud)** - `gcloud` and `gsutil` for GCP resources and Cloud Storage.
- **[azcopy](https://github.com/Azure/azure-storage-azcopy)** - high-throughput copy to/from Azure Blob and File storage.

## Backup

- **[restic](https://restic.net/)** - fast, secure, deduplicating backup; script snapshots and restores.
- **[BorgBackup](https://www.borgbackup.org/)** - deduplicating encrypted backup archives with a simple CLI.

## Archive & rename

- **[ouch](https://github.com/ouch-org/ouch)** - painless compress/decompress across zip, tar, gz, and more with one interface.
- **[f2](https://github.com/ayoisaiah/f2)** - fast, safe, scriptable batch renaming with dry-run.
- **[file-type-cli](https://github.com/sindresorhus/file-type-cli)** - detect a file's true type from its content or stdin.
