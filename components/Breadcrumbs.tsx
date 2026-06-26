import Link from "next/link";
import { Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { brandOrange } from "@/lib/theme";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

export default function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const linkColor = variant === "light" ? brandOrange : brandOrange;
  const currentColor = variant === "light" ? "#e2e8f0" : "text.primary";
  const separatorColor = variant === "light" ? "#94a3b8" : undefined;

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" sx={{ color: separatorColor }} />}
      aria-label="breadcrumb"
      sx={{ mb: 3 }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast || !item.href) {
          return (
            <Typography key={item.label} sx={{ fontWeight: 600, color: currentColor }}>
              {item.label}
            </Typography>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            style={{ color: linkColor, textDecoration: "none", fontWeight: 500 }}
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
