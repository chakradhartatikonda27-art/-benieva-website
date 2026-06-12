'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg)', border: '1.5px solid rgba(30,27,58,0.09)',
    borderRadius: 10, padding: '11px 14px', fontSize: 13,
    fontFamily: 'Inter, sans-serif', color: 'var(--navy)', outline: 'none',
  }

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(48px,7vw,72px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Contact</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 10 }}>Let&apos;s talk about<br />your requirements</h1>
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 40, maxWidth: 440 }}>Get a tailored compliance plan from our team within 24 hours.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
              <div style={{ background: 'var(--navy)', borderRadius: 22, padding: 'clamp(24px,3vw,36px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(196,184,240,0.08)', pointerEvents: 'none' }} />
                <h2 style={{ fontSize: 21, fontWeight: 700, color: '#fff', marginBottom: 10, position: 'relative', zIndex: 1 }}>Get in touch</h2>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: 24, position: 'relative', zIndex: 1 }}>Audit, compliance, payroll, or accounting — we&apos;ll match you with the right expert.</p>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 13 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>👤 Benjamin Franklin Vincent</span>
                  <a href="mailto:bvincent@benieva.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>✉ bvincent@benieva.com</a>
                  <a href="tel:+918095950600" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>📞 +91 80959 50600</a>
                </div>
                <div style={{ background: 'rgba(196,184,240,0.08)', border: '1px solid rgba(196,184,240,0.12)', borderRadius: 12, padding: '16px 18px', marginTop: 22, position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Office Hours</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>Monday – Saturday<br />9:00 AM – 6:30 PM IST</p>
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 22, padding: 'clamp(24px,3vw,36px)' }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 22 }}>Send a message</h3>
                {sent ? (
                  <div style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.2)', color: 'var(--violet)', borderRadius: 12, padding: '20px 24px', textAlign: 'center' }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Message sent!</div>
                    <div style={{ fontSize: 13, opacity: 0.7 }}>We&apos;ll respond within 24 hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 7 }}>Full name</label>
                      <input type="text" placeholder="Your full name" required style={inputStyle}
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 7 }}>Email address</label>
                      <input type="email" placeholder="you@company.com" required style={inputStyle}
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 7 }}>Company</label>
                      <input type="text" placeholder="Your company name" style={inputStyle}
                        value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 7 }}>Service needed</label>
                      <select required style={inputStyle}
                        value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service</option>
                        <option>Audit &amp; Assurance</option>
                        <option>Taxation &amp; GST</option>
                        <option>Accounting &amp; Bookkeeping</option>
                        <option>Payroll Processing</option>
                        <option>ROC / MCA Compliance</option>
                        <option>Staff Augmentation</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 14 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: 7 }}>Message</label>
                      <textarea placeholder="Tell us about your requirements..." required rows={4} style={{ ...inputStyle, resize: 'none', height: 88 }}
                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" style={{ width: '100%', background: 'var(--navy)', color: '#fff', border: 'none', padding: 14, borderRadius: 99, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
