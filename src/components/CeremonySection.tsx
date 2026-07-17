import { useScrollFade } from '../hooks/useScrollFade';

interface VenueProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  name: string;
  address: string;
  mapSrc: string;
  mapLabel: string;
}

function Venue({ icon, title, time, name, address, mapSrc, mapLabel }: VenueProps) {
  const ref = useScrollFade();
  return (
    <div ref={ref} className="fade-element text-center">
      <div className="flex justify-center mb-3" style={{ color: 'var(--green)', opacity: 0.75 }}>
        {icon}
      </div>
      <h2 className="font-script mb-2" style={{ fontSize: 38, color: 'var(--text-dark)' }}>{title}</h2>
      <div style={{ height: 1, background: 'rgba(92,107,61,0.15)', margin: '0 40px 16px' }} />
      <p className="font-serif text-lg font-semibold" style={{ color: 'var(--text-dark)', letterSpacing: '0.05em' }}>{time}</p>
      <p className="font-sans text-xs tracking-widest uppercase mt-1 mb-1" style={{ color: 'var(--green)', letterSpacing: '0.18em' }}>{name}</p>
      <p className="font-serif italic text-sm mb-5" style={{ color: 'var(--text-light)' }}>{address}</p>

      <div className="map-container mx-2 mb-5">
        <iframe
          title={mapLabel}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(name + ', ' + address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-green"
        style={{ fontSize: '0.7rem' }}
      >
        Ver ubicación
      </a>
    </div>
  );
}

export default function CeremonySection() {
  return (
    <section style={{ background: 'var(--cream)', padding: '64px 24px 56px' }}>

      <Venue
        icon={
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        }
        title="Ceremonia Religiosa"
        time="21:20 hs"
        name="Parroquia San José"
        address="Crespo, Entre Ríos"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.689415713022!2d-60.3035303!3d-32.023525799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b424a03ab80feb%3A0xd52f89faf2f8210a!2sParroquia%20San%20Jos%C3%A9!5e0!3m2!1ses!2sar!4v1782308128924!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" // 👈 PEGAR EMBED DE GOOGLE MAPS ACÁ
        mapLabel="Iglesia San José Crespo"
      />

      <div style={{ height: 1, background: 'rgba(92,107,61,0.12)', margin: '52px 32px' }} />

      <Venue
        icon={
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        }
        title="Recepción"
        time="22:45 hs"
        name="Salón Barcelona"
        address="Crespo, Entre Ríos"
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.9350619027114!2d-60.292074199999995!3d-32.04394909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b423acb08213dd%3A0x8d866a2ba9de2db5!2sBarcelona%20Sal%C3%B3n%20de%20Fiestas%20y%20Eventos!5e0!3m2!1ses!2sar!4v1782308033774!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" // 👈 PEGAR EMBED DE GOOGLE MAPS ACÁ
        mapLabel="Salón Barcelona Crespo"
      />
    </section>
  );
}
