import React, { useEffect, useRef } from 'react'
import { Zap } from 'lucide-react'
import Title from './Title'

const featureItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-violet-600">
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    color: 'violet',
    title: 'Real-Time Analytics',
    desc: 'Get instant insights into your finances with live dashboards.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-green-600">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </svg>
    ),
    color: 'green',
    title: 'Bank-Grade Security',
    desc: 'End-to-end encryption, 2FA, compliance with GDPR standards.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-orange-500">
        <path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" />
      </svg>
    ),
    color: 'orange',
    title: 'Customizable Reports',
    desc: 'Export professional, audit-ready financial reports for tax or internal review.',
  },
]

const colorMap = {
  violet: {
    bg: 'rgba(245,243,255,0.9)',
    border: 'rgba(167,139,250,0.4)',
    glow: 'rgba(139,92,246,0.15)',
    iconBg: 'rgba(237,233,254,1)',
    num: 'rgba(139,92,246,0.3)',
  },
  green: {
    bg: 'rgba(240,253,244,0.9)',
    border: 'rgba(134,239,172,0.5)',
    glow: 'rgba(22,163,74,0.12)',
    iconBg: 'rgba(220,252,231,1)',
    num: 'rgba(22,163,74,0.3)',
  },
  orange: {
    bg: 'rgba(255,247,237,0.9)',
    border: 'rgba(253,186,116,0.4)',
    glow: 'rgba(234,88,12,0.1)',
    iconBg: 'rgba(254,243,199,1)',
    num: 'rgba(234,88,12,0.25)',
  },
}

const Features = () => {
  const [activeIdx, setActiveIdx] = React.useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.feat-card').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0) rotateX(0deg)'
              }, i * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div id="features" ref={sectionRef} className="feat-section flex flex-col items-center my-16 scroll-mt-12 px-4 md:px-8">

        {/* Badge */}
        <div className="feat-badge">
          <Zap width={14} className="stroke-green-600" />
          <span>Simple Process</span>
        </div>

        <Title
          title="Build your resume"
          description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
        />

        {/* Main layout */}
        <div className="feat-layout flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mt-6">

          {/* Image with 3D float */}
          <div className="feat-img-wrap">
            <div className="feat-img-glow" />
            <img
              className="feat-img max-w-2xl w-full relative z-10"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
              alt="Feature preview"
            />
          </div>

          {/* Cards */}
          <div className="feat-cards flex flex-col gap-4 px-4 md:px-0 max-w-md w-full">
            {featureItems.map((item, i) => {
              const c = colorMap[item.color]
              const isActive = activeIdx === i
              return (
                <div
                  key={i}
                  className="feat-card"
                  onMouseEnter={() => setActiveIdx(i)}
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px) rotateX(8deg)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    background: isActive ? c.bg : 'rgba(255,255,255,0.6)',
                    borderColor: isActive ? c.border : 'rgba(200,220,200,0.2)',
                    boxShadow: isActive
                      ? `0 10px 40px ${c.glow}, 0 1px 0 rgba(255,255,255,0.9) inset, 0 0 0 1px ${c.border}`
                      : '0 2px 12px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset',
                  }}
                >
                  {/* Number */}
                  <span className="feat-num" style={{ color: c.num }}>0{i + 1}</span>

                  {/* Icon */}
                  <div className="feat-icon-wrap" style={{ background: isActive ? c.iconBg : 'rgba(240,253,244,0.6)' }}>
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="feat-title">{item.title}</h3>
                    <p className="feat-desc">{item.desc}</p>
                  </div>

                  {/* Active indicator */}
                  {isActive && <div className="feat-active-dot" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        .feat-section {
          position: relative;
          overflow: hidden;
        }
        .feat-section::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          width: 700px; height: 400px;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse, rgba(134,239,172,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .feat-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #16a34a;
          background: rgba(220,252,231,0.7);
          border: 1px solid rgba(134,239,172,0.4);
          border-radius: 100px;
          padding: 6px 18px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 12px rgba(22,163,74,0.1);
          letter-spacing: 0.02em;
        }

        /* Image */
        .feat-img-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feat-img-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse, rgba(134,239,172,0.25) 0%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
        }
        .feat-img {
          filter: drop-shadow(0 20px 50px rgba(22,163,74,0.15));
          animation: imgFloat 5s ease-in-out infinite;
        }
        @keyframes imgFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Cards */
        .feat-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          border-radius: 18px;
          border: 1.5px solid transparent;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        .feat-card:hover {
          transform: translateX(6px) !important;
        }
        .feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%);
          pointer-events: none;
          border-radius: inherit;
        }

        .feat-num {
          position: absolute;
          top: 12px; right: 16px;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
          opacity: 0.5;
          font-variant-numeric: tabular-nums;
        }

        .feat-icon-wrap {
          flex-shrink: 0;
          width: 48px; height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.35s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .feat-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .feat-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.55;
          max-width: 280px;
        }

        .feat-active-dot {
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px; height: 60%;
          background: linear-gradient(to bottom, transparent, currentColor, transparent);
          border-radius: 0 2px 2px 0;
        }
      `}</style>
    </>
  )
}

export default Features