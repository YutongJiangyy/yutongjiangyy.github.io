"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function PublicationOverview({
  summary,
  description,
}: {
  summary: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-w-0">
      <div className="flex items-start gap-3">
        <p className="min-w-0 flex-1 text-sm leading-6 text-neutral-600">{summary}</p>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className={`inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
            isOpen
              ? "border-neutral-950 bg-neutral-950 text-white"
              : "border-neutral-300 text-neutral-600 hover:border-neutral-500 hover:text-neutral-950"
          }`}
        >
          <span>Overview</span>
          <ChevronDown
            aria-hidden="true"
            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {isOpen && (
        <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
      )}
    </div>
  );
}
