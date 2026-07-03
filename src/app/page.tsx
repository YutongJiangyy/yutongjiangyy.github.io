import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { bio, news, researchInterestText, publications, internships, awards } from "@/data/content";
import type { ExperienceItem } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";
import { PublicationImageCarousel } from "@/components/publication-image-carousel";

export default function HomePage() {
  const cvLink = bio.cvLinks[0];
  const emailLink = bio.social.find((l) => l.platform === "email");
  const scholarLink = bio.social.find((l) => l.platform === "google-scholar");
  const publicationImages = publications.flatMap((publication) =>
    publication.thumbnail
      ? [{ src: publication.thumbnail, alt: publication.thumbnailAlt ?? publication.title }]
      : [],
  );

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 bg-[#D1FAE5] py-3">
        <nav className="mx-auto flex max-w-[1680px] justify-end gap-5 px-4 text-sm font-medium text-slate-700 sm:gap-8 sm:px-6 lg:px-10 xl:px-16 2xl:px-[120px]">
          <a href="#publications" className="hover:text-slate-900">Publication</a>
          <a href="#internship" className="hover:text-slate-900">Internship</a>
          <a href="#awards" className="hover:text-slate-900">Awards</a>
        </nav>
      </header>

      <div className="mx-auto max-w-[1680px] px-4 py-8 sm:px-6 lg:px-10 lg:py-12 xl:px-16 2xl:px-[120px]">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-12 2xl:grid-cols-[260px_minmax(0,1fr)] 2xl:gap-20">
          <aside className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] xl:block xl:space-y-10">
            <div className="flex flex-col items-start">
              <div className="relative aspect-square w-[160px] overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="/publications/avatar.jpg"
                  alt={bio.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                {bio.name}
              </p>
              <div className="mt-1 space-y-1 text-sm text-slate-500">
                {bio.title && <p>{bio.title}</p>}
                {bio.affiliation && <p>{bio.affiliation}</p>}
              </div>
              <div className="mt-5 flex items-center gap-4">
                {cvLink && (
                  <a
                    href={cvLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  >
                    CV
                  </a>
                )}
                {emailLink && (
                  <a
                    href={emailLink.href}
                    className="text-slate-500 hover:text-slate-900"
                    aria-label="Email"
                  >
                    <SocialIcon platform="email" className="h-5 w-5" />
                  </a>
                )}
                {scholarLink && (
                  <a
                    href={scholarLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900"
                    aria-label="Google Scholar"
                  >
                    <SocialIcon platform="google-scholar" className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <section id="news">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                News
              </h2>
              <div className="space-y-5">
                {news.map((item, idx) => (
                  <div key={idx} className="text-sm">
                    <p className="text-slate-500">{item.date}</p>
                    <p className="mt-1 text-slate-800">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <div className="w-full min-w-0 space-y-14">
            <section>
              <h2
                className="mb-4 text-2xl font-bold italic leading-none text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Research Interest
              </h2>
              <div className="text-base leading-relaxed text-slate-700">
                {researchInterestText}
              </div>
            </section>

            <section id="publications">
              <h2
                className="mb-5 text-2xl font-bold italic leading-none text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Publication
              </h2>
              <div className="space-y-6">
                {publications.map((pub) => (
                  <article
                    key={pub.title}
                    className="group/publication grid w-full min-w-0 overflow-hidden rounded-lg border border-slate-100 bg-white md:grid-cols-[minmax(220px,36%)_minmax(0,1fr)]"
                    style={{ boxShadow: "1px 1px 43.3px -1px rgba(0,0,0,0.05)" }}
                  >
                    <PublicationImageCarousel
                      images={publicationImages}
                      initialIndex={publicationImages.findIndex((image) => image.src === pub.thumbnail)}
                      venue={pub.venue}
                    />
                    <div className="min-w-0 space-y-2 px-5 py-5 sm:px-6 lg:px-8">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block break-words text-base font-semibold leading-relaxed text-slate-900 hover:underline"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="text-base font-semibold leading-relaxed text-slate-900">{pub.title}</p>
                      )}
                      <p className="text-sm leading-relaxed text-slate-500">{pub.authors}</p>
                      <p className="text-sm leading-relaxed text-slate-700">{pub.summary}</p>
                      <details className="group pt-1">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                          <ChevronDown
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                          />
                          <span className="group-open:hidden">More details</span>
                          <span className="hidden group-open:inline">Less details</span>
                        </summary>
                        <p className="mt-3 border-l-2 border-[#D1FAE5] pl-3 text-sm leading-relaxed text-slate-600">
                          {pub.description}
                        </p>
                      </details>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="internship">
              <h2
                className="mb-4 text-2xl font-bold italic leading-none text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Internship
              </h2>
              <ul className="space-y-2 text-base text-slate-700">
                {internships.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && <span className="text-slate-600"> · {item.organization}</span>}
                    {(item.period || item.year) && (
                      <span className="block text-sm text-slate-500">{item.period ?? item.year}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section id="awards">
              <h2
                className="mb-4 text-2xl font-bold italic leading-none text-black"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Honors and Awards
              </h2>
              <ul className="space-y-2 text-base text-slate-700">
                {awards.map((item: ExperienceItem, idx: number) => (
                  <li key={idx}>
                    <span className="font-medium text-slate-900">{item.title}</span>
                    {item.organization && <span className="text-slate-600"> · {item.organization}</span>}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
