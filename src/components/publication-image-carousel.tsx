"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface PublicationImageCarouselProps {
  images: CarouselImage[];
  initialIndex: number;
  venue: string;
}

export function PublicationImageCarousel({
  images,
  initialIndex,
  venue,
}: PublicationImageCarouselProps) {
  const safeInitialIndex = images.length > 0 && initialIndex >= 0 ? initialIndex % images.length : 0;
  const [activeIndex, setActiveIndex] = useState(safeInitialIndex);
  const activeImage = images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="relative aspect-[16/9] w-full min-w-0 overflow-hidden bg-slate-50 md:aspect-auto md:min-h-[200px]">
      <div className="absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)]">
        <span className="inline-flex rounded-full border-2 border-emerald-900 bg-[#D1FAE5] px-4 py-2 text-sm font-bold uppercase leading-none text-emerald-950">
          {venue}
        </span>
      </div>

      {activeImage && (
        <div className="absolute inset-x-3 bottom-3 top-14">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous publication image"
            title="Previous image"
            className="absolute left-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 opacity-100 shadow-sm transition hover:bg-white hover:text-slate-950 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:opacity-0 md:group-hover/publication:opacity-100"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next publication image"
            title="Next image"
            className="absolute right-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 opacity-100 shadow-sm transition hover:bg-white hover:text-slate-950 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 md:opacity-0 md:group-hover/publication:opacity-100"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
