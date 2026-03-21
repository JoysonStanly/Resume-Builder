import React from 'react'

const Footer = () => {
  const socials = [
    {
      href: 'https://dribbble.com/',
      label: 'Dribbble',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com/company/',
      label: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      href: 'https://x.com/',
      label: 'X / Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      href: 'https://youtube.com/',
      label: 'YouTube',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
        </svg>
      ),
    },
  ]

  const links = {
    Product: ['Home', 'Support', 'Pricing', 'Affiliate'],
    Resources: ['Company', 'Blogs', 'Community', 'Careers', 'About'],
    Legal: ['Privacy', 'Terms'],
  }

  return (
    <>
      <footer className="footer-root">
        {/* Top fade line */}
        <div className="footer-topline" />

        {/* Background elements */}
        <div className="footer-bg-grid" />
        <div className="footer-glow footer-glow-left" />
        <div className="footer-glow footer-glow-right" />

        <div className="footer-inner">
          {/* Left: logo + links */}
          <div className="footer-links-wrap">
            {/* Logo */}
            <a href="#" className="footer-logo-link">
              <img src="/logo.svg" alt="logo" className="h-11 w-auto footer-logo" />
            </a>

            {/* Link groups */}
            {Object.entries(links).map(([group, items]) => (
              <div key={group} className="footer-col">
                <p className="footer-col-title">{group}</p>
                <ul className="footer-col-list">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="/" className="footer-link">
                        {item}
                        {item === 'Careers' && (
                          <span className="footer-hiring-badge">We're hiring!</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: tagline + socials */}
          <div className="footer-right">
            {/* Green card */}
            <div className="footer-tagline-card">
              <div className="footer-tagline-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-green-600">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <p className="footer-tagline">
                Making every customer feel valued — no matter the size of your audience.
              </p>
            </div>

            {/* Socials */}
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="footer-copy">© 2026 Resume Builder. All rights reserved.</p>
          </div>
        </div>

        
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        .footer-root {
          position: relative;
          margin-top: 100px;
          overflow: hidden;
          background: linear-gradient(180deg,
            #f0fdf4 0%,
            #dcfce7 40%,
            #bbf7d0 100%
          );
          border-top: 1px solid rgba(134,239,172,0.4);
        }

        .footer-topline {
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(74,222,128,0.6), transparent);
        }

        .footer-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .footer-glow {
          position: absolute;
          width: 400px; height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .footer-glow-left {
          top: 0; left: -100px;
          background: radial-gradient(ellipse, rgba(134,239,172,0.35) 0%, transparent 70%);
        }
        .footer-glow-right {
          bottom: 0; right: -80px;
          background: radial-gradient(ellipse, rgba(187,247,208,0.4) 0%, transparent 70%);
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
          padding: 64px 32px 48px;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .footer-inner { padding: 64px 96px 48px; }
        }

        .footer-links-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 40px 60px;
          align-items: flex-start;
        }

        .footer-logo-link { display: block; }
        .footer-logo {
          filter: drop-shadow(0 4px 12px rgba(22,163,74,0.2));
          transition: transform 0.3s ease;
        }
        .footer-logo:hover { transform: scale(1.05); }

        .footer-col {}
        .footer-col-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 14px;
          letter-spacing: 0.03em;
        }
        .footer-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-link:hover {
          color: #16a34a;
          transform: translateX(4px);
        }
        .footer-hiring-badge {
          font-size: 0.65rem;
          color: white;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          border-radius: 6px;
          padding: 2px 8px;
          font-weight: 600;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 6px rgba(22,163,74,0.3);
        }

        /* Right side */
        .footer-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-end;
          max-width: 280px;
        }
        @media (max-width: 768px) {
          .footer-right { align-items: flex-start; max-width: 100%; }
        }

        .footer-tagline-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(134,239,172,0.4);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(22,163,74,0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .footer-tagline-icon {
          flex-shrink: 0;
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(220,252,231,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.6;
          font-weight: 500;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }
        .footer-social-btn {
          width: 40px; height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(134,239,172,0.3);
          backdrop-filter: blur(8px);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .footer-social-btn:hover {
          color: #16a34a;
          background: rgba(220,252,231,0.9);
          border-color: rgba(134,239,172,0.6);
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px rgba(22,163,74,0.2);
        }

        .footer-copy {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Bottom bar */
        .footer-bottombar {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(134,239,172,0.3);
          padding: 16px 32px;
        }
        @media (min-width: 1024px) { .footer-bottombar { padding: 16px 96px; } }
        .footer-bottombar-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
          max-width: 1280px;
          margin: 0 auto;
        }
        .footer-bottombar-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: #94a3b8;
        }
      `}</style>
    </>
  )
}

export default Footer