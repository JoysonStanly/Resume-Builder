import React from 'react'
import { toast } from 'react-hot-toast'
import { CheckCircle, XCircle, Info, X } from 'lucide-react'

const getVariant = (type) => {
  switch (type) {
    case 'success':
      return {
        icon: <CheckCircle size={18} strokeWidth={2.5} />,
        color: '#16a34a',
        bar: 'linear-gradient(90deg, #16a34a, #4ade80)',
        bg: '#ffffff',
        iconBg: '#dcfce7',
        border: '#e2f5e8',
      }
    case 'error':
      return {
        icon: <XCircle size={18} strokeWidth={2.5} />,
        color: '#dc2626',
        bar: 'linear-gradient(90deg, #dc2626, #f87171)',
        bg: '#ffffff',
        iconBg: '#fee2e2',
        border: '#fde8e8',
      }
    default:
      return {
        icon: <Info size={18} strokeWidth={2.5} />,
        color: '#6b7280',
        bar: 'linear-gradient(90deg, #6b7280, #9ca3af)',
        bg: '#ffffff',
        iconBg: '#f3f4f6',
        border: '#e5e7eb',
      }
  }
}

const CustomToast = ({ toast: t }) => {
  const { icon, color, bar, bg, iconBg, border } = getVariant(t?.type)
  const duration = t?.duration || 3000

  return (
    <div
      style={{
        width: '340px',
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: '14px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        position: 'relative',
        opacity: t?.visible ? 1 : 0,
        transform: t?.visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '4px',
        background: bar,
        borderRadius: '14px 0 0 14px',
      }} />

      {/* Main content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 14px 14px 18px',
      }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '9px',
          background: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          flexShrink: 0,
        }}>
          {icon}
        </div>

        <p style={{
          flex: 1,
          fontSize: '13.5px',
          fontWeight: 500,
          color: '#111827',
          lineHeight: 1.45,
          margin: 0,
          wordBreak: 'break-word',
        }}>
          {t?.message}
        </p>

        <button
          onClick={() => toast.dismiss(t?.id)}
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '7px',
            border: 'none',
            background: 'transparent',
            color: '#9ca3af',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            padding: 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#374151' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#9ca3af' }}
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>

      {/* Timer bar — always runs, never pauses */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0,
        height: '3px',
        width: '100%',
        background: '#f3f4f6',
      }}>
        <div style={{
          height: '100%',
          background: bar,
          borderRadius: '0 2px 2px 0',
          animation: `toastShrink ${duration}ms linear forwards`,
        }} />
      </div>

      <style>{`
        @keyframes toastShrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  )
}

export default CustomToast