import { useScrollFade } from '../hooks/useScrollFade';

const items = [
  {
    time: '8:20 pm',
    label: 'IGLESIA',
    icon: (
      // Cruz
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="5" y1="8" x2="19" y2="8" />
      </svg>
    ),
  },
  {
    time: '9:45 pm',
    label: 'CIVIL',
    icon: (
      // Papel / documento con líneas
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    time: '10:45 pm',
    label: 'CENA',
    icon: (
      // Tenedor y cuchillo
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <line x1="8" y1="2" x2="8" y2="8" />
        <path d="M6 2v6a2 2 0 0 0 4 0V2" />
        <line x1="8" y1="10" x2="8" y2="22" />
        <line x1="16" y1="2" x2="16" y2="22" />
        <path d="M13 2c0 4 3 5 3 8" />
      </svg>
    ),
  },
  {
    time: '00:00 am',
    label: 'PRIMER BAILE,\nVALS Y BRINDIS',
    icon: (
      // Copa de champagne
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 2h8l-2 8a4 4 0 0 1-4 0L8 2z" />
        <line x1="12" y1="10" x2="12" y2="19" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    time: '00:30 am',
    label: 'FIESTA',
    icon: (
      // Estrella de 6 puntas / destellos tipo celebración
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" />
      </svg>
    ),
  },
  {
    time: '5:30 am',
    label: 'FIN',
    icon: (
      // Luna / amanecer — cierre elegante
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
];

interface TimelineItemProps {
  item: typeof items[0];
  index: number;
  isLeft: boolean;
}

function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  const ref = useScrollFade();
  return (
    <div
      ref={ref}
      className="fade-element relative flex items-center"
      style={{
        transitionDelay: `${index * 0.12}s`,
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingRight: isLeft ? 'calc(50% + 20px)' : undefined,
        paddingLeft: !isLeft ? 'calc(50% + 20px)' : undefined,
        marginBottom: 28,
      }}
    >
      {/* Dot on the line */}
      <div
        className="timeline-dot absolute"
        style={{ left: 'calc(50% - 5px)', top: '50%', transform: 'translateY(-50%)' }}
      />

      <div
        style={{
          textAlign: isLeft ? 'right' : 'left',
          maxWidth: 160,
        }}
      >
        <p className="font-serif font-semibold text-sm" style={{ color: 'var(--text-dark)' }}>
          {item.time}
        </p>
        {item.label.split('\n').map((line, i) => (
          <p key={i} className="font-sans text-xs tracking-wider uppercase" style={{ color: 'var(--text-light)', letterSpacing: '0.12em', lineHeight: 1.5 }}>
            {line}
          </p>
        ))}
      </div>

      {/* Icon bubble */}
      <div
        style={{
          position: 'absolute',
          left: isLeft ? 'calc(50% + 12px)' : 'auto',
          right: !isLeft ? 'calc(50% + 12px)' : 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'var(--cream-dark)',
          border: '1px solid rgba(92,107,61,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--green)',
        }}
      >
        {item.icon}
      </div>
    </div>
  );
}

export default function ItinerarySection() {
  const refTitle = useScrollFade();

  return (
    <section style={{ background: 'var(--cream-dark)', padding: '60px 24px 60px', position: 'relative' }}>

      {/* Wavy top */}
      <div style={{ position: 'absolute', top: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 24" preserveAspectRatio="none" style={{ width: '100%', height: 24, display: 'block' }}>
          <path d="M0,0 Q220,24 440,0 L440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div ref={refTitle} className="fade-element text-center mb-10">
        <h2 className="font-script" style={{ fontSize: 42, color: 'var(--text-dark)' }}>Itinerario de actividades</h2>
        <div style={{ height: 1, background: 'rgba(92,107,61,0.15)', margin: '12px 48px 0' }} />
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', maxWidth: 380, margin: '0 auto' }}>
        {/* Vertical line */}
        <div className="timeline-line" />

        {items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} isLeft={i % 2 === 0} />
        ))}
      </div>

      {/* Wavy bottom */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 24" preserveAspectRatio="none" style={{ width: '100%', height: 24, display: 'block' }}>
          <path d="M0,24 Q220,0 440,24 L440,24 L0,24 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
}
