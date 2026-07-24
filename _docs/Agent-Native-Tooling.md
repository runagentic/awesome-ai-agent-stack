# Agent-Native Tooling

## Overview

Large Language Models should focus on **reasoning and planning**.

Specialized tools should perform the actual work.

This pattern makes AI agents faster, more reliable, and easier to
extend.

                LLM
                 │
          Planning & Reasoning
                 │
            Tool Selection
                 │
     ┌───────────┼───────────┐
     │           │           │
    FFmpeg     Firecrawl   Git CLI
    Sharp      Exa         Docker
    Remotion   Playwright  Pandoc

------------------------------------------------------------------------

# Core Principle

> The LLM decides **what** to do.
>
> Specialized tools decide **how** to do it.

Instead of asking the model to manipulate videos, images, PDFs, or
repositories itself, the agent orchestrates mature CLI tools and APIs.

------------------------------------------------------------------------

# Categories

## 🎥 Media Creation

### Image Processing

-   Sharp
-   ImageMagick
-   GraphicsMagick
-   libvips
-   Pillow
-   OpenCV

### SVG

-   SVGO
-   Resvg
-   Inkscape CLI
-   CairoSVG

### HTML → Image

-   Puppeteer
-   Playwright
-   Satori
-   html-to-image
-   wkhtmltoimage

### Video

-   FFmpeg
-   FFprobe
-   GStreamer
-   HandBrake CLI

### HTML → Video

-   Remotion
-   Motion Canvas
-   Reveal.js + Puppeteer
-   DeckTape

### Animation

-   Lottie
-   Rive CLI
-   SVGator
-   Manim

------------------------------------------------------------------------

## 📄 Documents

### PDF

-   Docling
-   Marker
-   PyMuPDF
-   PDFium
-   OCRmyPDF

### OCR

-   Tesseract
-   PaddleOCR
-   EasyOCR
-   Surya OCR

### Office Documents

-   Pandoc
-   LibreOffice CLI
-   Typst
-   LaTeX

------------------------------------------------------------------------

## 🌐 Web

### Research

-   Exa
-   Tavily
-   Jina AI Reader
-   SerpAPI

### Scraping

-   Firecrawl
-   Crawl4AI
-   Playwright
-   Puppeteer
-   BeautifulSoup

### Browser Automation

-   Browserbase
-   Stagehand
-   Browser Use
-   Playwright

------------------------------------------------------------------------

## 💻 Development

### Git

-   Git CLI
-   GitHub CLI (gh)
-   LazyGit

### Search

-   ripgrep
-   fd
-   fzf
-   ag

### Static Analysis

-   tree-sitter
-   ast-grep
-   Semgrep

------------------------------------------------------------------------

## 📁 Files

### File Management

-   Filesystem MCP
-   rsync
-   tar
-   zip
-   jq
-   yq

### Cloud Storage

-   rclone
-   AWS CLI
-   gsutil
-   azcopy

------------------------------------------------------------------------

## 🔊 Audio

-   FFmpeg
-   SoX
-   Whisper
-   Deepgram
-   ElevenLabs SDK

------------------------------------------------------------------------

## 📊 Data

-   DuckDB
-   SQLite
-   PostgreSQL CLI
-   csvkit
-   xsv

------------------------------------------------------------------------

## 🐳 Infrastructure

-   Docker
-   Docker Compose
-   Podman
-   kubectl
-   Terraform
-   Helm

------------------------------------------------------------------------

## 🧠 AI Utilities

### Memory

-   Mem0
-   Cognee
-   Zep
-   Graphiti

### Knowledge

-   Context7
-   LlamaIndex
-   Qdrant
-   Weaviate

### Workflow

-   LangGraph
-   n8n
-   Trigger.dev
-   Temporal

### Observability

-   Langfuse
-   OpenTelemetry
-   Grafana

------------------------------------------------------------------------

# Agent Workflow Example

    User Request
          │
          ▼
    Exa
          │
    Firecrawl
          │
    Filesystem MCP
          │
    Sharp
          │
    Remotion
          │
    FFmpeg
          │
    Final Video

------------------------------------------------------------------------

# Key Takeaways

-   Prefer mature tools over custom implementations.
-   Use CLIs whenever possible.
-   Keep the LLM focused on reasoning.
-   Keep tools focused on execution.
-   Compose workflows from small, specialized utilities.
-   Every new CLI is a new capability for an AI agent.
