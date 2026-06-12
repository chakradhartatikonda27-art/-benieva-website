'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'Every engagement governed by strict ethical and professional standards without exception.' },
  { icon: '🏆', title: 'Expertise', desc: 'Only verified, qualified professionals with checked credentials execute client deliverables.' },
  { icon: '🔒', title: 'Confidentiality', desc: 'Client data handled with highest security and full contractual protection always.' },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(48px,7vw,72px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>About Us</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 10 }}>
              India&apos;s growing<br />compliance network
            </h1>
            <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
              Bridging the gap between businesses and qualified professionals — reliably, at scale.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, marginBottom: 20 }}>
              <div style={{ background: 'var(--navy)', borderRadius: 22, padding: 'clamp(24px,3vw,36px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(196,184,240,0.08)', pointerEvents: 'none' }} />
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(196,184,240,0.12)', border: '1px solid rgba(196,184,240,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, color: 'var(--lavender)', marginBottom: 18, position: 'relative', zIndex: 1 }}>BV</div>
                <div style={{ fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 3, position: 'relative', zIndex: 1 }}>Benjamin Franklin Vincent</div>
                <div style={{ fontSize: 11, color: 'var(--lavender)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, position: 'relative', zIndex: 1 }}>Founder, BENIEVA</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 22, position: 'relative', zIndex: 1 }}>
                  With deep expertise in financial compliance, taxation, and audit management, Benjamin built BENIEVA to create a trusted, scalable model for professional service delivery across India.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, position: 'relative', zIndex: 1 }}>
                  <a href="mailto:bvincent@benieva.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>✉ bvincent@benieva.com</a>
                  <a href="tel:+918095950600" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>📞 +91 80959 50600</a>
                </div>
              </div>

              <div style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.1)', borderRadius: 22, padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Our Mission</div>
                <blockquote style={{ fontSize: 'clamp(16px,2.2vw,19px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.5, marginBottom: 18 }}>
                  &ldquo;To build India&apos;s most trusted compliance network — where quality, integrity, and expertise meet at scale.&rdquo;
                </blockquote>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.75 }}>
                  Founded to make professional compliance accessible, reliable, and scalable for every business — from startups to enterprises across India.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
              {values.map(v => (
                <div key={v.title} style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--lav-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, fontSize: 16 }}>{v.icon}</div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 5 }}>{v.title}</h4>
                  <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
