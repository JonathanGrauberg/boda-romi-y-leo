import { useState, useEffect, useRef } from 'react';
import Envelope from './components/Envelope';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import CeremonySection from './components/CeremonySection';
import ItinerarySection from './components/ItinerarySection';
import DressCodeSection from './components/DressCodeSection';
import GiftSection from './components/GiftSection';
import ConfirmationSection from './components/ConfirmationSection';
import RecommendationsSection from './components/RecommendationsSection';

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Estados globales de la música
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Escuchadores del audio global
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnded);
    
    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  // Función mágica: El usuario interactuó con el sobre, ¡el navegador nos deja dar Play!
  function handleOpen() {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Autoplay bloqueado o error: ", err));
    }
    setTimeout(() => setRevealed(true), 200);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a' }}>

      {/* El ÚNICO elemento de audio de toda la app */}
      <audio ref={audioRef} src="/perfect.mp3" preload="auto" />

      {mounted && !revealed && (
        <Envelope onOpen={handleOpen} audioRef={audioRef} />
      )}

      <div
        className={`invitation-wrapper${revealed ? ' revealed' : ''}`}
        style={{ pointerEvents: revealed ? 'auto' : 'none' }}
      >
        <div className="card-container">
          {/* Le pasamos los controles y estados del audio al HeroSection */}
          <HeroSection 
            audioRef={audioRef}
            playing={playing}
            setPlaying={setPlaying}
            progress={progress}
            duration={duration}
            currentTime={currentTime}
          />
          <CountdownSection />
          <CeremonySection />
          <ItinerarySection />
          <DressCodeSection />
          <GiftSection />
          <ConfirmationSection />
          <RecommendationsSection />
        </div>
      </div>
    </div>
  );
}