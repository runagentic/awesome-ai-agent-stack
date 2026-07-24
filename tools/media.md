# Media

Image, video, and audio: convert, transform, generate, transcribe, and download. The heavy binary work an agent should never attempt in-model.

[← back to index](../README.md)

## Video

- **[FFmpeg](https://ffmpeg.org/)** - the universal audio/video transcoder, trimmer, muxer, and filter; delegate any video/audio processing here. `ffprobe` (bundled) inspects streams as JSON.
- **[yt-dlp](https://github.com/yt-dlp/yt-dlp)** - download video/audio from YouTube and 1000+ sites with format selection and metadata extraction.
- **[gallery-dl](https://github.com/mikf/gallery-dl)** - download image galleries and collections from many hosting sites; bulk retrieval.
- **[streamlink](https://github.com/streamlink/streamlink)** - extract stream URLs from live streaming sites for piping into other tools.

## Image

- **[ImageMagick](https://imagemagick.org/)** - create, convert, resize, and composite bitmap images across dozens of formats; the core image workhorse.
- **[gifsicle](https://github.com/kohler/gifsicle)** - create, manipulate, and optimize GIFs from the command line.
- **[SVGO](https://github.com/svg/svgo)** - optimize/minify SVG files non-interactively.
- **[imgp](https://github.com/jarun/imgp)** - fast batch image resizer and rotator.
- **[exiftool](https://exiftool.org/)** - read/write image and media metadata across formats; inspect or edit EXIF.
- **[pastel](https://github.com/sharkdp/pastel)** - generate, analyze, and convert colors from the CLI; scriptable color math.
- **[pageres-cli](https://github.com/sindresorhus/pageres-cli)** - capture website screenshots at chosen viewports/resolutions.
- **[freeze](https://github.com/charmbracelet/freeze)** - generate images of source code and terminal output.
- **[chafa](https://github.com/hpjansson/chafa)** - render images as terminal graphics (ANSI/sixel); preview images in text output.

## Audio

- **[whisper.cpp](https://github.com/ggml-org/whisper.cpp)** - fast local speech-to-text (OpenAI Whisper in C++); transcribe audio to text/subtitles offline.
- **[SoX](https://sourceforge.net/projects/sox/)** - the "swiss army knife" of audio: convert, trim, resample, and apply effects from the CLI.
- **[FFmpeg](https://ffmpeg.org/)** - also the go-to for audio extraction, format conversion, and concatenation.
