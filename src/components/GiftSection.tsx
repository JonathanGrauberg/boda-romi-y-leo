import { useState } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import QRCode from 'react-qr-code';

export default function GiftSection() {
  const ref1 = useScrollFade();
  const ref2 = useScrollFade();
  const [isOpen, setIsOpen] = useState(false);

  const alias = 'CasamientoRomiLeo';
  // Reemplazá este link por la URL real de tu invitación cuando la subas
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '#'; 

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(alias);
      alert('Alias copiado correctamente');
    } catch (error) {
      console.error(error);
    }
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
          <span className="font-serif font-light mb-6" style={{ color: 'white', fontSize: 20 }} >
            ¡Su presencia en nuestro casamiento es el mejor regalo!
          </span>
            <br/>
            Si desean hacernos un obsequio, pueden elegir el que prefieran o ayudarnos a hacer realidad nuestra luna de miel. 
            <br/>
            ¡Cualquier gesto será recibido con muchísimo cariño!
        </p>
      </div>

      <div ref={ref2} className="fade-element delay-2 flex justify-center">
        <div
          style={{
            padding: 20,
            background: 'var(--green-dark)',
            borderRadius: 12,
            border: '1px solid rgba(247,243,236,0.15)',
            display: 'inline-block',
            minWidth: 260,
          }}
        >
          <p className="font-sans text-xs mb-4" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.1em' }}>
            Alias: {alias}
          </p>

          <div
            style={{ 
              background: 'white',
              padding: 12, 
              borderRadius: 8,
              display: 'inline-flex',
            }}
          >
            
            <QRCode value={currentUrl} size={150} />
          </div>

          <p className="font-sans text-xs mt-4" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.1em' }}>
            Escaneá el QR para ver los datos
          </p>

          <button
              className='mt-2 btn-green '
              onClick={copyAlias}
              style={{
                padding: '10px 20px',
                borderRadius: 999,
                border: '1px solid var(--green)',
                background: 'var(--green)',
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '0.85rem',
                width: '100%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}
            >
              Copiar alias
            </button>
        </div>
      </div>

      {/* Wavy bottom */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 24" preserveAspectRatio="none" style={{ width: '100%', height: 24, display: 'block' }}>
          <path d="M0,24 Q220,4 440,24 L440,24 L0,24 Z" fill="var(--cream)" />
        </svg>
      </div>

      {/* MODAL ELEGANTE */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al tocar adentro
            style={{
              background: 'var(--cream)',
              padding: '32px 24px',
              borderRadius: 16,
              maxWidth: 340,
              width: '100%',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
              textAlign: 'center',
              position: 'relative',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: 20,
                color: 'var(--green-dark)',
                cursor: 'pointer',
                opacity: 0.6
              }}
            >
              ✕
            </button>

            <h3 className="font-script" style={{ fontSize: 32, color: 'var(--green-dark)', marginBottom: 8 }}>
              ¡Muchas Gracias!
            </h3>
            
            <p className="font-serif italic text-xs" style={{ color: 'var(--green)', marginBottom: 20 }}>
              Valoramos muchísimo tu colaboración para nuestro gran comienzo.
            </p>

            <div style={{ height: 1, background: 'rgba(0,0,0,0.08)', marginBottom: 20 }} />

            <p className="font-sans text-xs" style={{ color: '#777', letterSpacing: '0.05em', marginBottom: 4 }}>
              ALIAS:
            </p>
            
            <p
              style={{
                color: 'var(--green-dark)',
                fontSize: '1.25rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: 16,
                wordBreak: 'break-word',
              }}
            >
              {alias}
            </p>

            <button
              onClick={copyAlias}
              style={{
                padding: '10px 20px',
                borderRadius: 999,
                border: '1px solid var(--green)',
                background: 'var(--green)',
                color: 'white',
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '0.85rem',
                width: '100%',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}
            >
              Copiar alias
            </button>
          </div>
        </div>
      )}
    </section>
  );
}