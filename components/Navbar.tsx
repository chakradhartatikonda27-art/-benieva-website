'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
  { href: '/portal', label: 'Portal' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(242,241,248,0.97)' : 'rgba(242,241,248,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(107,92,231,0.1)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', textDecoration: 'none', letterSpacing: '-0.3px' }}>
          BENIEVA
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 13, color: 'var(--text2)', textDecoration: 'none', padding: '6px 13px', borderRadius: 8 }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ background: 'var(--navy)', color: '#fff', padding: '9px 22px', borderRadius: 99, fontSize: 13, fontWeight: 600, textDecoration: 'none', marginLeft: 8 }}>
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="hamburger" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--navy)' }}>
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(242,241,248,0.98)', borderTop: '1px solid rgba(107,92,231,0.1)', padding: '16px 24px 20px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontSize: 15, color: 'var(--text)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(107,92,231,0.08)', fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: 'block', marginTop: 16, background: 'var(--navy)', color: '#fff', textAlign: 'center', padding: 13, borderRadius: 99, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
