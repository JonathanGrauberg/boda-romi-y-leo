import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle');

  function handleClick() {
    if (phase !== 'idle') return;
    setPhase('opening');
    
    // El desmontado (onOpen) ocurre más rápido, justo cuando termina el desvanecimiento
    setTimeout(() => {
      setPhase('done');
      onOpen();
    }, 800); 
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // ── EL FONDO VERDE SE DESVANECE CASI AL INSTANTE (0.5s) ──
        background: 'var(--green-dark, #2e3a1f)',
        cursor: phase === 'idle' ? 'pointer' : 'default',
        opacity: phase === 'idle' ? 1 : 0,
        transition: phase === 'opening' ? 'opacity 0.5s ease-out' : 'none',
        pointerEvents: phase === 'done' ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 480,
          height: '100dvh',
          overflow: 'hidden',
        }}
      >

        {/* ── FONDO del sobre ── */}
        <img
          src="/carta/fondo-carta.png"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            userSelect: 'none',
            pointerEvents: 'none',
            // El fondo del sobre se va rápido para revelar la página de abajo
            opacity: phase !== 'idle' ? 0 : 1,
            transition: 'opacity 0.6s ease-out',
          }}
        />

        {/* ── TAPA con sello (Se desliza hacia arriba mientras se desvanece) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '58%',
            zIndex: 10,
            // Desplazamiento vertical hacia arriba
            transform: phase !== 'idle' ? 'translateY(-30%)' : 'translateY(0)',
            opacity: phase !== 'idle' ? 0 : 1,
            // El movimiento dura un poquito más que el fondo para que se note el efecto de "subir"
            transition: 'transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 0.7s ease-out',
          }}
        >
          <img
            src="/carta/tapa-carta.png"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              userSelect: 'none',
              pointerEvents: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* ── Hint "tocá para abrir" ── */}
        {phase === 'idle' && (
          <div
            style={{
              position: 'absolute',
              bottom: 52,
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 20,
              animation: 'fadeInUp 1s ease 0.8s both',
            }}
          >
            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: 10,
                letterSpacing: '0.3em',
                color: 'rgba(247,243,236,0.45)',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Tocá para abrir
            </p>
            <div
              style={{
                width: 32,
                height: 32,
                border: '1px solid rgba(247,243,236,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                animation: 'bounce 2s ease infinite',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(247,243,236,0.4)" strokeWidth="1.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}