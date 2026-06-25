import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./WorkDetail.module.css";

type WorkItem = {
  slug: string;
  client: string;
  service: string;
  category: string;
  heroImage: string;
  logo: string;
  intro: string;
  overview: string;
  challenge: string[];
  whatWeDid: string[];
  deliverables: string[];
  results: string[];
  liveUrl?: string;
};

const works: WorkItem[] = [
  {
    slug: "paiker-imports",
    client: "Paiker Imports",
    service: "Media Buying & Creative Campaign System",
    category: "Automotive Growth Campaign",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop",
    logo: "BYD",
    intro:
      "A campaign and creative system designed to improve brand presentation, sharpen offer communication and create a stronger paid acquisition path for an automotive-focused business.",
    overview:
      "Paiker Imports needed a cleaner, more persuasive digital presentation for its automotive inventory and campaign offers. The goal was to build a more premium brand impression while improving the path from first click to qualified enquiry. We approached the project as a combined media buying, messaging and conversion-journey refinement exercise.",
    challenge: [
      "The brand presentation lacked a premium campaign structure and didn’t communicate value clearly enough to colder audiences.",
      "The user journey from ad click to enquiry was not structured around trust, clarity and buying intent.",
      "Creative direction, offer framing and landing flow needed to work together more cohesively to improve lead quality.",
    ],
    whatWeDid: [
      "Restructured the campaign messaging around clearer offer positioning and stronger visual hierarchy.",
      "Mapped a cleaner acquisition flow from ad creative to landing experience to enquiry action.",
      "Refined the campaign creative direction so the brand felt more premium, intentional and conversion-focused.",
      "Improved CTA placement, supporting copy and visual sequencing to reduce friction in the decision path.",
    ],
    deliverables: [
      "Campaign creative direction",
      "Media buying structure recommendations",
      "Landing journey / conversion flow planning",
      "Offer messaging refinement",
      "CTA and enquiry path optimisation",
    ],
    results: [
      "Stronger premium brand presentation across campaign touchpoints",
      "Cleaner user journey from ad click to enquiry action",
      "Better alignment between creative, message and conversion intent",
      "A more credible acquisition funnel ready for scaling",
    ],
    liveUrl: "https://www.example.com",
  },
  {
    slug: "cube-holdings",
    client: "Cube Holdings Ltd",
    service: "Media Buying & Lead Funnel Optimisation",
    category: "Lead Generation Campaign",
    heroImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1800&auto=format&fit=crop",
    logo: "Cube",
    intro:
      "A lead-generation focused campaign system built to improve traffic quality, strengthen message clarity and create a more conversion-ready acquisition flow.",
    overview:
      "Cube Holdings Ltd needed a more structured paid acquisition setup to attract higher-quality leads and reduce friction in the user journey. The work focused on tightening offer positioning, improving creative-to-landing continuity and designing a funnel that could support more consistent enquiry generation.",
    challenge: [
      "Lead quality was inconsistent and the existing campaign structure did not clearly separate audience intent.",
      "The path from first impression to conversion lacked continuity between ad promise and landing page experience.",
      "The brand needed a more confident and structured digital presentation to support trust and conversion.",
    ],
    whatWeDid: [
      "Reframed campaign messaging around audience intent and clearer value communication.",
      "Recommended a more structured media buying approach with stronger offer segmentation.",
      "Improved landing flow logic so users could move from interest to action with less friction.",
      "Strengthened CTA architecture and conversion messaging throughout the funnel.",
    ],
    deliverables: [
      "Lead generation campaign structure",
      "Audience and offer messaging refinement",
      "Landing page conversion journey planning",
      "CTA hierarchy recommendations",
      "Creative direction guidance",
    ],
    results: [
      "Cleaner lead funnel structure for paid acquisition",
      "Improved continuity between ad creative and conversion page",
      "Stronger perceived credibility and offer clarity",
      "A more scalable foundation for future lead generation efforts",
    ],
    liveUrl: "https://www.example.com",
  },
  {
    slug: "maven-autos",
    client: "Maven Autos",
    service: "Creative Campaign Direction & Conversion Journey",
    category: "Automotive Brand Campaign",
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1800&auto=format&fit=crop",
    logo: "MV",
    intro:
      "A brand and campaign presentation upgrade focused on improving visual confidence, offer communication and conversion readiness for an automotive business.",
    overview:
      "Maven Autos needed a more polished campaign experience that could communicate quality, credibility and buying confidence more effectively. We approached the work through campaign positioning, creative direction and conversion-flow refinement so the digital experience felt more aligned with a premium automotive brand.",
    challenge: [
      "The existing campaign presentation did not fully reflect the brand quality or communicate trust quickly enough.",
      "Creative assets and messaging needed stronger structure to support conversion intent.",
      "The enquiry path required clearer content hierarchy and more deliberate CTA placement.",
    ],
    whatWeDid: [
      "Reworked the campaign presentation to feel more premium and visually cohesive.",
      "Improved content hierarchy so key value points surfaced faster for users.",
      "Refined CTA placement and messaging flow to create a more intuitive conversion path.",
      "Aligned creative direction and brand framing around stronger buyer confidence.",
    ],
    deliverables: [
      "Campaign visual direction",
      "Brand messaging refinement",
      "Conversion path recommendations",
      "CTA structure improvements",
      "User-journey optimisation guidance",
    ],
    results: [
      "More premium and consistent campaign presentation",
      "Stronger message clarity for prospective customers",
      "Cleaner path from interest to enquiry",
      "A more conversion-focused digital campaign system",
    ],
    liveUrl: "https://www.example.com",
  },
];

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) notFound();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${work.heroImage})` }}
        />
        <div className={styles.heroOverlay} />

        <div className={`site-container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <Link href="/#work" className={styles.backLink}>
                ← Back to work
              </Link>

              <div className={styles.metaRow}>
                <span className={styles.kicker}>Case Study</span>
                <span className={styles.dot} />
                <span className={styles.category}>{work.category}</span>
              </div>

              <h1>{work.client}</h1>
              <p className={styles.service}>{work.service}</p>
              <p className={styles.intro}>{work.intro}</p>

              <div className={styles.heroActions}>
                {work.liveUrl && (
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryBtn}
                  >
                    Visit Live Website
                  </a>
                )}

                <Link href="/#contact" className={styles.secondaryBtn}>
                  Book a strategy call
                </Link>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div className={styles.logoBadge}>{work.logo}</div>

              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <span>Client</span>
                  <strong>{work.client}</strong>
                </div>
                <div className={styles.statCard}>
                  <span>Service</span>
                  <strong>{work.service}</strong>
                </div>
                <div className={styles.statCard}>
                  <span>Category</span>
                  <strong>{work.category}</strong>
                </div>
                <div className={styles.statCard}>
                  <span>Focus</span>
                  <strong>Growth + Conversion</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="site-container">
          <div className={styles.contentGrid}>
            <aside className={styles.sideInfo}>
              <div className={styles.sideCard}>
                <p className={styles.sideLabel}>Client</p>
                <h3>{work.client}</h3>
              </div>

              <div className={styles.sideCard}>
                <p className={styles.sideLabel}>Service</p>
                <h3>{work.service}</h3>
              </div>

              <div className={styles.sideCard}>
                <p className={styles.sideLabel}>Category</p>
                <h3>{work.category}</h3>
              </div>
            </aside>

            <div className={styles.mainContent}>
              <section className={styles.block}>
                <p className={styles.blockEyebrow}>Brief overview</p>
                <h2>Project overview</h2>
                <p>{work.overview}</p>
              </section>

              <section className={styles.block}>
                <p className={styles.blockEyebrow}>Challenge</p>
                <h2>The challenge</h2>
                <ul className={styles.bulletList}>
                  {work.challenge.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles.block}>
                <p className={styles.blockEyebrow}>What we did</p>
                <h2>Strategy & execution</h2>
                <ul className={styles.bulletList}>
                  {work.whatWeDid.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles.block}>
                <p className={styles.blockEyebrow}>Deliverables</p>
                <h2>What was delivered</h2>
                <div className={styles.pillGrid}>
                  {work.deliverables.map((item) => (
                    <div key={item} className={styles.pill}>
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.block}>
                <p className={styles.blockEyebrow}>Results / outcome</p>
                <h2>Outcome & impact</h2>
                <div className={styles.resultGrid}>
                  {work.results.map((item) => (
                    <div key={item} className={styles.resultCard}>
                      <span className={styles.resultIcon}>+</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className={styles.ctaBlock}>
                <div className={styles.ctaCopy}>
                  <p className={styles.blockEyebrow}>Next step</p>
                  <h2>Want a similar growth system for your business?</h2>
                  <p>
                    We build premium digital experiences, campaign systems and
                    conversion-focused growth assets for brands that want better
                    visibility, better trust and better results.
                  </p>
                </div>

                <div className={styles.ctaActions}>
                  <Link href="/#contact" className={styles.primaryBtn}>
                    Book a strategy call
                  </Link>

                  {work.liveUrl && (
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.secondaryBtnDark}
                    >
                      Visit live website
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
