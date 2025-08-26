"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BackLink({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Link
      href="/"
      onClick={(e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          router.back(); // restores scroll position
        } else {
          router.push("/"); // fallback if no history
        }
      }}
      className={className}
    >
    </Link>
  );
}
