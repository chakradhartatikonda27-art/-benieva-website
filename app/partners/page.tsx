'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

const benievaResp = [
  { icon: '🤝', text: 'Client acquisition & relationship management' },
  { icon: '🗂️', text: 'Service delivery & project coordination' },
  { icon: '📢', text: 'Communication & operational oversight' },
  { icon: '⭐', text: 'Service quality & turnaround timelines' },
]
const vendorResp = [
  { icon: '💼', text: 'Deliver assigned services professionally' },
  { icon: '👨‍💼', text: 'Qualified personnel & technical expertise' },
  { icon: '⚖️', text: 'Statutory & regulatory compliance' },
  { icon: '⏱️', text: 'Execute deliverables within agreed SLAs' },
  { icon: '🔐', text: 'Confidentiality & professional ethics' },
]
const workflow = [
  { icon: '🎯', title: 'Client Acquisition', desc: 'BENIEVA acquires and manages clients.' },
  { icon: '🔍', title: 'Requirement Analysis', desc: 'Scope, timelines, and resource needs identified.' },
  { icon: '🧩', title: 'Vendor Allocation', desc: 'Suitable vendor assigned based on expertise.' },
  { icon: '🚀', title: 'Service Delivery', desc: 'Vendor executes assigned scope.' },
  { icon: '✅', title: 'Quality Review', desc: 'BENIEVA reviews delivery quality.' },
  { icon: '📦', title: 'Submission & Closure', desc: 'Deliverables shared with client.' },
]
const documents = [
  { icon: '🪪', t: 'PAN Card' }, { icon: '🧾', t: 'GST Registration (if applicable)' },
  { icon: '📋', t: 'Professional Tax Registration (if applicable)' }, { icon: '🏢', t: 'Firm Registration Certificate' },
  { icon: '🎓', t: 'ICAI / ICSI Membership (if applicable)' }, { icon: '📜', t: 'Certificate of Practice (COP)' },
  { icon: '🏭', t: 'MSME Registration (optional, preferred)' }, { icon: '🏦', t: 'Bank Details' },
  { icon: '📍', t: 'Address Proof' }, { icon: '✍️', t: 'Authorized Signatory Details' },
]
const commercial = [
  { icon: '💰', opt: 'Option A', title: 'Fixed Fee', desc: 'Per assignment / service basis' },
  { icon: '📊', opt: 'Option B', title: 'Revenue Sharing', desc: 'Percentage-based revenue sharing' },
  { icon: '👥', opt: 'Option C', title: 'Resource Billing', desc: 'Monthly / per resource billing' },
  { icon: '📅', opt: 'Option D', title: 'Retainer', desc: 'Dedicated monthly engagement fee' },
]
const agreements = ['Master Service Agreement (MSA)', 'Non-Disclosure Agreement (NDA)', 'Service Level Agreement (SLA)', 'Work Order / Scope Document', 'Non-Circumvention Agreement']

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 10, marginTop: 56 }}>{children}</div>
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 'clamp(22px,3.4vw,30px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -0.8, marginBottom: 24 }}>{children}</h2>
}

export default function Partners() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(48px,7vw,72px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>

            {/* INTRO with image */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 40, alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Vendor Partnership</div>
                <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 14 }}>Partner with BENIEVA</h1>
                <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.75 }}>
                  We partner with qualified professional firms, Chartered Accountants, compliance consultants, payroll specialists, and accounting service providers — under a structured and mutually beneficial engagement model across India.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
                style={{ borderRadius: 28, overflow: 'hidden', height: 'clamp(220px,26vw,300px)', position: 'relative', boxShadow: '0 20px 50px rgba(30,27,58,0.15)' }}>
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=85" alt="Partnership handshake"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(107,92,231,0.15), rgba(30,27,58,0.2))' }} />
              </motion.div>
            </div>

            {/* OBJECTIVE — icon rows */}
            <Eyebrow>Objective of the Partnership</Eyebrow>
            <H2>A reliable professional ecosystem</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 16 }}>
              {[{ label: 'BENIEVA Responsibilities', items: benievaResp, color: '#00A57C', bg: '#fff' },
                { label: 'Vendor / Partner Responsibilities', items: vendorResp, color: 'var(--violet)', bg: '#fff' }].map((col, ci) => (
                <motion.div key={ci} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  style={{ background: col.bg, border: '1px solid rgba(30,27,58,0.07)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: col.color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>{col.label}</div>
                  {col.items.map((it, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, background: 'var(--bg)', borderRadius: 14, padding: '12px 16px' }}>
                      <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--lav-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>{it.icon}</span>
                      <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{it.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* WORKFLOW — visual timeline */}
            <Eyebrow>Operational Engagement Model</Eyebrow>
            <H2>How the partnership works</H2>
            <div style={{ position: 'relative' }}>
              <div className="wf-grid">
                {workflow.map((w, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    style={{ background: i % 2 === 0 ? 'var(--card-dark)' : 'var(--card-dark2)', borderRadius: 20, padding: 24, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: -14, left: 20, width: 32, height: 32, borderRadius: '50%', background: 'var(--lavender)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, boxShadow: '0 4px 12px rgba(30,27,58,0.25)' }}>{i + 1}</div>
                    <div style={{ fontSize: 30, marginTop: 10, marginBottom: 12 }}>{w.icon}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{w.title}</h3>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{w.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* DOCUMENTS — icon grid */}
            <Eyebrow>Licenses, Credentials &amp; Compliance</Eyebrow>
            <H2>Mandatory documents from vendor</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 10 }}>
              {documents.map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, boxShadow: '0 10px 24px rgba(30,27,58,0.1)' }}
                  style={{ background: '#fff', border: '1px solid rgba(107,92,231,0.12)', borderRadius: 14, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--lav-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{d.icon}</span>
                  <span style={{ fontSize: 12.5, color: 'var(--navy)', fontWeight: 600, lineHeight: 1.45 }}>{d.t}</span>
                </motion.div>
              ))}
            </div>

            {/* CONFIDENTIALITY — shield visual */}
            <Eyebrow>Confidentiality &amp; Data Protection</Eyebrow>
            <H2>Your data, strictly protected</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 16 }}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: 'var(--navy)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)', position: 'relative', overflow: 'hidden' }}>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}
                  style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(196,184,240,0.1)' }} />
                <div style={{ fontSize: 38, marginBottom: 14 }}>🛡️</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>The Vendor Shall</div>
                {['Maintain strict confidentiality of client data', 'Not disclose financial or operational information', 'Restrict access to authorized personnel only', 'Use secure systems for storage & communication', 'Sign Non-Disclosure Agreement (NDA)'].map((t, i) => (
                  <div key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 8, display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--lavender)' }}>✓</span> {t}
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.12)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)' }}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>🗄️</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#FF6B4A', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>Client Information Includes</div>
                {[{ i: '📊', t: 'Financial statements' }, { i: '💵', t: 'Payroll records' }, { i: '🧾', t: 'GST / Income Tax details' }, { i: '👥', t: 'Employee information' }, { i: '🏢', t: 'Business operational data' }].map((x, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, background: '#fff', borderRadius: 12, padding: '10px 14px' }}>
                    <span style={{ fontSize: 17 }}>{x.i}</span>
                    <span style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600 }}>{x.t}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* NON-SOLICITATION — compact visual */}
            <Eyebrow>Non-Solicitation &amp; Non-Circumvention</Eyebrow>
            <H2>Protecting the partnership</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12 }}>
              {[{ i: '🚫', t: 'No direct approach to BENIEVA clients' }, { i: '🛑', t: 'No independent solicitation of BENIEVA clients' }, { i: '🔒', t: 'No bypassing BENIEVA for direct engagement' }].map((x, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 22, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{x.i}</div>
                  <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600, lineHeight: 1.5 }}>{x.t}</p>
                </motion.div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 14, fontStyle: 'italic', textAlign: 'center' }}>Restriction continues during the engagement and for a mutually agreed duration after termination.</p>

            {/* QUALITY — two visual cards */}
            <Eyebrow>Quality &amp; Service Level Expectations</Eyebrow>
            <H2>Standards we maintain together</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 16 }}>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>Vendor Maintains</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[{ i: '🎯', t: 'Professional accuracy' }, { i: '⚡', t: 'Timely turnaround' }, { i: '✅', t: 'Error-free submissions' }, { i: '📁', t: 'Documentation standards' }, { i: '📅', t: 'Statutory timelines' }, { i: '🤝', t: 'Ethical practices' }].map((x, i) => (
                    <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      style={{ fontSize: 12.5, color: 'var(--navy)', background: 'var(--lav-light)', padding: '9px 14px', borderRadius: 99, fontWeight: 600, border: '1px solid rgba(107,92,231,0.12)' }}>
                      {x.i} {x.t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#00A57C', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>BENIEVA May Conduct</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[{ i: '🔍', t: 'Quality audits' }, { i: '📈', t: 'Performance reviews' }, { i: '⏱️', t: 'SLA monitoring' }, { i: '💬', t: 'Client feedback evaluations' }].map((x, i) => (
                    <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      style={{ fontSize: 12.5, color: 'var(--navy)', background: '#E6F7F1', padding: '9px 14px', borderRadius: 99, fontWeight: 600, border: '1px solid rgba(0,165,124,0.2)' }}>
                      {x.i} {x.t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* COMMERCIAL — pricing-style cards */}
            <Eyebrow>Commercial Structure</Eyebrow>
            <H2>Flexible engagement models</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
              {commercial.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(30,27,58,0.12)' }}
                  style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.12)', borderRadius: 20, padding: 26, textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{c.opt}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--navy)', marginBottom: 7 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.55 }}>{c.desc}</p>
                </motion.div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 14, fontStyle: 'italic', textAlign: 'center' }}>Final commercials mutually agreed through separate work orders or agreements.</p>

            {/* LEGAL — split visual */}
            <Eyebrow>Legal &amp; Liability Terms</Eyebrow>
            <H2>Clear accountability</H2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 16 }}>
              {[{ icon: '⚠️', label: 'Vendor Responsible For', color: '#FF6B4A', items: ['Professional negligence', 'Incorrect filings', 'Non-compliance from execution errors', 'Penalties due to professional mistakes'] },
                { icon: '🛡️', label: 'BENIEVA Not Liable For', color: 'var(--violet)', items: ['Errors in professional certification by vendor', 'Regulatory actions from vendor negligence', 'Incorrect information submitted by client'] }].map((col, ci) => (
                <motion.div key={ci} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 20, padding: 'clamp(20px,3vw,28px)' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{col.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: col.color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>{col.label}</div>
                  {col.items.map((t, i) => (
                    <div key={i} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 8, display: 'flex', gap: 8 }}>
                      <span style={{ color: col.color }}>✓</span> {t}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* AGREEMENTS */}
            <Eyebrow>Required Agreements</Eyebrow>
            <H2>Executed before engagement</H2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {agreements.map((a, i) => (
                <motion.span key={a} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600, background: '#fff', padding: '13px 20px', borderRadius: 99, border: '1px solid rgba(107,92,231,0.15)', display: 'inline-block' }}>
                  📝 {a}
                </motion.span>
              ))}
            </div>

            {/* TERMINATION — compact icons */}
            <Eyebrow>Termination Terms</Eyebrow>
            <H2>Either party may terminate</H2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[{ i: '📨', t: 'With prior written notice' }, { i: '🔓', t: 'Confidentiality breach' }, { i: '📉', t: 'Non-performance' }, { i: '⚖️', t: 'Regulatory non-compliance' }, { i: '🚷', t: 'Ethical misconduct' }].map((x, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 600, background: '#fff', padding: '13px 20px', borderRadius: 99, border: '1px solid rgba(30,27,58,0.1)' }}>
                  {x.i} {x.t}
                </motion.span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 14, fontStyle: 'italic' }}>All client data and documents must be returned upon termination.</p>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              style={{ marginTop: 64, background: 'var(--navy)', borderRadius: 24, padding: 'clamp(28px,4vw,44px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }}
                style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(196,184,240,0.1)', pointerEvents: 'none' }} />
              <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, color: '#fff', marginBottom: 12, position: 'relative', zIndex: 1 }}>
                Build a successful professional association with <span style={{ color: 'var(--lavender)' }}>BENIEVA</span>
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 26, position: 'relative', zIndex: 1 }}>
                Benjamin Franklin Vincent — Founder &nbsp;•&nbsp; ✉ bvincent@benieva.com &nbsp;•&nbsp; 📞 +91 80959 50600
              </p>
              <Link href="/contact" style={{ background: 'var(--lavender)', color: 'var(--navy)', padding: '14px 30px', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', position: 'relative', zIndex: 1, display: 'inline-block' }}>
                Become a Partner →
              </Link>
            </motion.div>

          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .wf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px 14px; }
        @media (max-width: 900px) { .wf-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .wf-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
