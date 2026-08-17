// V1 — BROADSHEET
// Warm off-white paper. Deep ink. Editorial serif dominant. Hairline rules.
// Feels like the front page of a serious financial broadsheet.

function HomeBroadsheet({ tweaks }) {
  const paper = "#f4f1ea";
  const ink = "#141311";
  const muted = "rgba(20,19,17,.55)";
  const rule = "rgba(20,19,17,.18)";
  const accent = tweaks.showAccent ? "#8a4a2b" : ink; // muted burnt sienna, safe across CVD types

  return (
    <div style={{ background: paper, color: ink, minHeight: "100vh", fontFamily: "Inter" }}>
      {/* NAV */}
      <BroadsheetNav ink={ink} muted={muted} rule={rule} />

      {/* MASTHEAD DATE STRIP */}
      <div style={{ borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "10px 40px", display: "flex", justifyContent: "space-between", fontSize: 11 }} className="mono caps">
          <span style={{ color: muted }}>São Paulo · Founded 2001</span>
          <span style={{ color: muted }}>Vol. XXV — For counsel abroad</span>
          <span style={{ color: muted }}>English · Português</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "120px 40px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
          <div className="caps mono" style={{ fontSize: 11, color: muted, marginBottom: 40 }}>
            <span style={{ borderBottom: `1px solid ${accent}`, paddingBottom: 4, color: accent }}>№ 001</span>
            <span style={{ marginLeft: 20 }}>Company formation · Trademarks · Compliance</span>
          </div>
          {tweaks.headline === "incorporate" ? (
            <h1 className="serif" style={{
              fontSize: "clamp(80px, 12vw, 200px)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
              margin: 0,
              maxWidth: "12ch",
            }}>
              Company Formation<br />Brazil
            </h1>
          ) : (
            <h1 className="serif" style={{
              fontSize: "clamp(64px, 9vw, 148px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "16ch",
            }}>
              Company Formation<br />Brazil
            </h1>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, marginTop: 80, alignItems: "start" }}>
            <div>
              <p className="news" style={{ fontSize: 22, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>
                CoForma supports international clients to set up businesses in Brazil. With more than 25 years of practical experience, we guide clients from company formation and trademark protection through the early stages of doing business here.
              </p>
              <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "center" }}>
                <a href="#contact" style={{ background: ink, color: paper, padding: "16px 28px", textDecoration: "none", fontSize: 14, letterSpacing: ".04em" }}>Start a conversation →</a>
                <a href="#services" style={{ color: ink, textDecoration: "underline", textUnderlineOffset: 6, fontSize: 14 }}>See how we work</a>
              </div>
            </div>
            <div>
              <div style={{ paddingLeft: 32, borderLeft: `1px solid ${rule}` }}>
                <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 12 }}>The record</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px" }}>
                  {COFORMA_STATS.map((s, i) => (
                    <div key={i}>
                      <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                      <div style={{ fontSize: 12, marginTop: 8, color: muted, lineHeight: 1.35 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEDE IMAGE */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
        <figure style={{ margin: 0 }}>
          <div style={{ aspectRatio: "16/7", background: `url(assets/sp-aerial.jpg) center/cover`, filter: "grayscale(1) contrast(1.05)", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(20,19,17,.1), transparent 40%)" }} />
          </div>
          <figcaption className="mono caps" style={{ fontSize: 11, color: muted, padding: "14px 0", display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${rule}` }}>
            <span>Fig. 01 — São Paulo, seat of business</span>
            <span>Placeholder · client photography to follow</span>
          </figcaption>
        </figure>
      </section>

      {/* POSITIONING — three-column editorial */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80 }}>
          <div>
            <div className="caps mono" style={{ fontSize: 11, color: muted }}>What we are</div>
          </div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 4vw, 68px)", lineHeight: 1.02, margin: 0, letterSpacing: "-0.02em", maxWidth: "18ch" }}>
              Clear guidance for company formation in Brazil.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginTop: 72 }}>
              {[
                { h: "International clients.", b: "We work with founders, investors, and operators from the United States, China, India, and other markets who need practical guidance to set up a business in Brazil." },
                { h: "Formation first.", b: "Company formation remains the core of our work. Once the business is established, we can support the next phase of compliance, accounting, and operational needs." },
                { h: "Practical experience.", b: "Our approach is grounded in long experience with Brazilian institutions, filings, and day-to-day business realities — not just a checklist." },
              ].map((c, i) => (
                <div key={i} style={{ borderTop: `1px solid ${ink}`, paddingTop: 20 }}>
                  <div className="mono" style={{ fontSize: 11, color: muted, marginBottom: 24 }}>0{i + 1}</div>
                  <h3 className="serif" style={{ fontSize: 28, lineHeight: 1.1, margin: 0, letterSpacing: "-0.01em" }}>{c.h}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(20,19,17,.72)", marginTop: 18 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — Tiered structure: Core vs Ongoing */}
      <section id="services" style={{ background: ink, color: paper, padding: "120px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          
          {/* CORE SERVICES */}
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, marginBottom: 60 }}>
            <div>
              <div className="caps mono" style={{ fontSize: 11, color: "rgba(244,241,234,.55)" }}>Core Focus</div>
              <div style={{ fontSize: 13, color: "rgba(244,241,234,.4)", marginTop: 12, lineHeight: 1.4 }}>
                Primary services for international businesses launching in Brazil.
              </div>
            </div>
            <div>
              <h2 className="serif" style={{ fontSize: "clamp(36px, 3.5vw, 60px)", lineHeight: 1.05, margin: 0, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
                Company Formation & Executive Advisory.
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 48 }}>
                {COFORMA_CORE_SERVICES.map((s) => (
                  <div key={s.key} style={{ borderTop: `1px solid rgba(244,241,234,.25)`, paddingTop: 28 }}>
                    <div className="mono" style={{ fontSize: 12, color: accent, marginBottom: 12 }}>{s.num} — Core Practice</div>
                    <h3 className="serif" style={{ fontSize: 34, lineHeight: 1.1, margin: 0, letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(244,241,234,.75)", marginTop: 16 }}>{s.brief}</p>
                    <a href="#contact" style={{ display: "inline-block", marginTop: 20, color: paper, fontSize: 13, textDecoration: "underline", textUnderlineOffset: 4 }}>Enquire about {s.title.toLowerCase()} →</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECONDARY / ONGOING SERVICES */}
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, marginTop: 100, borderTop: `1px solid rgba(244,241,234,.15)`, paddingTop: 80 }}>
            <div>
              <div className="caps mono" style={{ fontSize: 11, color: "rgba(244,241,234,.55)" }}>Subsequent Support</div>
              <div style={{ fontSize: 13, color: "rgba(244,241,234,.4)", marginTop: 12, lineHeight: 1.4 }}>
                Operational continuity once incorporation is complete.
              </div>
            </div>
            <div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0, letterSpacing: "-0.01em", opacity: .9 }}>
                Ongoing Corporate & Regulatory Practices
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "40px 0 0 0" }}>
                {COFORMA_ONGOING_SERVICES.map((s) => (
                  <li key={s.key} style={{ borderTop: `1px solid rgba(244,241,234,.12)`, padding: "28px 0", display: "grid", gridTemplateColumns: "60px 240px 1fr 140px", gap: 30, alignItems: "baseline" }}>
                    <div className="mono" style={{ fontSize: 12, color: "rgba(244,241,234,.4)" }}>{s.num}</div>
                    <div className="serif" style={{ fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.01em" }}>{s.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(244,241,234,.65)" }}>{s.brief}</div>
                    {s.href && s.href !== "#" ? (
                      <a href={s.href} style={{ color: "#d2906b", fontSize: 12, textDecoration: "none", justifySelf: "end" }} className="mono caps">Practice Info →</a>
                    ) : (
                      <span style={{ color: "rgba(244,241,234,.3)", fontSize: 12, justifySelf: "end" }} className="mono caps">On Demand</span>
                    )}
                  </li>
                ))}
                <li style={{ borderTop: `1px solid rgba(244,241,234,.12)` }} />
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS TIMELINE — grafted from Ledger, restyled to Broadsheet warmth */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "120px 40px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80 }}>
          <div className="caps mono" style={{ fontSize: 11, color: muted }}>How this goes</div>
          <div>
            <h2 className="serif" style={{ fontSize: "clamp(40px, 4vw, 68px)", lineHeight: 1.02, margin: 0, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              From first email to a working business, with time built in for care and follow-through.
            </h2>
            <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative" }}>
              {[
                { w: "Week 0", h: "Enquiry", b: "A short written exchange to understand what you are setting up." },
                { w: "Week 1", h: "Documents", b: "We gather the information and corporate documents needed to prepare the structure and filings accurately." },
                { w: "Week 2–3", h: "Filing", b: "Registration and filing steps are progressed with room for follow-up, corrections, and practical adjustments." },
                { w: "Week 3–5+", h: "Setup complete", b: "Once incorporated, we transition into ongoing operational support: accounting, tax compliance, HR, and governance.", link: true },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "24px 20px 0 0",
                  borderTop: `1px solid ${ink}`,
                  position: "relative",
                  marginRight: 12,
                }}>
                  <div style={{ position: "absolute", top: -6, left: 0, width: 11, height: 11, background: paper, border: `1px solid ${ink}`, borderRadius: "50%" }} />
                  <div className="mono caps" style={{ fontSize: 10, color: accent, letterSpacing: ".14em" }}>{s.w}</div>
                  <div className="serif" style={{ fontSize: 22, lineHeight: 1.15, marginTop: 10, letterSpacing: "-0.01em" }}>{s.h}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(20,19,17,.65)", marginTop: 12 }}>{s.b}</p>
                  {s.link && (
                    <a href="accounting-compliance.html" style={{ fontSize: 11, color: accent, textDecoration: "underline", textUnderlineOffset: 3, display: "inline-block", marginTop: 8 }} className="mono caps">
                      Accounting & Compliance →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={{ aspectRatio: "4/5", background: `url(assets/building-monotone.jpg) center/cover`, filter: "grayscale(1) contrast(1.02)" }} />
          <div>
            <div className="caps mono" style={{ fontSize: 11, color: muted, marginBottom: 24 }}>— The counsel</div>
            <blockquote className="serif" style={{ fontSize: "clamp(32px, 3vw, 52px)", lineHeight: 1.12, margin: 0, letterSpacing: "-0.015em" }}>
              "Foreign clients rarely want more paperwork. They want to know that someone competent is handling it and reporting back. That is what I do. I make sure the filings are correct, the deadlines are met, and the business is set up to operate in Brazil."
            </blockquote>
            <div style={{ marginTop: 40, fontSize: 14, color: muted }}>
            </div>
          </div>
        </div>
      </section>

      <ContactBlock variant="light" />
      <BroadsheetFooter ink={ink} paper={paper} muted={muted} rule={rule} />
    </div>
  );
}

function BroadsheetNav({ ink, muted, rule }) {
  return (
    <nav style={{ padding: "22px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1360, margin: "0 auto" }}>
      <a href="index.html" style={{ textDecoration: "none", color: ink, display: "flex", alignItems: "baseline", gap: 12 }}>
        <span className="serif" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>CoForma</span>
        <span className="mono caps" style={{ fontSize: 10, color: muted }}>est. 2001</span>
      </a>
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        <a href="index.html#services" style={{ textDecoration: "none", color: ink, fontSize: 14 }}>Company Formation</a>
        <a href="index.html#services" style={{ textDecoration: "none", color: ink, fontSize: 14 }}>Consulting</a>
        <a href="accounting-compliance.html" style={{ textDecoration: "none", color: ink, fontSize: 14 }}>Accounting & Compliance</a>
        <a href="#contact" style={{ textDecoration: "none", color: ink, fontSize: 13, borderBottom: `1px solid ${ink}`, paddingBottom: 2 }}>Contact →</a>
      </div>
    </nav>
  );
}

function BroadsheetFooter({ ink, paper, muted, rule }) {
  return (
    <footer style={{ background: paper, color: ink, borderTop: `1px solid ${rule}`, padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60 }}>
        <div>
          <div className="serif" style={{ fontSize: 32, letterSpacing: "-0.02em" }}>CoForma</div>
          <div style={{ fontSize: 13, color: muted, marginTop: 12, maxWidth: 320, lineHeight: 1.5 }}>
            Company Formnations in Brazil. São Paulo since 2001.
          </div>
        </div>
        {[["Practice", ["Company Formation", "Trademarks", "Accounting", "Compliance"]],
          ["Firm", ["About", "English enquiries", "Press"]],
          ["Contact", ["formations@coforma.com.br", "São Paulo, SP", "Response < 1 business day"]]].map(([h, items], i) => (
          <div key={i}>
            <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 16 }}>{h}</div>
            {items.map((it) => (
              <div key={it} style={{ fontSize: 13, lineHeight: 2, color: ink }}>{it}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1360, margin: "60px auto 0", display: "flex", justifyContent: "space-between", fontSize: 11, color: muted }} className="mono caps">
        <span>© 2001 to 2026 CoForma Consultoria</span>
        <span>coforma.com.br</span>
      </div>
    </footer>
  );
}

Object.assign(window, { HomeBroadsheet, BroadsheetNav, BroadsheetFooter });
