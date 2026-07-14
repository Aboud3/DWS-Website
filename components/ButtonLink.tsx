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
      ? "border-ink bg-ink text-white hover:bg-zinc-800"
      : "border-zinc-500 bg-white text-ink shadow-line hover:bg-zinc-100";

  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold leading-none transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
