import { bio, news, researchInterestText, publications, internships, awards } from "@/data/content";
import type { ExperienceItem } from "@/data/content";
import { SocialIcon } from "@/components/social-icons";

export default function HomePage() {
  const cvLink = bio.cvLinks[0];
  const emailLink = bio.social.find((l) => l.platform === "email");
  const scholarLink = bio.social.find((l) => l.platform === "google-scholar");

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 bg-[#D1FAE5] py-3">
        <nav className="flex justify-end gap-8 px-4 text-sm font-medium text-slate-700 lg:px-[120px]">
          <a href="#publications" className="hover:text-slate-900">Publication</a>
          <a href="#internship" className="hover:text-slate-900">Internship</a>
          <a href="#awards" className="hover:text-slate-900">Awards</a>
        </nav>
      </header>

      <div className="px-4 py-8 lg:px-[120px] lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="space-y-10">
            <div className="flex flex-col items-start">
              <div className="aspect-square w-[160px] overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-slate-500">
                  {initialsFromName(bio.name)}
                </div>
              </div>
              <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                {bio.name}
              </p>
              {(bio.title || bio.affiliation) && (
                <p className="mt-1 text-sm text-slate-500">
                  {[bio.title, bio.affiliation].filter(Boolean).join(" · ")}
                </p>
              )}
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
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
                Research Interest
              </h2>
              <div className="text-base leading-relaxed text-slate-700">
                {researchInterestText}
              </div>
            </section>

            <section id="publications">
              <h2 className="mb-5 text-base font-semibold uppercase tracking-wider text-black">
                Publication
              </h2>
              <div className="space-y-6">
                {publications.map((pub) => (
                  <article
                    key={pub.title}
                    className="flex aspect-[5/1] w-full overflow-hidden rounded-lg bg-white"
                    style={{ boxShadow: "1px 1px 43.3px -1px rgba(0,0,0,0.05)" }}
                  >
                    <div className="h-full w-[38%] flex-shrink-0 bg-slate-200">
                      <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                        thumb
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-6 py-4 lg:px-8">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg font-semibold leading-snug text-slate-900 hover:underline"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold leading-snug text-slate-900">{pub.title}</p>
                      )}
                      <p className="text-base text-slate-600">{pub.venue}</p>
                      <p className="text-base text-slate-500">{pub.authors}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="internship">
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
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
              <h2 className="mb-4 text-base font-semibold uppercase tracking-wider text-black">
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

function initialsFromName(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
