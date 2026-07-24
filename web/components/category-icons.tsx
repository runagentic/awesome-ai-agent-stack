import {
  Bot,
  Clapperboard,
  CloudUpload,
  Code2,
  Database,
  FileText,
  Globe,
  Server,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "web-research": Globe,
  media: Clapperboard,
  "documents-ocr": FileText,
  data: Database,
  development: Code2,
  "files-cloud": CloudUpload,
  infrastructure: Server,
  "modern-cli": Terminal,
  "ai-agent-utils": Bot,
};

export function categoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Terminal;
}
