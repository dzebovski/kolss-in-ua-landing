"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

export type KitchenCarouselCollection = {
  title: string;
  subtitle: string;
  bestFor: string;
  image: StaticImageData;
  alt: string;
};

type KitchenCarouselProps = {
  collections: KitchenCarouselCollection[];
};

export function KitchenCarousel({ collections }: KitchenCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const syncCarouselState = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = window.requestAnimationFrame(() => syncCarouselState(emblaApi));
    emblaApi.on("select", syncCarouselState);
    emblaApi.on("reInit", syncCarouselState);
    return () => {
      window.cancelAnimationFrame(frame);
      emblaApi.off("select", syncCarouselState);
      emblaApi.off("reInit", syncCarouselState);
    };
  }, [emblaApi, syncCarouselState]);

  if (collections.length === 0) return null;

  return (
    <div
      className="mt-14 sm:mt-16"
      role="region"
      aria-label="Колекції кухонь KOLSS"
      aria-roledescription="carousel"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <p className="text-[13px] font-semibold uppercase leading-none text-muted">
          {selectedIndex + 1} / {collections.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-2xl disabled:opacity-35"
            aria-label="Попередня колекція"
            disabled={!canScrollPrev}
            onClick={() => emblaApi?.scrollPrev()}
          >
            ‹
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-2xl disabled:opacity-35"
            aria-label="Наступна колекція"
            disabled={!canScrollNext}
            onClick={() => emblaApi?.scrollNext()}
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex touch-pan-y lg:-ml-10">
          {collections.map((collection) => (
            <article
              key={collection.title}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 flex-[0_0_100%] pl-5 lg:pl-10"
            >
              <h3 className="text-[34px] font-bold leading-[1.04] sm:text-[40px]">
                {collection.title}
              </h3>
              <p className="mt-2 text-muted">{collection.subtitle}</p>
              <p className="mt-3 text-[13px] font-semibold uppercase text-muted">
                Найкраще для: {collection.bestFor}
              </p>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex gap-2" aria-label="Обрати колекцію">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-9 bg-kolss-lime"
                : "w-2.5 bg-border"
            }`}
            aria-label={`Колекція ${collections[index]?.title}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
