"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ShareNowButton() {
  return (
    <Button asChild>
      <Link href="/upload">
        Share now
        <ChevronRight className="size-4 ml-2" />
      </Link>
    </Button>
  );
}