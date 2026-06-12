import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>BENIEVA</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 240 }}>
              India&apos;s trusted compliance service network. Verified professionals. Reliable delivery.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Services</div>
            {['Audit & Assurance', 'Taxation & GST', 'Accounting', 'Payroll Processing', 'ROC / MCA', 'Staff Augmentation'].map(s => (
              <Link key={s} href="/services" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 8 }}>
                {s}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Company</div>
            {[{ href: '/about', label: 'About Us' }, { href: '/contact', label: 'Contact' }, { href: '/portal', label: 'Client Portal' }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 8 }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Contact</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 2 }}>
              <div>Benjamin Franklin Vincent</div>
              <a href="mailto:bvincent@benieva.com" style={{ color: 'var(--lavender)', textDecoration: 'none' }}>bvincent@benieva.com</a>
              <div style={{ marginTop: 4 }}>+91 80959 50600</div>
              <div style={{ marginTop: 8, fontSize: 12 }}>Mon – Sat, 9 AM – 6:30 PM IST</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 BENIEVA Business & Compliance Solutions. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Pan-India • ISO Certified • ICAI Verified</p>
        </div>
      </div>
    </footer>
  )
}
