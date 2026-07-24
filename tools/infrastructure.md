# Infrastructure

Containers, orchestration, infrastructure-as-code, secrets, and network diagnostics. How an agent builds, ships, and inspects running systems.

[← back to index](../README.md)

## Containers

- **[Docker](https://docs.docker.com/reference/cli/docker/)** - build, run, and manage containers; the base unit an agent packages and ships work in.
- **[Docker Compose](https://docs.docker.com/compose/)** - define and run multi-container apps from a single YAML file.
- **[Podman](https://podman.io/)** - daemonless, rootless container engine; drop-in Docker-compatible CLI.

## Orchestration & IaC

- **[kubectl](https://kubernetes.io/docs/reference/kubectl/)** - control Kubernetes clusters; apply manifests and query workloads non-interactively.
- **[Helm](https://helm.sh/)** - package manager for Kubernetes; template and deploy charts.
- **[Terraform](https://github.com/hashicorp/terraform)** - declarative infrastructure-as-code across providers; plan and apply changes.
- **[Ansible](https://github.com/ansible/ansible)** - agentless configuration management and provisioning via YAML playbooks.
- **[updatecli](https://github.com/updatecli/updatecli)** - declarative dependency/update automation driven by config.

## Secrets & encryption

- **[age](https://github.com/FiloSottile/age)** - simple, modern, composable file encryption with small keys; encrypt/decrypt in pipelines.
- **[SOPS](https://github.com/getsops/sops)** - encrypt/decrypt values inside YAML/JSON/ENV/INI files; manage secrets in config.
- **[acmetool](https://github.com/hlandau/acmetool)** - automate ACME/Let's Encrypt certificate acquisition.

## Process & network diagnostics

- **[procs](https://github.com/dalance/procs)** - modern `ps` replacement with structured output; inspect running processes.
- **[glances](https://github.com/nicolargo/glances)** - cross-platform system monitor with JSON/CSV export and an API; pull metrics non-interactively.
- **[bandwhich](https://github.com/imsnif/bandwhich)** - show current network utilization by process and connection.
- **[trippy](https://github.com/fujiapple852/trippy)** - combined traceroute and ping; diagnose network paths.
- **[gping](https://github.com/orf/gping)** - ping with a graph and multi-host support; scripted reachability with timing.
- **[flog](https://github.com/mingrammer/flog)** - generate fake logs in common formats for testing pipelines.
