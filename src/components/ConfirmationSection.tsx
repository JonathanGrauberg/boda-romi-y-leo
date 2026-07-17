//src\components\ConfirmationSection.tsx
import { useScrollFade } from '../hooks/useScrollFade';

type Props = {
  confirmationDate: string;
  formUrl: string;
};

export default function ConfirmationSection({
  confirmationDate,
  formUrl,
}: Props) {
  const ref = useScrollFade();

  function addToCalendar() {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'DTSTART:20261031T202000',
      'DTEND:20261101T060000',
      'SUMMARY:Casamiento de R & L 💍',
      'DESCRIPTION:¡Estamos muy felices de que nos acompañes en este día tan especial!',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'casamiento-r-y-l.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

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
          <span className="font-serif font-light mb-6" style={{ color: 'var(--green)', fontSize: 20 }}>
            ¡Esperamos verte ese día!
          </span>
          <br/>
          Te pedimos que confirmes tu asistencia con responsabilidad, ya que cada lugar está preparado especialmente para quienes nos acompañarán.
        </p>

        <span className='text-sm' style={{ fontSize: 14 }}>Confirmar antes del:</span>
        <p className="font-serif font-semibold mb-6" style={{ color: 'var(--green)', fontSize: 17 }}>
          {confirmationDate}  
        </p>

        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green"
        >
          Confirmar aquí
        </a>

        {/* Divisor */}
        <div style={{ height: 1, background: 'rgba(92,107,61,0.1)', margin: '36px 40px 28px' }} />

        {/* Agregar al calendario */}
        <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'var(--text-light)', maxWidth: 260, margin: '0 auto 20px' }}>
          Para que la emoción del día no te haga olvidar la fecha, guardala en tu calendario con un toque.
        </p>

        <button
          onClick={addToCalendar}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 28px',
            borderRadius: 999,
            border: '1px solid rgba(92,107,61,0.35)',
            background: 'transparent',
            color: 'var(--green)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--green)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--green)';
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <line x1="12" y1="15" x2="12" y2="19"/>
            <line x1="10" y1="17" x2="14" y2="17"/>
          </svg>
          Guardar en mi calendario
        </button>

      </div>
    </section>
  );
}