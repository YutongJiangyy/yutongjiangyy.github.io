import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
} from "lucide-react";
import type { SocialPlatform } from "@/data/content";

function GoogleScholarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
    </svg>
  );
}

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  const base = className ?? "h-4 w-4";

  switch (platform) {
    case "email":
      return <Mail className={base} aria-hidden="true" />;
    case "github":
      return <Github className={base} aria-hidden="true" />;
    case "linkedin":
      return <Linkedin className={base} aria-hidden="true" />;
    case "google-scholar":
      return <GoogleScholarIcon className={base} />;
    case "x":
      return <Twitter className={base} aria-hidden="true" />;
    case "website":
    default:
      return <Globe className={base} aria-hidden="true" />;
  }
}

