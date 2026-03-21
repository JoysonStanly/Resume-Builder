import React, { useEffect, useRef } from 'react'

const Banner = () => {
  const bannerRef = useRef(null)

  useEffect(() => {
    const el = bannerRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(-20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <>
      <div
        ref={bannerRef}
        className="banner-3d w-full py-2.5 font-medium text-sm text-center relative overflow-hidden"
      >
        {/* Animated shimmer layer */}
        <div className="banner-shimmer" />
        {/* Subtle grid overlay */}
        <div className="banner-grid" />

        <p className="relative z-10 flex items-center justify-center gap-2 text-green-900">
          <span className="new-badge px-3 py-0.5 rounded-lg text-white mr-1">New</span>
          <span className="banner-text">AI Feature Added</span>
          <span className="pulse-dot" />
        </p>
      </div>

      <style>{`
        .banner-3d {
          background: linear-gradient(90deg,
            #c8ffa7 0%,
            #e8fff5 30%,
            #abff7e 60%,
            #fdfeff 100%
          );
          background-size: 200% 100%;
          animation: bannerSlide 5s linear infinite;
          box-shadow: 0 2px 20px rgba(100, 220, 80, 0.25), 0 1px 0 rgba(255,255,255,0.8) inset;
          border-bottom: 1px solid rgba(134, 239, 100, 0.3);
        }

        @keyframes bannerSlide {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
          100% { background-position: 0% 0%; }
        }

        .banner-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg,
            transparent 40%,
            rgba(255,255,255,0.6) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .banner-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(100,200,80,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,200,80,0.06) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .new-badge {
          background: linear-gradient(135deg, #16a34a, #22c55e);
          box-shadow: 0 2px 8px rgba(22, 163, 74, 0.4), 0 0 0 1px rgba(255,255,255,0.3) inset;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
        }

        @keyframes badgePop {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .banner-text {
          background: linear-gradient(135deg, #14532d, #166534);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .pulse-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #16a34a;
          box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.6);
          animation: pulseRing 1.5s ease-out infinite;
        }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(22, 163, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }
      `}</style>
    </>
  )
}

export default Banner