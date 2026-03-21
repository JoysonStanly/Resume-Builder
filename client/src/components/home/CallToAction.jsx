import React, { useRef, useEffect } from 'react'

const CallToAction = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cta-visible')
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div id="cta" className="cta-outer" ref={sectionRef}>

        {/* Floating background orbs */}
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />

        {/* Animated grid */}
        <div className="cta-grid" />

        {/* Sparkle dots */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`cta-sparkle cta-sparkle-${i + 1}`} />
        ))}

        {/* Inner card */}
        <div className="cta-card">
          {/* Card shine */}
          <div className="cta-shine" />

          {/* Left: text */}
          <div className="cta-left">
            <div className="cta-eyebrow">
              <span className="cta-dot" />
              Ready to get started?
            </div>
            <p className="cta-headline">
              Build a Professional Resume That Helps You{' '}
              <span className="cta-highlight">Stand Out</span>{' '}
              and Get Hired
            </p>
          </div>

          {/* Right: CTA */}
          <div className="cta-right">
            <a href="https://prebuiltui.com" className="cta-btn">
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="cta-note">No credit card required</p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        .cta-outer {
          position: relative;
          max-width: 1000px;
          margin: 80px auto 0;
          padding: 0 24px;
          overflow: hidden;
        }

        /* Bg orbs */
        .cta-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }
        .cta-orb-1 {
          width: 350px; height: 250px;
          background: radial-gradient(ellipse, rgba(134,239,172,0.4) 0%, transparent 70%);
          top: -40px; left: -80px;
          animation: ctaOrb1 7s ease-in-out infinite;
        }
        .cta-orb-2 {
          width: 280px; height: 200px;
          background: radial-gradient(ellipse, rgba(187,247,208,0.5) 0%, transparent 70%);
          bottom: -30px; right: -60px;
          animation: ctaOrb2 9s ease-in-out infinite;
        }
        @keyframes ctaOrb1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes ctaOrb2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px, 15px) scale(1.08); }
        }

        /* Grid */
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          border-radius: 28px;
          pointer-events: none;
          z-index: 0;
        }

        /* Sparkles */
        .cta-sparkle {
          position: absolute;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(74,222,128,0.7);
          z-index: 1;
          animation: sparkleFloat 4s ease-in-out infinite;
        }
        .cta-sparkle-1 { top: 15%; left: 12%; animation-delay: 0s; width: 5px; height: 5px; }
        .cta-sparkle-2 { top: 70%; left: 20%; animation-delay: 0.8s; width: 8px; height: 8px; background: rgba(134,239,172,0.8); }
        .cta-sparkle-3 { top: 25%; right: 15%; animation-delay: 1.6s; width: 5px; height: 5px; }
        .cta-sparkle-4 { bottom: 20%; right: 25%; animation-delay: 0.4s; width: 7px; height: 7px; }
        .cta-sparkle-5 { top: 50%; left: 40%; animation-delay: 2s; width: 4px; height: 4px; }
        .cta-sparkle-6 { bottom: 30%; left: 60%; animation-delay: 1.2s; width: 6px; height: 6px; background: rgba(22,163,74,0.6); }

        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-12px) scale(1.3); opacity: 1; }
        }

        /* Card */
        .cta-card {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 32px;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg,
            rgba(240,253,244,0.95) 0%,
            rgba(220,252,231,0.85) 50%,
            rgba(240,253,244,0.9) 100%
          );
          border: 1.5px solid rgba(134,239,172,0.5);
          border-radius: 28px;
          padding: 56px 48px;
          backdrop-filter: blur(20px);
          box-shadow:
            0 20px 60px rgba(22,163,74,0.12),
            0 4px 20px rgba(22,163,74,0.08),
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 -1px 0 rgba(134,239,172,0.2) inset;
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-visible .cta-card {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .cta-card {
            flex-direction: row;
            text-align: left;
          }
        }

        .cta-shine {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: conic-gradient(from 0deg at 50% 50%,
            transparent 0deg,
            rgba(255,255,255,0.05) 60deg,
            transparent 120deg
          );
          animation: ctaRotate 12s linear infinite;
          pointer-events: none;
        }
        @keyframes ctaRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-left {
          flex: 1;
          max-width: 500px;
        }
        .cta-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #16a34a;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .cta-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.5);
          animation: pulseGreen 1.5s ease-out infinite;
        }
        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .cta-headline {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }
        .cta-highlight {
          background: linear-gradient(135deg, #16a34a, #4ade80);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .cta-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%);
          color: white;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          white-space: nowrap;
          box-shadow:
            0 10px 30px rgba(22,163,74,0.4),
            0 2px 0 rgba(255,255,255,0.2) inset,
            0 -2px 0 rgba(0,0,0,0.1) inset;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.6s ease;
        }
        .cta-btn:hover::before { left: 100%; }
        .cta-btn:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 50px rgba(22,163,74,0.5), 0 2px 0 rgba(255,255,255,0.2) inset;
        }
        .cta-btn:active { transform: scale(0.97); }

        .cta-note {
          font-size: 0.75rem;
          color: #86a890;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default CallToAction