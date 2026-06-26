import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

type LogoProps = {
  height?: number;
};

export default function Logo({ height = 48 }: LogoProps) {
  return (
    <Link
      href="/"
      style={{ textDecoration: "none", display: "inline-flex", flexShrink: 0 }}
    >
      <Image
        src="/logo.avif"
        alt={SITE.name}
        width={180}
        height={height}
        style={{ height: "auto", width: "auto", maxHeight: height }}
        priority
      />
    </Link>
  );
}
