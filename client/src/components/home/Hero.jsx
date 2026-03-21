import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { user } = useSelector(state => state.auth)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [logoLoadError, setLogoLoadError] = React.useState({})

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logos = [
    {
      name: 'Instagram',
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    },
    {
      name: 'Framer',
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    },
    {
      name: 'Microsoft',
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'Huawei',
      src: 'https://upload.wikimedia.org/wikipedia/en/0/04/Huawei_Standard_logo.svg',
    },
    {
      name: 'Walmart',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
    },
  ]

  return (
    <>
      <div className="hero-root min-h-screen pb-20 relative overflow-hidden">

        {/* === 3D BACKGROUND SCENE === */}
        <div className="bg-scene">
          {/* Deep gradient base */}
          <div className="bg-base" />
          {/* 3D grid floor */}
          <div className="grid-floor" />
          {/* Floating orbs */}
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />

          {/* Floating particles */}
          {[...Array(14)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
          ))}
        </div>

        {/* === NAVBAR === */}
        <nav className={`hero-nav z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm sticky top-0 transition-all duration-500 ${scrolled ? 'nav-scrolled' : ''}`}>
          <a href="https://prebuiltui.com" className="nav-logo">
            <img src="/logo.svg" alt="logo" className="h-11 w-auto drop-shadow-sm" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            {['Home', 'Features', 'Testimonials', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            {!user && (
              <>
                <Link to='/app?state=register' className="nav-btn-primary hidden md:flex items-center">
                  Get started
                </Link>
                <Link to='/app?state=login' className="nav-btn-ghost hidden md:flex items-center">
                  Login
                </Link>
              </>
            )}
            {user && (
              <Link to='/app' className='nav-btn-primary hidden md:flex items-center'>
                Dashboard
              </Link>
            )}
          </div>

          <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu fixed inset-0 z-[100] flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-all duration-400 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="mobile-menu-bg" />
          {['Home', 'Features', 'Testimonials', 'Contact'].map((item, i) => (
            <a key={i} href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={() => setMenuOpen(false)} className="mobile-close">✕</button>
        </div>

        {/* === HERO CONTENT === */}
        <div className="hero-content relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black pt-8">

          {/* Rating pill */}
          <div className="rating-pill hero-anim" style={{ animationDelay: '0.1s' }}>
            <div className="flex -space-x-3 pr-3">
              {[
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
                'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
                'https://randomuser.me/api/portraits/men/75.jpg',
              ].map((src, i) => (
                <img key={i} src={src} alt="user" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition z-[1]" />
              ))}
            </div>
            <div>
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-transparent fill-green-500">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-gray-600 font-medium">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-headline hero-anim text-5xl md:text-6xl font-bold max-w-5xl text-center mt-6 leading-[1.15] tracking-tight" style={{ animationDelay: '0.2s' }}>
            Land your dream job with{' '}
            <span className="headline-gradient">AI-powered</span>
            {' '}resumes.
          </h1>

          {/* Subtext */}
          <p className="hero-anim max-w-md text-center text-base my-7 text-slate-500 leading-relaxed" style={{ animationDelay: '0.35s' }}>
            Create, edit and download professional resumes with AI-powered assistance.
          </p>

          {/* CTA Buttons */}
          <div className="hero-anim flex items-center gap-4" style={{ animationDelay: '0.5s' }}>
            <Link to='/app' className="cta-primary">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <button className="cta-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              Try demo
            </button>
          </div>

          {/* Trusted brands */}
          <p className="hero-anim py-6 text-slate-400 mt-14 text-xs font-medium uppercase tracking-widest" style={{ animationDelay: '0.65s' }}>
            Trusted by leading brands
          </p>

          <div className="hero-anim flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" style={{ animationDelay: '0.75s' }}>
            {logos.map((logo) => (
              <div key={logo.name} className="h-8 flex items-center">
                {logoLoadError[logo.name] ? (
                  <span className="px-3 py-1 rounded-full border border-emerald-200 bg-white/80 text-[11px] font-semibold tracking-wide text-slate-600 uppercase">
                    {logo.name}
                  </span>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-6 w-auto max-w-[120px] opacity-100 transition-all duration-300 hover:scale-110"
                    onError={() => setLogoLoadError(prev => ({ ...prev, [logo.name]: true }))}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        * { font-family: 'Poppins', sans-serif; }

        /* ---- ROOT ---- */
        .hero-root {
          background: #f0fdf4;
          position: relative;
        }

        /* ---- BG SCENE ---- */
        .bg-scene {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .bg-base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(134,239,172,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 20%, rgba(187,247,208,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 10% 60%, rgba(167,243,208,0.15) 0%, transparent 60%),
            #f0fdf4;
        }

        /* Perspective grid floor */
        .grid-floor {
          position: absolute;
          bottom: -60px;
          left: -20%;
          right: -20%;
          height: 55%;
          background-image:
            linear-gradient(rgba(22,163,74,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.08) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(55deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 80%);
        }

        /* Glowing orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          mix-blend-mode: multiply;
        }
        .orb-1 {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(134,239,172,0.5) 0%, transparent 70%);
          top: -120px; left: 50%;
          transform: translateX(-50%);
          animation: orbFloat1 9s ease-in-out infinite;
        }
        .orb-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(187,247,208,0.6) 0%, transparent 70%);
          top: 10%; right: -80px;
          animation: orbFloat2 12s ease-in-out infinite;
        }
        .orb-3 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%);
          bottom: 20%; left: -60px;
          animation: orbFloat3 10s ease-in-out infinite;
        }
        .orb-4 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(220,252,231,0.8) 0%, transparent 70%);
          bottom: 5%; right: 20%;
          animation: orbFloat1 8s ease-in-out infinite reverse;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50% { transform: translateX(-50%) translateY(-30px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(25px); }
        }



        /* Particles */
        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.5);
          animation: particleDrift 8s linear infinite;
        }
        ${[...Array(14)].map((_, i) => `
          .particle-${i + 1} {
            left: ${5 + i * 7}%;
            top: ${20 + (i % 5) * 15}%;
            width: ${3 + (i % 3) * 2}px;
            height: ${3 + (i % 3) * 2}px;
            opacity: ${0.2 + (i % 4) * 0.15};
            animation-duration: ${6 + (i % 5) * 2}s;
            animation-delay: ${i * 0.4}s;
            background: ${i % 3 === 0 ? 'rgba(74,222,128,0.6)' : i % 3 === 1 ? 'rgba(134,239,172,0.5)' : 'rgba(22,163,74,0.4)'};
          }
        `).join('')}

        @keyframes particleDrift {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-120px) rotate(360deg); opacity: 0; }
        }

        /* ---- NAVBAR ---- */
        .hero-nav {
          position: sticky;
          top: 0;
          background: transparent;
          backdrop-filter: none;
          transition: all 0.4s ease;
        }
        .hero-nav.nav-scrolled {
          background: rgba(240, 253, 244, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 30px rgba(22,163,74,0.1), 0 1px 0 rgba(134,239,172,0.2);
        }

        .nav-link {
          position: relative;
          color: #475569;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          border-radius: 1px;
        }
        .nav-link:hover { color: #16a34a; }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-btn-primary {
          padding: 8px 24px;
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          color: white;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(22,163,74,0.35), 0 1px 0 rgba(255,255,255,0.2) inset;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .nav-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #15803d, #16a34a);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
        }
        .nav-btn-primary:hover::before { opacity: 1; }
        .nav-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 25px rgba(22,163,74,0.45); }
        .nav-btn-primary:active { transform: scale(0.97); }

        .nav-btn-ghost {
          padding: 8px 24px;
          background: rgba(255,255,255,0.7);
          color: #475569;
          border-radius: 100px;
          font-weight: 500;
          font-size: 0.85rem;
          text-decoration: none;
          border: 1px solid rgba(100,200,100,0.25);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .nav-btn-ghost:hover {
          background: rgba(240,253,244,0.9);
          color: #16a34a;
          border-color: rgba(22,163,74,0.3);
          transform: translateY(-1px);
        }

        /* Mobile */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 100;
        }
        .mobile-menu-bg {
          position: absolute;
          inset: 0;
          background: rgba(5, 46, 22, 0.95);
          backdrop-filter: blur(20px);
        }
        .mobile-link {
          position: relative;
          z-index: 1;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #4ade80; }
        .mobile-close {
          position: relative;
          z-index: 1;
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(22,163,74,0.8);
          color: white;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mobile-close:hover { background: #15803d; }

        /* ---- HERO CONTENT ---- */
        .hero-content { position: relative; z-index: 1; }

        /* Entry animation */
        .hero-anim {
          opacity: 0;
          transform: translateY(30px);
          animation: heroReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes heroReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Rating pill */
        .rating-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          padding: 8px 16px 8px 10px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(134,239,172,0.5);
          border-radius: 100px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(22,163,74,0.1), 0 1px 0 rgba(255,255,255,0.9) inset;
        }

        /* Headline */
        .hero-headline {
          color: #0f172a;
          text-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .headline-gradient {
          background: linear-gradient(135deg, #15803d 0%, #16a34a 40%, #22c55e 70%, #4ade80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        .headline-gradient::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #16a34a, #4ade80, transparent);
          border-radius: 2px;
          opacity: 0.4;
        }

        /* CTAs */
        .cta-primary {
          display: flex;
          align-items: center;
          padding: 14px 32px;
          background: linear-gradient(135deg, #15803d 0%, #16a34a 50%, #22c55e 100%);
          color: white;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow:
            0 8px 30px rgba(22,163,74,0.4),
            0 2px 0 rgba(255,255,255,0.2) inset,
            0 -2px 0 rgba(0,0,0,0.1) inset;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .cta-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .cta-primary:hover::before { left: 100%; }
        .cta-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 16px 40px rgba(22,163,74,0.5), 0 2px 0 rgba(255,255,255,0.2) inset;
        }
        .cta-primary:active { transform: scale(0.97); }

        .cta-secondary {
          display: flex;
          align-items: center;
          padding: 13px 28px;
          background: rgba(255,255,255,0.75);
          color: #475569;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1.5px solid rgba(100,180,100,0.3);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9) inset;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-secondary:hover {
          background: rgba(240,253,244,0.9);
          color: #16a34a;
          border-color: rgba(22,163,74,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(22,163,74,0.15);
        }
      `}</style>
    </>
  )
}

export default Hero