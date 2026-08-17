// Accounting & Compliance Overview Page — Broadsheet style

function AccountingCompliancePage() {
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
          <span style={{ color: muted }}>Practice Brief — Post-Incorporation Support</span>
          <span style={{ color: muted }}>Updated 2026</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "100px 40px 80px" }}>
        <div className="caps mono" style={{ fontSize: 11, color: accent, marginBottom: 24 }}>
          № 002 — Subsequent Practice
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(60px, 8vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0, maxWidth: "16ch" }}>
          Accounting & Compliance<br />in Brazil
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, marginTop: 60, alignItems: "start" }}>
          <div>
            <p className="news" style={{ fontSize: 24, lineHeight: 1.45, margin: 0, fontWeight: 400 }}>
              Once your entity is registered, operational continuity requires structured ongoing accounting, tax declarations, and legal governance tailored for foreign shareholders.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(20,19,17,.75)", marginTop: 28 }}>
              Post incorporation management is essential to ensure complete tax and regulatory compliance under Brazilian law.
            </p>
          </div>
          <div style={{ paddingLeft: 32, borderLeft: `1px solid ${rule}` }}>
            <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 16 }}>Key Service Areas</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              <li>✓ Monthly Tax Filings (SPED, DCTF, EFD)</li>
              <li>✓ BACEN Foreign Direct Investment (RDE-IED) Updates</li>
              <li>✓ Legal Representation for Foreign Corporate Officers</li>
              <li>✓ Annual Corporate Housekeeping & License Renewals</li>
              <li>✓ Local Payroll & eSocial Advisory</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE PRACTICES GRID */}
      <section style={{ background: ink, color: paper, padding: "100px 0" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 80, marginBottom: 60 }}>
            <div className="caps mono" style={{ fontSize: 11, color: "rgba(244,241,234,.55)" }}>Details</div>
            <h2 className="serif" style={{ fontSize: "clamp(36px, 3.5vw, 56px)", lineHeight: 1.05, margin: 0, letterSpacing: "-0.02em" }}>
              Post-Incorporation Framework
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, borderTop: `1px solid rgba(244,241,234,.18)`, paddingTop: 60 }}>
            <div style={{ borderRight: `1px solid rgba(244,241,234,.12)`, paddingRight: 40 }}>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>01 · TAX & ACCOUNTING</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Monthly Bookkeeping & Reporting</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                The Brazilian tax system requires rigorous monthly declarations even if an entity is temporarily inactive.
              </p>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "#d2906b", marginBottom: 12 }}>02 · REGULATORY GOVERNANCE</div>
              <h3 className="serif" style={{ fontSize: 32, margin: 0 }}>Legal Representation & BACEN</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(244,241,234,.75)", marginTop: 18 }}>
                Foreign-owned entities must maintain a Brazilian resident legal representative before Receita Federal and the Central Bank (BACEN). Routine corporate resolutions, capital declarations, and annual corporate housekeeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section style={{ maxWidth: 1360, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="caps mono" style={{ fontSize: 11, color: muted, marginBottom: 16 }}>Need ongoing support?</div>
            <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: 0 }}>
              Let's discuss your operational requirements in Brazil.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: muted }}>
              Whether you are forming a new company or looking for legal counsel to oversee an existing entity's tax and compliance posture, we are ready to assist.
            </p>
            <a href="index.html#contact" style={{ display: "inline-block", marginTop: 24, background: ink, color: paper, padding: "16px 28px", textDecoration: "none", fontSize: 14, letterSpacing: ".04em" }}>
              Contact CoForma Counsel →
            </a>
          </div>
        </div>
      </section>

      <BroadsheetFooter ink={ink} paper={paper} muted={muted} rule={rule} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AccountingCompliancePage />);
