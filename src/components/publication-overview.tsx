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
      <p className="text-sm leading-6 text-neutral-600">
        {summary}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse publication details" : "Expand publication details"}
          onClick={() => setIsOpen((open) => !open)}
          className={`ml-1.5 inline-flex h-5 w-8 translate-y-[4px] items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
            isOpen
              ? "border-neutral-950 bg-neutral-950 text-white"
              : "border-neutral-300 text-neutral-600 hover:border-neutral-500 hover:text-neutral-950"
          }`}
        >
          <ChevronDown
            aria-hidden="true"
            className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </p>
      {isOpen && (
        <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
      )}
    </div>
  );
}
