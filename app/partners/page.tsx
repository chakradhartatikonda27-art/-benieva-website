'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const workflow = [
  { step: 'Step 1', title: 'Client Acquisition', desc: 'BENIEVA acquires and manages clients.' },
  { step: 'Step 2', title: 'Requirement Analysis', desc: 'Scope, timelines, and resource needs identified.' },
  { step: 'Step 3', title: 'Vendor Allocation', desc: 'Suitable vendor assigned based on expertise.' },
  { step: 'Step 4', title: 'Service Delivery', desc: 'Vendor executes assigned scope.' },
  { step: 'Step 5', title: 'Quality Review', desc: 'BENIEVA reviews delivery quality and coordination.' },
  { step: 'Step 6', title: 'Submission & Closure', desc: 'Deliverables shared with client.' },
]

const documents = ['PAN Card', 'GST Registration (if applicable)', 'Professional Tax Registration (if applicable)', 'Firm Registration Certificate', 'ICAI / ICSI Membership Details (if applicable)', 'Certificate of Practice (COP)', 'MSME Registration (optional but preferred)', 'Bank Details', 'Address Proof', 'Authorized Signatory Details']

const commercial = [
  { opt: 'Option A', title: 'Fixed Fee Model', desc: 'Per assignment / service basis' },
  { opt: 'Option B', title: 'Revenue Sharing Model', desc: 'Percentage-based revenue sharing' },
  { opt: 'Option C', title: 'Resource Billing Model', desc: 'Monthly / per resource billing' },
  { opt: 'Option D', title: 'Retainer Model', desc: 'Dedicated monthly engagement fee' },
]

const agreements = ['Master Service Agreement (MSA)', 'Non-Disclosure Agreement (NDA)', 'Service Level Agreement (SLA)', 'Work Order / Scope Document', 'Non-Circumvention Agreement']

function ListBlock({ title, items, color = 'var(--violet)' }: { title: string; items: string[]; color?: string }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 'clamp(18px,2.5vw,24px)', flex: 1, minWidth: 260 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{title}</div>
      {items.map(it => (
        <div key={it} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 7, display: 'flex', gap: 8 }}>
          <span style={{ color, flexShrink: 0 }}>✓</span> {it}
        </div>
      ))}
    </div>
  )
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, marginTop: 48 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(22px,3.4vw,30px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -0.8, marginBottom: 20 }}>{title}</h2>
    </>
  )
}

export default function Partners() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(48px,7vw,72px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>

            {/* INTRO */}
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Vendor Partnership</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 14 }}>Partner with BENIEVA</h1>
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.75, maxWidth: 640 }}>
              BENIEVA Business &amp; Compliance Solutions is expanding its managed financial, taxation, audit support, accounting, payroll, and corporate compliance service network across India. We partner with qualified professional firms, Chartered Accountants, compliance consultants, payroll specialists, and accounting service providers for delivery support under a structured and mutually beneficial engagement model.
            </p>

            {/* OBJECTIVE */}
            <SectionHead eyebrow="Objective of the Partnership" title="A reliable professional ecosystem" />
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <ListBlock title="BENIEVA Responsibilities" color="#00A57C"
                items={['Manage client acquisition and relationship management', 'Coordinate service delivery and project management', 'Maintain communication and operational oversight', 'Ensure service quality and turnaround timelines']} />
              <ListBlock title="Vendor / Partner Responsibilities"
                items={['Deliver assigned services professionally', 'Provide qualified personnel and technical expertise', 'Maintain statutory and regulatory compliance', 'Execute deliverables within agreed SLAs', 'Ensure confidentiality and professional ethics']} />
            </div>

            {/* WORKFLOW */}
            <SectionHead eyebrow="Operational Engagement Model" title="How the partnership works" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
              {workflow.map((w, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? 'var(--card-dark)' : 'var(--card-dark2)', borderRadius: 18, padding: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{w.step}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 7 }}>{w.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              ))}
            </div>

            {/* DOCUMENTS */}
            <SectionHead eyebrow="Licenses, Credentials & Compliance" title="Mandatory requirements from vendor" />
            <div style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.1)', borderRadius: 18, padding: 'clamp(20px,3vw,28px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 10 }}>
                {documents.map(d => (
                  <div key={d} style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600, background: '#fff', padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(107,92,231,0.1)' }}>
                    📄 {d}
                  </div>
                ))}
              </div>
            </div>

            {/* CONFIDENTIALITY */}
            <SectionHead eyebrow="Confidentiality & Data Protection" title="Your data, strictly protected" />
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <ListBlock title="The Vendor Shall"
                items={['Maintain strict confidentiality of client data', 'Not disclose financial or operational information', 'Restrict access to authorized personnel only', 'Use secure systems for storage and communication', 'Sign Non-Disclosure Agreement (NDA)']} />
              <ListBlock title="Client Information Includes" color="#FF6B4A"
                items={['Financial statements', 'Payroll records', 'GST / Income Tax details', 'Employee information', 'Business operational data']} />
            </div>

            {/* NON-SOLICITATION */}
            <SectionHead eyebrow="Non-Solicitation & Non-Circumvention" title="Protecting the partnership" />
            <div style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 'clamp(18px,2.5vw,24px)' }}>
              {['Not to directly approach BENIEVA clients', 'Not to solicit business from BENIEVA clients independently', 'Not to bypass BENIEVA for direct commercial engagement'].map(it => (
                <div key={it} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 7, display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--violet)' }}>✓</span> Vendor shall agree {it.charAt(0).toLowerCase() + it.slice(1)}
                </div>
              ))}
              <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 12, fontStyle: 'italic' }}>This restriction shall continue during the engagement period and for a mutually agreed duration after termination.</p>
            </div>

            {/* QUALITY */}
            <SectionHead eyebrow="Quality & Service Level Expectations" title="Standards we maintain together" />
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <ListBlock title="Vendor Is Expected To Maintain"
                items={['Professional accuracy', 'Timely turnaround', 'Error-free submissions', 'Proper documentation standards', 'Compliance with statutory timelines', 'Ethical business practices']} />
              <ListBlock title="BENIEVA May Conduct" color="#00A57C"
                items={['Quality audits', 'Performance reviews', 'SLA monitoring', 'Client feedback evaluations']} />
            </div>

            {/* COMMERCIAL */}
            <SectionHead eyebrow="Commercial Structure" title="Flexible engagement models" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
              {commercial.map(c => (
                <div key={c.opt} style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.12)', borderRadius: 18, padding: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{c.opt}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--navy)', marginBottom: 7 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text3)', marginTop: 14, fontStyle: 'italic' }}>Final commercials shall be mutually agreed through separate work orders or agreements.</p>

            {/* LEGAL */}
            <SectionHead eyebrow="Legal & Liability Terms" title="Clear accountability" />
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <ListBlock title="Vendor Shall Be Responsible For" color="#FF6B4A"
                items={['Professional negligence', 'Incorrect filings', 'Non-compliance caused by execution errors', 'Penalties due to professional mistakes']} />
              <ListBlock title="BENIEVA Shall Not Be Liable For"
                items={['Errors in professional certification by vendor', 'Regulatory actions arising from vendor negligence', 'Incorrect information submitted by client']} />
            </div>

            {/* AGREEMENTS */}
            <SectionHead eyebrow="Required Agreements" title="Executed before engagement" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {agreements.map(a => (
                <span key={a} style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600, background: '#fff', padding: '12px 18px', borderRadius: 99, border: '1px solid rgba(107,92,231,0.15)' }}>
                  📝 {a}
                </span>
              ))}
            </div>

            {/* TERMINATION */}
            <SectionHead eyebrow="Termination Terms" title="Either party may terminate" />
            <div style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 'clamp(18px,2.5vw,24px)' }}>
              {['With prior written notice', 'In case of confidentiality breach', 'Non-performance', 'Regulatory non-compliance', 'Ethical misconduct'].map(it => (
                <div key={it} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 7, display: 'flex', gap: 8 }}>
                  <span style={{ color: 'var(--violet)' }}>✓</span> {it}
                </div>
              ))}
              <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 12, fontStyle: 'italic' }}>All client data and documents must be returned upon termination.</p>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 56, background: 'var(--navy)', borderRadius: 24, padding: 'clamp(28px,4vw,44px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(196,184,240,0.1)', pointerEvents: 'none' }} />
              <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, color: '#fff', marginBottom: 12, position: 'relative', zIndex: 1 }}>
                Build a successful professional association with <span style={{ color: 'var(--lavender)' }}>BENIEVA</span>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 8, position: 'relative', zIndex: 1 }}>
                Benjamin Franklin Vincent — Founder
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 26, position: 'relative', zIndex: 1 }}>
                ✉ bvincent@benieva.com &nbsp;•&nbsp; 📞 +91 80959 50600
              </p>
              <Link href="/contact" style={{ background: 'var(--lavender)', color: 'var(--navy)', padding: '14px 30px', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1, display: 'inline-block' }}>
                Become a Partner →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
