import { useState } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function GiftSection() {
  const ref1 = useScrollFade();
  const ref2 = useScrollFade();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const alias = 'CasamientoRomiLeo';

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(alias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = async () => {
    setIsOpen(true);
    await copyAlias();
  };

  return (
    <section style={{ background: 'var(--green)', padding: '60px 32px 64px', textAlign: 'center', position: 'relative' }}>

      {/* Wavy top */}
      <div style={{ position: 'absolute', top: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 24" preserveAspectRatio="none" style={{ width: '100%', height: 24, display: 'block' }}>
          <path d="M0,0 Q110,24 220,12 Q330,0 440,20 L440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div ref={ref1} className="fade-element">
        <div className="flex justify-center mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(247,243,236,0.7)" strokeWidth="1">
            <polyline points="20 12 20 22 4 22 4 12"/>
            <rect x="2" y="7" width="20" height="5"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
        </div>

        <h2 className="font-script mb-3" style={{ fontSize: 40, color: 'white' }}>
          Sugerencia de regalo
        </h2>
        <div style={{ height: 1, background: 'rgba(247,243,236,0.15)', margin: '0 40px 20px' }} />

        <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,236,0.8)', maxWidth: 280, margin: '0 auto 28px' }}>
          <span className="font-serif font-light mb-6" style={{ color: 'white', fontSize: 20 }}>
            ¡Su presencia en nuestro casamiento es el mejor regalo!
          </span>
          <br/><br/>
          Si desean hacernos un obsequio, pueden ayudarnos a hacer realidad nuestra luna de miel.
        </p>
      </div>

      <div ref={ref2} className="fade-element delay-2 flex justify-center">
        <button
          onClick={handleOpen}
          style={{
            padding: '14px 36px',
            borderRadius: 999,
            border: '1px solid rgba(247,243,236,0.4)',
            background: 'transparent',
            color: 'rgba(247,243,236,0.9)',
            fontFamily: 'inherit',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(247,243,236,0.1)';
            e.currentTarget.style.borderColor = 'rgba(247,243,236,0.7)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(247,243,236,0.4)';
          }}
        >
          Enviar un regalo
        </button>
      </div>

      {/* Wavy bottom */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 24" preserveAspectRatio="none" style={{ width: '100%', height: 24, display: 'block' }}>
          <path d="M0,24 Q220,4 440,24 L440,24 L0,24 Z" fill="var(--cream)" />
        </svg>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 20,
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--cream)',
              padding: '40px 28px 32px',
              borderRadius: 16,
              maxWidth: 320,
              width: '100%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              textAlign: 'center',
              position: 'relative',
              animation: 'slideUp 0.3s cubic-bezier(0.2,0,0,1)',
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: 14,
                right: 18,
                background: 'none',
                border: 'none',
                fontSize: 18,
                color: 'var(--green)',
                cursor: 'pointer',
                opacity: 0.5,
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {/* Icono corazón */}
            <div className="flex justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>

            <h3 className="font-script" style={{ fontSize: 34, color: 'var(--green-dark)', marginBottom: 6 }}>
              ¡Gracias de corazón!
            </h3>

            <p className="font-serif italic text-xs leading-relaxed" style={{ color: 'var(--text-mid)', marginBottom: 20, maxWidth: 240, margin: '0 auto 20px' }}>
              Cada gesto suma un recuerdo más a esta historia que estamos escribiendo juntos.
            </p>

            <div style={{ height: 1, background: 'rgba(92,107,61,0.12)', marginBottom: 20 }} />

            <p className="font-sans text-xs uppercase tracking-widest" style={{ color: 'var(--text-light)', marginBottom: 8, letterSpacing: '0.2em' }}>
              Nuestro Alias
            </p>

            <p style={{
              color: 'var(--green-dark)',
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: 20,
              wordBreak: 'break-word',
            }}>
              {alias}
            </p>

            {/* Botón copiar con feedback */}
            <button
              onClick={copyAlias}
              style={{
                padding: '12px 20px',
                borderRadius: 999,
                border: '1px solid var(--green)',
                background: copied ? 'var(--green)' : 'transparent',
                color: copied ? 'white' : 'var(--green)',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                width: '100%',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  ¡Alias copiado!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  Copiar alias
                </>
              )}
            </button>

            <p className="font-sans text-xs mt-4" style={{ color: 'var(--text-light)', opacity: 0.6 }}>
              Tocá fuera del recuadro para cerrar
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}