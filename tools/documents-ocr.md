# Documents & OCR

Convert between formats, manipulate PDFs, pull text out of images and scans, and turn documents into clean markdown an LLM can read.

[← back to index](../README.md)

## Conversion

- **[Pandoc](https://pandoc.org/)** - universal document converter (Markdown, HTML, DOCX, PDF, LaTeX, ODT, and more); the go-to for any format-to-format job.
- **[LibreOffice](https://www.libreoffice.org/)** - `libreoffice --headless --convert-to` scripts Office-format conversion (DOCX/XLSX/PPTX to PDF, etc.) without a GUI.
- **[Typst](https://github.com/typst/typst)** - modern typesetting engine with a fast CLI; generate PDFs from lightweight markup, a saner LaTeX.
- **[mdcat](https://github.com/swsnr/mdcat)** - render Markdown to the terminal (cat for Markdown); pipe-friendly display.

## PDF-to-markdown / LLM ingestion

- **[Docling](https://github.com/docling-project/docling)** - parse PDF, DOCX, PPTX, and images into structured markdown/JSON for LLMs; layout- and table-aware.
- **[Marker](https://github.com/datalab-to/marker)** - convert PDF (and more) to clean markdown fast and accurately, with equation and table handling.

## PDF manipulation

- **[PDFtk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)** - split, merge, rotate, stamp, and fill PDFs from the CLI.
- **[OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF)** - add a searchable OCR text layer to scanned PDFs; keeps the original image.

## OCR

- **[Tesseract](https://github.com/tesseract-ocr/tesseract)** - the standard open-source OCR engine; extract text from images in 100+ languages.

## Presentations

- **[Marp](https://github.com/marp-team/marp-cli)** - convert Markdown to HTML/PDF/PowerPoint slide decks.
- **[DeckTape](https://github.com/astefanutti/decktape)** - export HTML presentations to PDF.
- **[presenterm](https://github.com/mfontanini/presenterm)** - build and render Markdown slide decks from the terminal.
- **[DocToc](https://github.com/thlorenz/doctoc)** - generate a table of contents for Markdown files.
