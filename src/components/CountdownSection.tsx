import { useState, useEffect } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const WEDDING_DATE = new Date('2026-10-31T20:20:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const adjusted = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(adjusted).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const refTitle = useScrollFade();
  const refCountdown = useScrollFade();
  const refCalendar = useScrollFade();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = buildCalendar(2026, 9); // Octubre 2026 (índice 9)
  const days = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section style={{ background: 'var(--green)', padding: '52px 32px 56px', position: 'relative' }}>

      {/* Wavy top */}
      <div style={{ position: 'absolute', top: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 32" preserveAspectRatio="none" style={{ width: '100%', height: 32, display: 'block' }}>
          <path d="M0,0 Q110,32 220,16 Q330,0 440,24 L440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      {/* Invitation text */}
      <div ref={refTitle} className="fade-element text-center mb-8">
        <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(247,243,236,0.6)' }}>
          Los invitamos a ser parte de uno de los momentos más importantes de nuestras vidas.
          <br/>
          Su presencia hará que este día sea aún más especial.

        </p>
        <div className="my-5">
          <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.3em' }}>
            OCTUBRE
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'rgba(247,243,236,0.6)' }}>SÁBADO</p>
            <p className="font-serif" style={{ color: 'white', fontSize: 52, lineHeight: 1, fontWeight: 300 }}>31</p>
            <p className="font-sans text-xs tracking-widest uppercase" style={{ color: 'rgba(247,243,236,0.6)' }}>2026</p>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(247,243,236,0.15)', margin: '0 20px' }} />
      </div>

      {/* Countdown */}
      <div ref={refCountdown} className="fade-element delay-2 text-center mb-10">
        <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.3em' }}>
          FALTAN
        </p>
        <div className="flex items-end justify-center gap-1">
          {[
            { value: time.days, label: 'Días' },
            { value: time.hours, label: 'Horas' },
            { value: time.minutes, label: 'Min' },
            { value: time.seconds, label: 'Seg' },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-end gap-1">
              {i > 0 && (
                <span className="font-serif pb-3 mx-1" style={{ color: 'rgba(247,243,236,0.4)', fontSize: 24 }}>:</span>
              )}
              <div className="text-center countdown-digit" style={{ animationDelay: `${i * 0.25}s` }}>
                <p className="font-serif tabular-nums" style={{ color: 'white', fontSize: 42, lineHeight: 1, fontWeight: 300, minWidth: 52 }}>
                  {pad(value)}
                </p>
                <p className="font-sans text-xs mt-1" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.1em' }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div ref={refCalendar} className="fade-element delay-3">
        <p className="font-sans text-xs tracking-widest uppercase text-center mb-3" style={{ color: 'rgba(247,243,236,0.5)', letterSpacing: '0.3em' }}>
          EL GRAN DÍA
        </p>
        <p className="font-serif text-center text-sm mb-4" style={{ color: 'rgba(247,243,236,0.7)' }}>
          OCTUBRE 2026
        </p>

        <div className="calendar-grid mx-auto" style={{ maxWidth: 280 }}>
          {days.map(d => (
            <div key={d} className="calendar-day font-sans text-xs font-semibold" style={{ color: 'rgba(247,243,236,0.4)', letterSpacing: '0.05em', fontSize: 9 }}>
              {d}
            </div>
          ))}
          {cells.map((day, i) => (
            <div
              key={i}
              className={`calendar-day font-serif${day === 31 ? ' wedding' : ''}`}
              style={{
                color: day === 31 ? 'var(--green)' : day ? 'rgba(247,243,236,0.65)' : 'transparent',
                fontSize: 12,
              }}
            >
              {day ?? ''}
            </div>
          ))}
        </div>
      </div>

      {/* Wavy bottom */}
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 440 32" preserveAspectRatio="none" style={{ width: '100%', height: 32, display: 'block' }}>
          <path d="M0,32 Q110,0 220,16 Q330,32 440,8 L440,32 L0,32 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
}