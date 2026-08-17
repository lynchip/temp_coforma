// Shared bits: form placeholder, stats data, service data, page-title label helper.

const COFORMA_STATS = [
  { value: "25+", label: "Years operating in Brazil" },
  { value: "100s", label: "Companies formed" },
  { value: "100s", label: "Trademarks filed at INPI" },
  { value: "EN·PT", label: "Bilingual counsel" },
];

const COFORMA_CORE_SERVICES = [
  { 
    key: "formation", 
    num: "01", 
    title: "Company Formation", 
    brief: "Full-service incorporation in Brazil: legal structuring, CNPJ registration, state/municipal licenses, registered address, and bank account setup guidance for foreign investors and enterprise clients." 
  },
  { 
    key: "consulting", 
    num: "02", 
    title: "Business Consulting", 
    brief: "Strategic advisory for international counsel and executives navigating Brazilian market entry, regulatory barriers, corporate restructuring, and day-to-day operational execution." 
  },
];

const COFORMA_ONGOING_SERVICES = [
  { 
    key: "accounting", 
    num: "03", 
    title: "Accounting & Tax Compliance", 
    brief: "Ongoing monthly tax filings, book-keeping, financial statements, and regulatory reporting for foreign-owned entities.",
    href: "accounting-compliance.html"
  },
  { 
    key: "trademarks", 
    num: "04", 
    title: "Trademarks & IP Protection", 
    brief: "Trademark searching, INPI filings, brand portfolio defense, and ongoing monitoring against infringement in Brazil.",
    href: "#" 
  },
  { 
    key: "compliance", 
    num: "05", 
    title: "Corporate Governance & Housekeeping", 
    brief: "Annual filings, legal representation of foreign shareholders (BACEN/Receita), license renewals, and corporate record keeping.",
    href: "accounting-compliance.html"
  },
  { 
    key: "hr", 
    num: "06", 
    title: "HR & Labour Advisory", 
    brief: "Practical guidance for local employment contracts, eSocial compliance, payroll setup, and Brazilian labor law navigation.",
    href: "#"
  },
];

const COFORMA_SERVICES = [...COFORMA_CORE_SERVICES, ...COFORMA_ONGOING_SERVICES];

// A placeholder for the user's Bootstrap Studio form. We link out.
function ContactBlock({ variant = "light" }) {
  const dark = variant === "dark";
  const bg = dark ? "transparent" : "transparent";
  const fg = dark ? "#f4f1ea" : "#141311";
  const muted = dark ? "rgba(244,241,234,.6)" : "rgba(20,19,17,.55)";
  const rule = dark ? "rgba(244,241,234,.18)" : "rgba(20,19,17,.14)";
  return (
    <div style={{ background: bg, color: fg, padding: "80px 0", borderTop: `1px solid ${rule}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <div className="caps mono" style={{ fontSize: 11, color: muted, marginBottom: 24 }}>— Contact</div>
          <h2 className="serif" style={{ fontSize: "clamp(40px, 4vw, 64px)", lineHeight: 1.02, margin: 0, letterSpacing: "-0.02em" }}>
            Start with a conversation.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, marginTop: 24, color: muted, maxWidth: 420 }}>
            Send a note describing what you plan to set up in Brazil. We reply personally, usually within one business day.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ border: `1px solid ${rule}`, padding: "32px 32px 28px", background: dark ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.015)" }}>
            <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 20 }}>Contact form</div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: fg, marginBottom: 24 }}>
              The intake form lives on the production site. This placeholder holds the position; the current form (Bootstrap Studio) will be dropped in here without change.
            </div>
            {/* mock form fields, non-interactive placeholder shape */}
            {["Full name", "Company", "Email", "Where are you writing from?", "What are you setting up in Brazil?"].map((label, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${rule}`, padding: "14px 0" }}>
                <div className="mono" style={{ fontSize: 10, color: muted, textTransform: "uppercase", letterSpacing: ".12em" }}>{label}</div>
              </div>
            ))}
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="mono" style={{ fontSize: 11, color: muted }}>No newsletter. No CRM. Just a reply.</span>
              <button style={{ background: fg, color: dark ? "#141311" : "#f4f1ea", border: 0, padding: "12px 22px", fontFamily: "Inter", fontSize: 13, letterSpacing: ".04em", cursor: "pointer" }}>
                Send message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { COFORMA_STATS, COFORMA_SERVICES, COFORMA_CORE_SERVICES, COFORMA_ONGOING_SERVICES, ContactBlock });
