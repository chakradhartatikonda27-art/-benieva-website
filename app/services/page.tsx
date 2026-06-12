'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    icon: '📋', short: 'Audit', title: 'Audit & Assurance Services',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80',
    desc: 'Statutory, internal, tax and process audits conducted by qualified Chartered Accountants.',
    include: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Process Audit', 'Compliance Audit', 'Financial Review & Verification', 'Certification Services'],
    reqTitle: 'Mandatory License Requirements',
    req: ['Valid ICAI Membership', 'Registered Chartered Accountant Firm', 'Peer Review Compliance (where applicable)', 'Certificate of Practice (COP)'],
    vendor: ['Conduct audit as per applicable standards', 'Perform verification and documentation', 'Provide audit reports and observations', 'Maintain professional independence and ethics', 'Ensure statutory compliance'],
    benieva: ['Coordinate client communication', 'Collect required documents from client', 'Support operational workflow', 'Monitor timelines and deliverables'],
  },
  {
    icon: '🧾', short: 'Taxation & GST', title: 'Taxation & Compliance Services',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80',
    desc: 'End-to-end tax filing, advisory, and representation including notice handling.',
    include: ['Income Tax Return Filing', 'GST Return Filing', 'GST Advisory & Reconciliation', 'TDS Filing', 'Tax Planning Support', 'Notice Handling Assistance', 'ROC/MCA Compliance', 'Company Incorporation Support'],
    reqTitle: 'Vendor Requirements',
    req: ['Qualified CA / Tax Consultant / Compliance Expert', 'Knowledge of Income Tax Act, GST Act, Companies Act', 'Experience in handling assessments and reconciliations'],
    vendor: ['Timely filing and submission', 'Proper review and validation', 'Advisory support where applicable', 'Maintaining compliance with statutory deadlines', 'Handling departmental notices (if agreed)'],
    benieva: ['Client onboarding', 'Collection of source documents', 'Client coordination and follow-up', 'Billing and commercial management', 'Service tracking and escalation management'],
  },
  {
    icon: '📚', short: 'Accounting', title: 'Accounting & Bookkeeping Services',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    desc: 'Daily accounts management, financial reporting, and MIS preparation.',
    include: ['Daily Accounting Entries', 'Accounts Receivable / Payable Management', 'Bank Reconciliation', 'Ledger Scrutiny', 'Financial Reporting', 'MIS Preparation', 'Month-End Closing Support'],
    reqTitle: 'Vendor Requirements',
    req: ['Qualified Accountants / Commerce Graduates', 'Experience in Tally, Zoho Books, QuickBooks, SAP, or ERP platforms', 'Understanding of accounting standards'],
    vendor: ['Accurate bookkeeping', 'Timely reporting', 'Error-free reconciliations', 'Maintaining data confidentiality', 'Coordinating with BENIEVA operations team'],
    benieva: [],
  },
  {
    icon: '👥', short: 'Payroll', title: 'Payroll Processing Services',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80',
    desc: 'Accurate, compliant payroll every cycle with statutory processing.',
    include: ['Salary Processing', 'Payslip Generation', 'PF / ESI / PT Compliance', 'TDS Calculation', 'Payroll Reports', 'Employee Tax Declarations'],
    reqTitle: 'Vendor Requirements',
    req: ['Payroll domain expertise', 'Knowledge of labor compliance', 'Experience with payroll software'],
    vendor: ['Timely payroll execution', 'Statutory compliance processing', 'Confidential handling of employee information', 'Error-free calculations and reports'],
    benieva: [],
  },
  {
    icon: '🪪', short: 'Staffing', title: 'Audit Manpower Support / Staff Augmentation',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80',
    desc: 'Trained accounting and audit staff on temporary or project basis.',
    include: ['Deployment of trained accounting / audit staff', 'Temporary or project-based staffing', 'Resource augmentation for peak workloads'],
    reqTitle: 'Vendor Responsibilities',
    req: ['Background verification of resources', 'Skill validation', 'Attendance and productivity management', 'Compliance with labor laws'],
    vendor: [],
    benieva: ['Client coordination', 'Assignment planning', 'Billing and invoicing', 'Performance review coordination'],
  },
]

function Block({ title, items, color }: { title: string; items: string[]; color: string }) {
  if (!items.length) return null
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
      style={{ background: '#fff', border: '1px solid rgba(30,27,58,0.07)', borderRadius: 16, padding: 20, flex: 1, minWidth: 240 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{title}</div>
      {items.map(it => (
        <div key={it} style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 7, display: 'flex', gap: 8 }}>
          <span style={{ color, flexShrink: 0 }}>✓</span> {it}
        </div>
      ))}
    </motion.div>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <section style={{ padding: 'clamp(40px,6vw,64px) 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Scope of Services</div>
              <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: 'var(--navy)', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 10 }}>Complete compliance coverage</h1>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Select a service to explore its full scope, requirements, and delivery model.
              </p>
            </motion.div>

            {/* TABS */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              {services.map((sv, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{
                    background: active === i ? 'var(--navy)' : '#fff',
                    color: active === i ? '#fff' : 'var(--text2)',
                    border: active === i ? '1.5px solid var(--navy)' : '1.5px solid rgba(30,27,58,0.12)',
                    padding: '11px 20px', borderRadius: 99, fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.25s',
                  }}>
                  {sv.icon} {sv.short}
                </button>
              ))}
            </div>

            {/* ACTIVE SERVICE */}
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}>

                {/* Hero card with image */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 0, background: 'var(--navy)', borderRadius: 22, overflow: 'hidden', marginBottom: 20 }}>
                  <div style={{ padding: 'clamp(24px,4vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: 'spring' }}
                      style={{ width: 54, height: 54, borderRadius: 14, background: 'rgba(196,184,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 18 }}>
                      {s.icon}
                    </motion.div>
                    <h2 style={{ fontSize: 'clamp(19px,2.8vw,25px)', fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 10, lineHeight: 1.2 }}>{s.title}</h2>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                  <div style={{ minHeight: 240, position: 'relative', overflow: 'hidden' }}>
                    <motion.img src={s.img} alt={s.title}
                      initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy) 0%, transparent 40%)' }} />
                  </div>
                </div>

                {/* Services include */}
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  style={{ background: 'var(--lav-light)', border: '1px solid rgba(107,92,231,0.1)', borderRadius: 16, padding: '18px 22px', marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Services Include</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.include.map((t, i) => (
                      <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + i * 0.04 }}
                        style={{ fontSize: 12, color: 'var(--navy)', background: '#fff', padding: '7px 14px', borderRadius: 8, fontWeight: 600, border: '1px solid rgba(107,92,231,0.12)' }}>
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Detail blocks */}
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Block title={s.reqTitle} items={s.req} color="#FF6B4A" />
                  <Block title="Vendor Responsibilities" items={s.vendor} color="#6B5CE7" />
                  <Block title="BENIEVA Responsibilities" items={s.benieva} color="#00A57C" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ marginTop: 48, background: 'var(--navy)', borderRadius: 24, padding: 'clamp(24px,4vw,40px)', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800, color: '#fff', marginBottom: 10 }}>Want to partner with BENIEVA?</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>View our complete vendor partnership framework.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/partners" style={{ background: 'var(--lavender)', color: 'var(--navy)', padding: '13px 28px', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Partnership Framework →</Link>
                <Link href="/contact" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', padding: '13px 28px', borderRadius: 99, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Talk to us</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
