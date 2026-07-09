import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { awards, bio, internships, news, publications, researchInterestText } from "@/data/content";
import type { ExperienceItem } from "@/data/content";
import { PublicationImageCarousel } from "@/components/publication-image-carousel";
import { PublicationOverview } from "@/components/publication-overview";
import { SocialIcon } from "@/components/social-icons";

const sectionTitleClass = "text-xs font-semibold uppercase text-neutral-500";

export default function HomePage() {
  const cvLink = bio.cvLinks[0];

  return (
    <main className="mx-auto min-h-screen max-w-[1376px] px-8 pb-20 pt-16 sm:px-12">
      <nav className="sticky top-0 z-30 flex items-center justify-end gap-5 border-b border-neutral-300 bg-white/95 py-3 text-xs text-neutral-600 backdrop-blur-sm sm:gap-8 sm:text-sm">
        <a href="#publications">Publications</a>
        <a href="#awards">Awards</a>
        <a href="#internship">Internship</a>
      </nav>

      <div className="mt-12 grid items-start gap-14 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20">
        <aside className="font-light lg:sticky lg:top-24">
          <div className="flex items-start gap-5 lg:block">
            <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-full bg-neutral-100 lg:mb-7 lg:w-32">
              <Image
                src="/publications/avatar.jpg"
                alt={bio.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-[30px] font-light leading-none text-neutral-950">
                {bio.name}
              </h1>
              <dl className="mt-6 max-w-[300px] space-y-5 text-sm leading-relaxed">
                <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3">
                  <dt className="pt-0.5 text-[11px] font-medium uppercase text-neutral-400">Master</dt>
                  <dd>
                    <p className="text-neutral-700">AI and Data Visualization</p>
                    <p className="mt-0.5 text-neutral-400">Tongji University</p>
                  </dd>
                </div>
                <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3">
                  <dt className="pt-0.5 text-[11px] font-medium uppercase text-neutral-400">Bachelor</dt>
                  <dd>
                    <p className="text-neutral-700">Digital Media and Communication Design</p>
                    <p className="mt-0.5 text-neutral-400">Tongji University</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-3 text-sm text-neutral-800">
            {bio.social.filter((link) => link.platform !== "github").map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.platform === "email" ? undefined : "_blank"}
                rel={link.platform === "email" ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5"
              >
                <SocialIcon platform={link.platform} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            {cvLink && (
              <a
                href={cvLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                CV
              </a>
            )}
          </div>

          <section id="news" className="mt-14">
            <h2 className={sectionTitleClass}>News</h2>
            <div className="mt-5 space-y-5">
              {news.map((item) => (
                <article key={`${item.date}-${item.title}`} className="text-sm leading-relaxed">
                  <time className="text-xs text-neutral-400">{item.date}</time>
                  <p className="mt-1 text-neutral-700">{item.title}</p>
                  {item.text && <p className="mt-1 text-neutral-500">{item.text}</p>}
                </article>
              ))}
            </div>
          </section>
        </aside>

        <div className="min-w-0">
          <section className="grid items-start gap-5 pb-14 md:grid-cols-[max-content_minmax(0,1fr)] md:gap-6 xl:gap-8">
            <h2 className="text-2xl font-light text-neutral-950">Research Interest</h2>
            <div className="min-w-0 space-y-4 text-sm font-light leading-7 text-neutral-600 sm:text-base">
              {researchInterestText.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section id="publications" className="scroll-mt-20 pt-12">
            <h2 className="mb-12 text-2xl font-light text-neutral-950">Publication</h2>

            <div className="space-y-24 lg:space-y-28">
              {publications.map((pub) => (
                <article
                  key={pub.title}
                  className="group/publication grid min-w-0 gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(320px,42%)] xl:gap-4"
                >
                  <div className="min-w-0">
                    <h3 className="break-words text-xl font-normal leading-[1.5] text-neutral-950">
                      {pub.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                      {renderAuthors(pub.authors)}
                    </p>
                    <p className="mt-5 text-sm leading-6 text-neutral-600">{pub.summary}</p>

                    <div className="mt-6 grid grid-cols-[max-content_minmax(0,1fr)] items-start gap-x-2 gap-y-4">
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-300 px-3 text-xs font-bold text-neutral-800 no-underline transition-colors hover:border-neutral-950 hover:bg-neutral-950 hover:text-white hover:no-underline"
                        >
                          {pub.venue}
                          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <PublicationOverview description={pub.description} />
                    </div>
                  </div>

                  <PublicationImageCarousel
                    images={[
                      ...(pub.thumbnail
                        ? [{ src: pub.thumbnail, alt: pub.thumbnailAlt ?? pub.title }]
                        : []),
                      ...(pub.additionalImages ?? []),
                    ]}
                    initialIndex={0}
                  />
                </article>
              ))}
            </div>
          </section>

          <div className="mt-28 grid gap-20 xl:grid-cols-2 xl:gap-24">
            <ExperienceSection id="awards" title="Awards" items={awards} />
            <ExperienceSection id="internship" title="Internship" items={internships} />
          </div>
        </div>
      </div>
    </main>
  );
}

function ExperienceSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-light text-neutral-950">{title}</h2>
      <ul className="mt-8 divide-y divide-neutral-200">
        {items.map((item) => (
          <li key={`${item.title}-${item.organization}`} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-5">
            <div>
              <p className="text-sm font-medium text-neutral-900 sm:text-base">{item.title}</p>
              <p className="mt-1 text-sm text-neutral-500">{item.organization}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-6 text-neutral-500">{item.description}</p>
              )}
            </div>
            <p className="text-xs text-neutral-400 sm:text-right">{item.period ?? item.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function renderAuthors(authors: string) {
  return authors.split("Yutong Jiang").map((part, index, parts) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <span className="font-normal text-neutral-600">Yutong Jiang</span>
      )}
    </span>
  ));
}
