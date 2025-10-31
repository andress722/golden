import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to autoplay when component mounts
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay prevented, user interaction needed");
      }
    };
    playAudio();
  }, []);

  const toggleMute = async () => {
    if (audioRef.current) {
      if (!isPlaying) {
        // If not playing, start playing
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      } else {
        // Toggle mute
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <button
        onClick={toggleMute}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:animate-golden-glow cursor-pointer hover:scale-110"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-glow)) 100%)",
        }}
        aria-label={isMuted || !isPlaying ? "Activar sonido" : "Silenciar"}
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--dark-brown))]" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--dark-brown))]" />
        )}
      </button>
      <audio ref={audioRef} loop>
        <source src="/musica-fundo.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};
