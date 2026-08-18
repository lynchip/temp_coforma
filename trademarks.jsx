// Trademarks & IP Protection Page — Broadsheet minimal style

function TrademarksPage() {
  const paper = "#f4f1ea";
  const ink = "#141311";
  const muted = "rgba(20,19,17,.55)";
  const rule = "rgba(20,19,17,.18)";
  const accent = "#8a4a2b";

  return (
    <div style={{ background: paper, color: ink, minHeight: "100vh", fontFamily: "Inter" }}>
      {/* NAV */}
      <BroadsheetNav ink={ink} muted={muted} rule={rule} />

      {/* HEADER STRIP */}
      <div style={{ borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "10px 40px", display: "flex", justifyContent: "space-between", fontSize: 11 }} className="mono caps">
          <span style={{ color: muted }}><a href="index.html" style={{ textDecoration: "none" }}>← Back to CoForma Main</a></span>
          <span style={{ color: muted }}>Practice Brief — Brand Protection & INPI Filings</span>
          <span style={{ color: muted }}>Updated 2026</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "100px 40px 80px" }}>
        <div className="caps mono" style={{ fontSize: 11, color: accent, marginBottom: 24 }}>
          № 004 — IP Practice
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(60px, 8vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
          Trademarks & IP Protection<br />in Brazil
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, marginTop: 60, alignItems: "start" }}>
          <div>
            <p className="news" style={{ fontSize: 24, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>
              Protecting brand assets in Brazil requires direct registration with INPI (National Institute of Industrial Property) and diligent weekly monitoring against third-party infringement.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(20,19,17,.75)", marginTop: 28 }}>
              CoForma assists foreign companies, founders, and international counsel to register, monitor, and defend their trademarks, logos, and proprietary assets under Brazilian intellectual property law.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#contact" style={{ background: ink, color: paper, padding: "14px 24px", textDecoration: "none", fontSize: 13, letterSpacing: ".04em" }}>Enquire about IP protection →</a>
              <a href="index.html#services" style={{ color: ink, textDecoration: "underline", textUnderlineOffset: 5, fontSize: 13 }}>All practice areas</a>
            </div>
          </div>
          <div style={{ paddingLeft: 32, borderLeft: `1px solid ${rule}` }}>
            <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 16 }}>Core IP Services</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.9 }}>
              <li>✓ Comprehensive INPI Pre-Filing Trademark Searches</li>
              <li>✓ Application Drafting & Class Classification (Nice System)</li>
              <li>✓ Cost per application is US$275 inclusive of professional and government fees.</li>
              <li>✓ Weekly INPI Gazette (RPI) Monitoring & Watch Service</li>
              <li>✓ Oppositions, Nullity Actions & Administrative Appeals</li>
              <li>✓ 10-Year Renewal Filings & Ownership Transfers</li>
            </ul>
          </div>
        </div>
      {/* PROPRIETARY INFRASTRUCTURE SECTION */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "80px 40px 100px", borderTop: `1px solid ${rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80 }}>
          <div>
            <div className="caps mono" style={{ fontSize: 11, color: accent }}>Proprietary Technology</div>
            <div style={{ fontSize: 13, color: muted, marginTop: 12, lineHeight: 1.5 }}>
              In-house database & multi-vector matching engine built over 11 years.
            </div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 3.5vw, 56px)", lineHeight: 1.05, margin: 0, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Beyond Standard Portal Searches: Multi-Layered Brand Protection
            </h2>
            <p className="news" style={{ fontSize: 20, lineHeight: 1.5, color: "rgba(20,19,17,.8)", marginTop: 24 }}>
              Standard official search tools look only for exact text matches. Over more than a decade, CoForma has maintained a proprietary database of all Brazilian trademark filings, powered by custom multi-vector search algorithms.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginTop: 48 }}>
              <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 20 }}>
                <div className="mono" style={{ fontSize: 11, color: accent, marginBottom: 12 }}>01 · PRE-FILING SEARCH</div>
                <h3 className="serif" style={{ fontSize: 24, margin: 0, lineHeight: 1.15 }}>Deep Historical Database</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(20,19,17,.7)", marginTop: 14 }}>
                  Beyond official trademark office tools, we query our 11-year internal database across exact, fuzzy, semantic, and applicant data to uncover hidden conflicts before filing.
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 20 }}>
                <div className="mono" style={{ fontSize: 11, color: accent, marginBottom: 12 }}>02 · WEEKLY WATCH SERVICE</div>
                <h3 className="serif" style={{ fontSize: 24, margin: 0, lineHeight: 1.15 }}>Multi-Vector Weekly Monitoring</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(20,19,17,.7)", marginTop: 14 }}>
                  Every week, we process raw official publication files to detect infringing applications. Non-exact and phonetic matching catches visual or semantic copycats standard searches miss.
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 20 }}>
                <div className="mono" style={{ fontSize: 11, color: accent, marginBottom: 12 }}>03 · MARKET AUDITS</div>
                <h3 className="serif" style={{ fontSize: 24, margin: 0, lineHeight: 1.15 }}>On-Demand Commercial Audits</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(20,19,17,.7)", marginTop: 14 }}>
                  On request, we perform specialized investigations across Brazilian corporate entity databases and active commercial channels to uncover unregistered trademark squatted assets.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 40, padding: "24px 32px", background: "rgba(20,19,17,.04)", borderLeft: `3px solid ${accent}` }}>
              <div className="mono caps" style={{ fontSize: 10, color: accent, marginBottom: 6 }}>Proven Track Record</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, color: "rgba(20,19,17,.85)" }}>
                <strong>Years of Proactive Warning:</strong> Our multi-layered search system has successfully alerted international clients to infringing filings that standard exact-match searches completely missed—enabling early legal oppositions long before commercial conflict occurred.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE PRACTICES GRID */}
      <section style={{ background: ink, color: paper, padding: "100px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, marginBottom: 60 }}>
            <div className="caps mono" style={{ fontSize: 11, color: "rgba(244,241,234,.55)" }}>Pillars of Protection</div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 3.5vw, 56px)", lineHeight: 1.05, margin: 0, letterSpacing: "-0.02em" }}>
              Structured Trademark & Brand Governance
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, borderTop: `1px solid rgba(244,241,234,.18)`, paddingTop: 60 }}>
            <div style={{ borderRight: `1px solid rgba(244,241,234,.12)`, paddingRight: 40 }}>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>01 · INPI SEARCH & REGISTRATION</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Trademark Search & Filing</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                Brazil operates on a first-to-file system. We conduct thorough prior-art searches in the INPI database to evaluate potential conflicts before filing, ensuring accurate classification under international standards.
              </p>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>02 · WEEKLY WATCH SERVICE</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Weekly RPI Monitoring</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                INPI publishes official updates weekly in the <em>Revista da Propriedade Industrial</em>. We continuously monitor these publications to detect conflicting third-party filings during the strict 60-day legal opposition window.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, borderTop: `1px solid rgba(244,241,234,.12)`, paddingTop: 60, marginTop: 60 }}>
            <div style={{ borderRight: `1px solid rgba(244,241,234,.12)`, paddingRight: 40 }}>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>03 · DEFENSE & LITIGATION</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Oppositions & IP Appeals</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                When third parties attempt to register confusingly similar marks, or if INPI issues an administrative office action, we prepare formal legal oppositions, responses, and administrative appeals to safeguard your rights.
              </p>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>04 · PORTFOLIO MAINTENANCE</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Renewals & Ownership Filings</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                Brazilian trademarks are granted for 10-year terms. We manage timely renewal filings, recordals of corporate name changes, ownership transfers, and licensing agreements with foreign parent companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="caps mono" style={{ fontSize: 11, color: muted, marginBottom: 16 }}>Protect your brand in Brazil</div>
            <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: 0 }}>
              Ready to secure your trademark in Brazil?
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: muted }}>
              Whether you need a pre-filing search, immediate INPI application, or monitoring for an existing international brand portfolio, our team provides direct bilingual support.
            </p>
            <a href="#contact" style={{ display: "inline-block", marginTop: 24, background: ink, color: paper, padding: "16px 28px", textDecoration: "none", fontSize: 14, letterSpacing: ".04em" }}>
              Enquire about Trademarks →
            </a>
          </div>
        </div>
      </section>

      <ContactBlock variant="light" />
      <BroadsheetFooter ink={ink} paper={paper} muted={muted} rule={rule} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TrademarksPage />);
