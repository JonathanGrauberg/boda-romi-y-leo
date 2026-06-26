import { useScrollFade } from '../hooks/useScrollFade';

export default function DressCodeSection() {
  const ref = useScrollFade();
  const ref2 = useScrollFade();
  const ref3 = useScrollFade();

  return (
    <section style={{ background: 'var(--cream)', padding: '64px 32px 60px', textAlign: 'center' }}>

      <div ref={ref} className="fade-element">
        <h2 className="font-script mb-2" style={{ fontSize: 42, color: 'var(--text-dark)' }}>
          Código de vestimenta
        </h2>
        <p className="font-serif text-lg font-medium mb-3" style={{ color: 'var(--green)' }}>
          Elegante / Formal
        </p>
        <div style={{ height: 1, background: 'rgba(92,107,61,0.15)', margin: '0 40px 24px' }} />
      </div>

      

      <div ref={ref3} className="fade-element delay-3">
        <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'var(--text-mid)', maxWidth: 280, margin: '0 auto 12px' }}>
          Con cariño les pedimos evitar prendas en color blanco y tonos similares
        </p>

        <div className="flex items-center justify-center gap-3 mt-6">
          <div
            className="rounded-full"
            style={{ width: 32, height: 32, background: '#f0ebe0', border: '2px solid rgba(92,107,61,0.3)' }}
          />
          <span className="font-sans text-xs" style={{ color: 'var(--text-light)' }}>NO</span>
          <div
            className="rounded-full"
            style={{ width: 32, height: 32, background: '#f9f7f2', border: '2px solid rgba(92,107,61,0.3)' }}
          />
          <span className="font-sans text-xs" style={{ color: 'var(--text-light)' }}>Blanco / Marfil / Champagne</span>
        </div>
      </div>
    </section>
  );
}
