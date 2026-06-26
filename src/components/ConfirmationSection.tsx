import { useScrollFade } from '../hooks/useScrollFade';

export default function ConfirmationSection() {
  const ref = useScrollFade();

  return (
    <section style={{ background: 'var(--cream)', padding: '64px 32px 52px', textAlign: 'center' }}>
      <div ref={ref} className="fade-element">

        <div className="flex justify-center mb-4">
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'var(--green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
              <path d="M9 16l2 2 4-4"/>
            </svg>
          </div>
        </div>

        <h2 className="font-script mb-3" style={{ fontSize: 40, color: 'var(--text-dark)' }}>
          Confirmación
        </h2>
        <div style={{ height: 1, background: 'rgba(92,107,61,0.15)', margin: '0 40px 20px' }} />

        <p className="font-serif italic text-sm leading-relaxed mb-2" style={{ color: 'var(--text-mid)', maxWidth: 280, margin: '0 auto 8px' }}>
          <span className="font-serif font-light mb-6" style={{ color: 'var(--green)', fontSize: 20 }}>¡Esperamos verte ese día! </span><br/>
          Te pedimos que confirmes tu asistencia con responsabilidad, ya que cada lugar está preparado especialmente para quienes nos acompañarán.
        </p>
        <span className='text-sm' style={{fontSize: 14, }}>Confirmar antes del:</span>
        <p className="font-serif font-semibold mb-6" style={{ color: 'var(--green)', fontSize: 17 }}>
          18 de Septiembre
        </p>

        <a
          href="https://forms.gle/pbaRzXXCinKRgpRs5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green"
        >
          Confirmar aquí
        </a>
      </div>
    </section>
  );
}
