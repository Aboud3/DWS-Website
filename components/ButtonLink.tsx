import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-ink text-white hover:bg-zinc-800"
      : "bg-white text-ink shadow-line hover:bg-zinc-100";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
