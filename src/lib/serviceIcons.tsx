import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Compass,
  FileText,
  Mail,
  Megaphone,
  Monitor,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export type ServiceIconKey =
  | "consulting"
  | "talent"
  | "automation"
  | "management"
  | "operations"
  | "workspace"
  | "benchmark"
  | "research"
  | "development"
  | "web"
  | "cloud"
  | "strategy"
  | "security"
  | "seo"
  | "paidMedia"
  | "social"
  | "content"
  | "email"
  | "reputation";

const iconMap: Record<ServiceIconKey, LucideIcon> = {
  consulting: Briefcase,
  talent: Users,
  automation: Bot,
  management: BadgeCheck,
  operations: Settings,
  workspace: Building2,
  benchmark: BarChart3,
  research: Search,
  development: Code2,
  web: Monitor,
  cloud: Cloud,
  strategy: Compass,
  security: ShieldCheck,
  seo: Search,
  paidMedia: Megaphone,
  social: Share2,
  content: FileText,
  email: Mail,
  reputation: Star,
};

export const ServiceIcon = ({
  iconKey,
  className = "service-lucide-icon",
}: {
  iconKey: ServiceIconKey;
  className?: string;
}) => {
  const Icon = iconMap[iconKey];
  return <Icon className={className} aria-hidden="true" />;
};
