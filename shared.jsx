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
    href: "ip-services.html" 
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

// Interactive Contact Form — styled to match broadsheet, integrated with Bootstrap Studio form handler
function ContactBlock({ variant = "light" }) {
  const dark = variant === "dark";
  const bg = dark ? "transparent" : "transparent";
  const fg = dark ? "#f4f1ea" : "#141311";
  const muted = dark ? "rgba(244,241,234,.6)" : "rgba(20,19,17,.55)";
  const rule = dark ? "rgba(244,241,234,.18)" : "rgba(20,19,17,.14)";
  
  return (
    <div id="contact" style={{ background: bg, color: fg, padding: "80px 0", borderTop: `1px solid ${rule}` }}>
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
        
        <div>
          <form 
            method="post" 
            data-bss-recipient="formations@coforma.com.br"
            style={{ border: `1px solid ${rule}`, padding: "32px", background: dark ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.015)" }}
          >
            <div className="caps mono" style={{ fontSize: 10, color: muted, marginBottom: 24 }}>Direct Enquiry</div>

            {/* Name */}
            <div style={{ marginBottom: 20 }}>
              <label className="mono caps" style={{ display: "block", fontSize: 10, color: muted, marginBottom: 6 }}>Full Name *</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Jane Doe"
                style={{ 
                  width: "100%", 
                  background: "transparent", 
                  border: 0, 
                  borderBottom: `1px solid ${rule}`, 
                  padding: "8px 0", 
                  color: fg, 
                  fontSize: 14, 
                  outline: "none",
                  fontFamily: "Inter"
                }} 
              />
            </div>

            {/* Company */}
            <div style={{ marginBottom: 20 }}>
              <label className="mono caps" style={{ display: "block", fontSize: 10, color: muted, marginBottom: 6 }}>Company / Organization</label>
              <input 
                type="text" 
                name="company" 
                placeholder="Acme Corp"
                style={{ 
                  width: "100%", 
                  background: "transparent", 
                  border: 0, 
                  borderBottom: `1px solid ${rule}`, 
                  padding: "8px 0", 
                  color: fg, 
                  fontSize: 14, 
                  outline: "none",
                  fontFamily: "Inter"
                }} 
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label className="mono caps" style={{ display: "block", fontSize: 10, color: muted, marginBottom: 6 }}>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="jane@company.com"
                style={{ 
                  width: "100%", 
                  background: "transparent", 
                  border: 0, 
                  borderBottom: `1px solid ${rule}`, 
                  padding: "8px 0", 
                  color: fg, 
                  fontSize: 14, 
                  outline: "none",
                  fontFamily: "Inter"
                }} 
              />
            </div>

            {/* Location */}
            <div style={{ marginBottom: 20 }}>
              <label className="mono caps" style={{ display: "block", fontSize: 10, color: muted, marginBottom: 6 }}>Where are you writing from?</label>
              <input 
                type="text" 
                name="location" 
                placeholder="City, Country"
                style={{ 
                  width: "100%", 
                  background: "transparent", 
                  border: 0, 
                  borderBottom: `1px solid ${rule}`, 
                  padding: "8px 0", 
                  color: fg, 
                  fontSize: 14, 
                  outline: "none",
                  fontFamily: "Inter"
                }} 
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: 28 }}>
              <label className="mono caps" style={{ display: "block", fontSize: 10, color: muted, marginBottom: 6 }}>What are you setting up in Brazil? *</label>
              <textarea 
                name="message" 
                rows="3" 
                required 
                placeholder="Brief summary of your project..."
                style={{ 
                  width: "100%", 
                  background: "transparent", 
                  border: 0, 
                  borderBottom: `1px solid ${rule}`, 
                  padding: "8px 0", 
                  color: fg, 
                  fontSize: 14, 
                  outline: "none",
                  fontFamily: "Inter",
                  resize: "vertical"
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8 }}>
              <span className="mono" style={{ fontSize: 11, color: muted }}>No newsletter. Just a reply.</span>
              <button 
                type="submit" 
                style={{ 
                  background: fg, 
                  color: dark ? "#141311" : "#f4f1ea", 
                  border: 0, 
                  padding: "12px 24px", 
                  fontFamily: "Inter", 
                  fontSize: 13, 
                  letterSpacing: ".04em", 
                  cursor: "pointer" 
                }}
              >
                Send message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { COFORMA_STATS, COFORMA_SERVICES, COFORMA_CORE_SERVICES, COFORMA_ONGOING_SERVICES, ContactBlock });
