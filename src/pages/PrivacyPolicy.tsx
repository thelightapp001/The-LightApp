import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `The Light App is committed to the protection and respect of user privacy. This policy explains the practices regarding the collection, use, and disclosure of information through the mobile application. Use of The Light App constitutes an agreement to the collection and use of information in accordance with this policy.`
  },
  {
    id: "data-collection",
    title: "2. Data Collection and Purpose",
    content: "",
    subsections: [
      {
        title: "2.1 Information Provided by the User",
        items: [
          { label: "Account Data", description: "Email addresses, display names, and hashed passwords. This data is required for core account functionality and authentication." },
          { label: "Subscription Data", description: "All financial transactions are processed via Paystack. The Light App does not store or have access to full credit card numbers or raw payment credentials on its servers." },
          { label: "User-Generated Content", description: "Playlists, Bible notes, media uploads, and interaction history." }
        ]
      },
      {
        title: "2.2 Automated Data Collection",
        items: [
          { label: "Usage Metadata", description: "Listening history, streaks, and search queries are processed to provide personalized content recommendations." },
          { label: "Device Identifiers", description: "IP addresses, device types, and OS versions are collected for security auditing and service optimization." }
        ]
      }
    ]
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing",
    content: "Data processing is conducted under the following legal frameworks:",
    list: [
      { label: "Contractual Necessity", description: "To provide the services requested by the user." },
      { label: "Consent", description: "For optional features including push notifications and marketing." },
      { label: "Legitimate Interest", description: "For platform security, fraud prevention, and technical optimization." }
    ]
  },
  {
    id: "third-party",
    title: "4. Third-Party Services & Data Sharing",
    content: "The Light App does not sell, rent, or trade personal data. Data is shared only with essential service providers:",
    list: [
      { label: "Infrastructure & Hosting", description: "Supabase provides the secure cloud database and authentication framework." },
      { label: "Analytics", description: "Google Analytics for Supabase is utilized to monitor application performance and user engagement patterns." },
      { label: "Payment Processing", description: "Paystack handles all subscription billing and verification." }
    ]
  },
  {
    id: "retention",
    title: "5. Data Retention & Deletion",
    content: "",
    subsections: [
      {
        title: "Retention Policy",
        items: [
          { label: "Personal data is retained for the duration of the active account period." }
        ]
      },
      {
        title: "Account Deletion",
        items: [
          { label: "Users may initiate account deletion via Settings > Account > Delete Account." },
          { label: "Personal data is removed from active databases within 30 days." },
          { label: "Encrypted backups are purged within 90 days." }
        ]
      }
    ],
    note: "Note: Specific transaction records may be retained as required by statutory financial regulations."
  },
  {
    id: "security",
    title: "6. Security Architecture",
    content: "A Zero-Trust security model is enforced:",
    list: [
      { label: "Encryption", description: "Data is encrypted in transit via TLS 1.3 and at rest via AES-256." },
      { label: "Row-Level Security (RLS)", description: "Logic is implemented at the database level via Supabase to ensure users can only access their own data." },
      { label: "Authentication", description: "Passwords are secured using industry-standard hashing algorithms (bcrypt/Argon2)." }
    ]
  },
  {
    id: "children",
    title: "7. Children's Privacy",
    content: "The Light App is not directed at individuals under the age of 13. If it is determined that data has been collected from a child under 13 without parental consent, that data will be permanently deleted."
  },
  {
    id: "rights",
    title: "8. User Rights",
    content: "Users maintain the right to:",
    list: [
      { label: "Request access to or portability of their data." },
      { label: "Request correction of inaccurate information." },
      { label: "Withdraw consent for optional data processing." },
      { label: "Request the permanent erasure of their data." }
    ]
  },
  {
    id: "contact",
    title: "9. Contact Information",
    content: "For all privacy-related inquiries or to exercise data rights, contact the administration at:",
    contact: "Support@mylightapp.com"
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b hairline bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-light py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-light py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Data Protection & Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last Updated: April 4, 2026</p>
            <p className="mt-2 text-sm text-muted-foreground">Effective Date: April 4, 2026</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} className="scroll-mt-20" id={section.id}>
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                
                {section.content && (
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div className="mt-6 space-y-6">
                    {section.subsections.map((subsection, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-medium text-foreground/90">{subsection.title}</h3>
                        <ul className="mt-3 space-y-3">
                          {subsection.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex gap-3">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                              <div>
                                <span className="font-medium text-foreground">{item.label}:</span>{" "}
                                <span className="text-muted-foreground">{item.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* List Items */}
                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">{item.label}:</span>{" "}
                          <span className="text-muted-foreground">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact */}
                {section.contact && (
                  <div className="mt-6 p-6 rounded-lg bg-muted/50 border border-border">
                    <a
                      href={`mailto:${section.contact}`}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {section.contact}
                    </a>
                  </div>
                )}

                {/* Note */}
                {section.note && (
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    {section.note}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t hairline bg-muted/30">
        <div className="container-light py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} The Lightapp. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Built for believers. Built for this generation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;