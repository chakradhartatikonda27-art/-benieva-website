'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const docs = [
  { name: 'Q2 Audit Report', service: 'Audit', date: '10 Jun 2026', status: 'Completed', bg: '#ECFDF5', fg: '#065F46' },
  { name: 'GST Return — May', service: 'Taxation', date: '8 Jun 2026', status: 'Filed', bg: '#ECFDF5', fg: '#065F46' },
  { name: 'Payroll — Jun 2026', service: 'Payroll', date: '5 Jun 2026', status: 'Pending', bg: '#FFFBEB', fg: '#92400E' },
  { name: 'TDS Challan Q1', service: 'Taxation', date: '1 Jun 2026', status: 'In Review', bg: '#E8E4FF', fg: '#6B5CE7' },
]

const navItems = ['Dashboard', 'Documents', 'Invoices', 'Messages', 'Settings']

export default function Portal() {
  const [active, setActive] = useState('Dashboard')

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(32px,5vw,48px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>Client Portal</div>
            <h1 style={{ fontSize: 'clamp(24px,4vw,32px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1, marginBottom: 24 }}>Your dashboard</h1>

            <div className="portal-grid" style={{ border: '1px solid rgba(30,27,58,0.07)', borderRadius: 22, overflow: 'hidden', background: '#fff' }}>
              <div style={{ background: 'var(--navy)', padding: '20px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 12, marginBottom: 18 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(196,184,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'var(--lavender)', flexShrink: 0 }}>AC</div>
                  <div className="portal-label">
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Acme Corp</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Client account</div>
                  </div>
                </div>
                {navItems.map(n => (
                  <div key={n} onClick={() => setActive(n)} style={{ padding: '9px 12px', borderRadius: 10, fontSize: 13, color: active === n ? 'var(--lavender)' : 'rgba(255,255,255,0.42)', cursor: 'pointer', background: active === n ? 'rgba(196,184,240,0.1)' : 'transparent', marginBottom: 2 }}>
                    <span className="portal-label">{n}</span>
                    <span className="portal-label-short" style={{ display: 'none' }}>{n[0]}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--bg)', padding: 'clamp(16px,3vw,28px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 12 }}>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)' }}>Dashboard</h2>
                  <button style={{ background: 'var(--navy)', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 99, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>+ Upload</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 12, marginBottom: 22 }}>
                  {[
                    { n: '3', l: 'Active Services', c: '#6B5CE7' },
                    { n: '7', l: 'Documents', c: '#FF6B4A' },
                    { n: '2', l: 'Pending Actions', c: '#00D4AA' },
                  ].map((d, i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 14, padding: 18, position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: d.c }} />
                      <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--navy)' }}>{d.n}</div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{d.l}</div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Recent Activity</div>
                <div style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: 8, padding: '10px 16px', background: 'var(--lav-light)' }}>
                    {['Document', 'Service', 'Date', 'Status'].map(h => (
                      <span key={h} style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{h}</span>
                    ))}
                  </div>
                  {docs.map((d, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr auto', gap: 8, padding: '12px 16px', borderBottom: i < docs.length - 1 ? '1px solid rgba(30,27,58,0.05)' : 'none', alignItems: 'center', fontSize: 13 }}>
                      <span style={{ color: 'var(--navy)', fontWeight: 500 }}>{d.name}</span>
                      <span style={{ color: 'var(--text2)' }}>{d.service}</span>
                      <span style={{ color: 'var(--text3)', fontSize: 12 }}>{d.date}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 6, background: d.bg, color: d.fg, whiteSpace: 'nowrap' }}>{d.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .portal-grid { display: grid; grid-template-columns: 210px 1fr; }
        @media (max-width: 600px) {
          .portal-grid { grid-template-columns: 56px 1fr; }
          .portal-label { display: none !important; }
          .portal-label-short { display: inline !important; }
        }
      `}</style>
    </>
  )
}
