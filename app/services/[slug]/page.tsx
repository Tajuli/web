{/* ================= OVERVIEW ================= */}

<section className={styles.overview}>

  {/* Left Side */}

  <div className={styles.overviewContent}>

    <h2 className={styles.sectionTitle}>
      Why Choose {service.title}?
    </h2>

    <p className={styles.sectionText}>
      {service.description}
    </p>

    <p className={styles.sectionText}>
      Every successful business needs more than just
      advertising—it needs a clear strategy, the right
      audience, compelling creatives, continuous
      optimization, and measurable performance.
      Our team builds data-driven campaigns that
      maximize ROI, increase qualified leads, and
      create sustainable business growth.
    </p>

    <p className={styles.sectionText}>
      Instead of relying on guesswork, we analyze your
      business, competitors, customer behavior, and
      campaign data to make smarter marketing
      decisions that produce long-term results.
    </p>

  </div>

  {/* Right Side */}

  <aside className={styles.overviewCard}>

    <h3 className={styles.overviewTitle}>
      Why Businesses Choose PrimeDigitor
    </h3>

    <div className={styles.overviewList}>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Certified Digital Marketing Specialists</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Custom Growth Strategy for Every Business</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>ROI & Conversion Focused Campaigns</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Transparent Reporting & Analytics</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Continuous Testing & Optimization</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Dedicated Account Manager</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Fast Communication & Ongoing Support</p>
      </div>

      <div className={styles.overviewItem}>
        <span className={styles.check}>✓</span>
        <p>Long-Term Partnership for Sustainable Growth</p>
      </div>

    </div>

  </aside>

</section>

{/* ================= WHAT'S INCLUDED ================= */}

{service.serviceIncludes && service.serviceIncludes.length > 0 && (
  <section className={styles.includesSection}>
    <div className="container">

      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>
          Everything You Need
        </span>

        <h2 className={styles.sectionTitle}>
          What's Included
        </h2>

        <p className={styles.sectionSubtitle}>
          Every project includes everything required to launch,
          manage, optimize, and continuously improve your
          marketing performance.
        </p>
      </div>

      <div className={styles.includesGrid}>
        {service.serviceIncludes.map((item, index) => (
          <div
            key={index}
            className={styles.includeCard}
          >
            <div className={styles.includeIcon}>
              ✓
            </div>

            <h3>{item}</h3>
          </div>
        ))}
      </div>

    </div>
  </section>
)}

{/* ================= FEATURES ================= */}

<section className={styles.features}>
  <div className="container">

    <div className={styles.sectionHeader}>
      <span className={styles.sectionBadge}>
        Service Features
      </span>

      <h2 className={styles.sectionTitle}>
        What's Included in Our {service.title}
      </h2>

      <p className={styles.sectionSubtitle}>
        A complete solution designed to help your business
        achieve sustainable growth and measurable results.
      </p>
    </div>

    <div className={styles.featuresGrid}>
      {service.features.map((feature, index) => (
        <article
          key={index}
          className={styles.featureCard}
        >
          <div className={styles.featureNumber}>
            {(index + 1).toString().padStart(2, "0")}
          </div>

          <h3>{feature.title}</h3>

          <p>{feature.description}</p>
        </article>
      ))}
    </div>

  </div>
</section>
