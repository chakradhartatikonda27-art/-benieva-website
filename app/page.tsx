'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  { n: '01', icon: '📋', title: 'Audit & Assurance', desc: 'Statutory, internal, tax & process audits by verified Chartered Accountants.' },
  { n: '02', icon: '🧾', title: 'Taxation & GST', desc: 'ITR, GST filing, TDS, notice handling & comprehensive tax advisory.' },
  { n: '03', icon: '📚', title: 'Accounting', desc: 'Daily bookkeeping, MIS reports, bank reconciliation & ledger scrutiny.' },
  { n: '04', icon: '👥', title: 'Payroll Processing', desc: 'Salary, payslips, PF/ESI/PT compliance & TDS calculations every cycle.' },
  { n: '05', icon: '🏢', title: 'ROC / MCA Compliance', desc: 'Company incorporation, annual ROC filings & corporate secretarial.' },
  { n: '06', icon: '🪪', title: 'Staff Augmentation', desc: 'Verified audit & accounting professionals on project or temporary basis.' },
]

const why = [
  { icon: '🛡️', title: 'Verified professionals', desc: 'Every partner screened — CA, ICAI, ICSI credentials validated before any client assignment.' },
  { icon: '🔒', title: 'Data confidentiality', desc: 'NDA-backed engagements. Your financial data handled with the highest security standards.' },
  { icon: '⏰', title: 'SLA-driven delivery', desc: 'Statutory deadlines met with structured monitoring, escalation, and quality reviews.' },
  { icon: '📊', title: 'Scalable for any size', desc: 'From solo founders to multi-entity groups — our delivery model grows with you.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section style={{ background: 'var(--bg)', padding: 'clamp(48px,8vw,88px) 24px clamp(48px,6vw,72px)', position: 'relative', overflow: 'hidden' }}>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(196,184,240,0.4) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', bottom: -120, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(176,164,232,0.22) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="hero-grid">
              <div>
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 22 }}>
                  Compliance &amp; Audit Services
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="hero-h1">
                  Your Compliance<br /><span style={{ color: 'var(--violet)' }}>Works</span> For You
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
                  style={{ fontSize: 'clamp(14px,2vw,16px)', color: 'var(--text2)', lineHeight: 1.75, maxWidth: 380, marginBottom: 36 }}>
                  BENIEVA connects businesses with verified CA firms, tax consultants, and payroll experts — delivering quality compliance at scale across India.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}
                  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/services" style={{ background: 'var(--navy)', color: '#fff', padding: '13px 22px', borderRadius: 99, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    Explore Services
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', fontSize: 12 }}>→</span>
                  </Link>
                  <Link href="/contact" style={{ background: 'transparent', color: 'var(--navy)', border: '1.5px solid rgba(30,27,58,0.3)', padding: '13px 22px', borderRadius: 99, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                    Talk to us
                  </Link>
                </motion.div>
              </div>

              {/* HERO VISUAL with real image */}
              <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: 'clamp(240px,32vw,320px)', height: 'clamp(240px,32vw,320px)', borderRadius: 28, position: 'relative', overflow: 'visible' }}>
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Accounting and compliance"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 28, border: '1px solid rgba(107,92,231,0.15)' }} />
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', top: -16, right: -16, background: '#fff', border: '1px solid rgba(30,27,58,0.09)', borderRadius: 16, padding: '12px 18px', boxShadow: '0 8px 28px rgba(30,27,58,0.14)' }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--navy)' }}>500+</div>
                    <div style={{ fontSize: 11, color: 'var(--text3)' }}>Clients served</div>
                  </motion.div>
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    style={{ position: 'absolute', bottom: -16, left: -16, background: '#fff', border: '1px solid rgba(30,27,58,0.09)', borderRadius: 16, padding: '12px 18px', boxShadow: '0 8px 28px rgba(30,27,58,0.14)' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)' }}>Pan-India</div>
                    <div style={{ fontSize: 11, color: 'var(--text3)' }}>Network coverage</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section style={{ background: 'var(--bg2)', borderTop: '1px solid rgba(107,92,231,0.08)', borderBottom: '1px solid rgba(107,92,231,0.08)', padding: '14px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1.5 }}>Trusted by</span>
            {['ICAI Verified', 'NDA-Backed', 'ISO Standards', 'SLA-Driven', 'Pan-India'].map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ fontSize: 12, fontWeight: 600, color: 'var(--text2)', padding: '5px 13px', borderRadius: 99, background: 'rgba(107,92,231,0.07)', border: '1px solid rgba(107,92,231,0.12)' }}>
                ✓ {t}
              </motion.span>
            ))}
          </div>
        </section>

        {/* MEET BENIEVA */}
        <section style={{ padding: 'clamp(48px,7vw,72px) 24px clamp(40px,5vw,56px)', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="meet-top">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 style={{ fontSize: 'clamp(34px,5vw,46px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -2, lineHeight: 1.05, marginBottom: 24 }}>Meet BENIEVA.</h2>
                <Link href="/about" style={{ background: 'var(--navy)', color: '#fff', padding: '13px 22px', borderRadius: 99, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Discover it <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', fontSize: 12 }}>→</span>
                </Link>
              </motion.div>
              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ fontSize: 'clamp(16px,2.2vw,20px)', color: 'var(--text2)', lineHeight: 1.6, maxWidth: 500 }}>
                BENIEVA is a managed compliance service network connecting businesses to verified Chartered Accountants, tax consultants, and payroll experts — so your financial obligations are always met, on time, every time.
              </motion.p>
            </div>
            <div className="meet-cards">
              {[
                { bg: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.12)', dark: false, title: 'Compliance that grows with you', desc: 'From startups to multi-entity groups — BENIEVA scales as your business expands across India.', illu: '📈' },
                { bg: 'var(--card-dark)', dark: true, title: 'Always accurate, always on time.', desc: 'Statutory deadlines met with structured monitoring and quality oversight — no missed filings.' },
                { bg: 'var(--card-dark2)', dark: true, title: 'Fully managed delivery', desc: 'BENIEVA handles coordination, document collection, and quality checks — you just approve.' },
              ].map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  style={{ background: c.bg, border: c.border || 'none', borderRadius: 22, padding: 28, minHeight: 200, position: 'relative', overflow: 'hidden' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: c.dark ? '#fff' : 'var(--navy)', marginBottom: 10, lineHeight: 1.25 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: c.dark ? 'rgba(255,255,255,0.45)' : 'var(--text2)', lineHeight: 1.65 }}>{c.desc}</p>
                  {c.illu && <div style={{ position: 'absolute', right: -8, bottom: -8, width: 90, height: 90, borderRadius: 14, background: 'rgba(107,92,231,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>{c.illu}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ padding: 'clamp(40px,6vw,56px) 24px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>What We Do</div>
              <h2 style={{ fontSize: 'clamp(28px,4vw,36px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1, lineHeight: 1.1, marginBottom: 10 }}>Six service verticals,<br />one trusted partner</h2>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}>Every service delivered by domain-qualified professionals under BENIEVA&apos;s quality framework.</p>
            </motion.div>
            <div className="svc-grid">
              {services.map((s, i) => (
                <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.45 }}
                  whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(30,27,58,0.12)' }}
                  style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 18 }}>
                  <Link href="/services" style={{ padding: 26, textDecoration: 'none', display: 'block' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', letterSpacing: 1, marginBottom: 12 }}>{s.n}</div>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--lav-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, border: '1px solid rgba(107,92,231,0.1)', fontSize: 20 }}>{s.icon}</div>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.65 }}>{s.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section style={{ padding: 'clamp(40px,6vw,56px) 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Why BENIEVA</div>
              <h2 style={{ fontSize: 'clamp(28px,4vw,36px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1, marginBottom: 10 }}>Built on trust</h2>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}>Verified credentials, strict SLAs, and watertight confidentiality — on every engagement.</p>
            </motion.div>
            <div className="why-grid">
              {why.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  style={{ background: i % 2 === 0 ? 'var(--card-dark)' : 'var(--card-dark2)', borderRadius: 20, padding: 28 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(196,184,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 18 }}>{w.icon}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 7 }}>{w.title}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}>{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(40px,6vw,48px) 24px', background: 'var(--bg)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ background: 'var(--navy)', borderRadius: 24, padding: 'clamp(32px,5vw,52px) clamp(24px,4vw,48px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, position: 'relative', overflow: 'hidden', flexWrap: 'wrap' }}>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 7, repeat: Infinity }}
                style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(196,184,240,0.1)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(20px,3.5vw,28px)', fontWeight: 800, color: '#fff', letterSpacing: -0.8, lineHeight: 1.25, maxWidth: 400 }}>
                  Ready to simplify your <span style={{ color: 'var(--lavender)' }}>compliance?</span>
                </h2>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>Get a tailored plan from our team within 24 hours.</p>
              </div>
              <Link href="/contact" style={{ background: 'var(--lavender)', color: 'var(--navy)', padding: '14px 26px', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1, whiteSpace: 'nowrap' }}>
                Start a Conversation <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>→</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .hero-h1 { font-size: clamp(36px,6vw,54px); font-weight: 800; line-height: 1.06; color: var(--navy); letter-spacing: -2.5px; margin-bottom: 24px; }
        .meet-top { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: start; margin-bottom: 36px; }
        .meet-cards { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 14px; }
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .meet-top { grid-template-columns: 1fr; gap: 24px; }
          .meet-cards { grid-template-columns: 1fr; }
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .svc-grid { grid-template-columns: 1fr; }
          .hero-h1 { letter-spacing: -1.5px; }
        }
      `}</style>
    </>
  )
}
