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
  className?: string;
}

export function PublicationImageCarousel({
  images,
  initialIndex,
  className = "",
}: PublicationImageCarouselProps) {
  const safeInitialIndex = images.length > 0 && initialIndex >= 0 ? initialIndex % images.length : 0;
  const [activeIndex, setActiveIndex] = useState(safeInitialIndex);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div
      className={`group/image relative aspect-[4/3] min-w-0 self-start overflow-hidden rounded-[28px] border border-neutral-200 bg-white ${className}`}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={index === activeIndex ? image.alt : ""}
          aria-hidden={index !== activeIndex}
          fill
          loading="eager"
          className={`object-cover transition-opacity duration-300 ease-out ${
            index === activeIndex
              ? "opacity-70 group-hover/image:opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 70vw, 100vw"
          unoptimized
        />
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] rounded-[27px]"
        style={{ boxShadow: "inset 0 0 32px 18px rgba(255, 255, 255, 0.72)" }}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous publication image"
            title="Previous image"
            className="absolute left-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-neutral-300 bg-white/95 text-neutral-600 opacity-100 transition hover:border-neutral-900 hover:text-neutral-950 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 xl:opacity-0 xl:group-hover/publication:opacity-100"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next publication image"
            title="Next image"
            className="absolute right-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-neutral-300 bg-white/95 text-neutral-600 opacity-100 transition hover:border-neutral-900 hover:text-neutral-950 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 xl:opacity-0 xl:group-hover/publication:opacity-100"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-white/90 px-2 py-1 text-[10px] tabular-nums text-neutral-500">
            {activeIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
