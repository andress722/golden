import { MessageCircle, X } from "lucide-react";
import backgroundGif from "@/assets/background.gif";
import santoImage from "@/assets/santo.png";
import envelopeIcon from "@/assets/envelope.png";

interface MainScreenProps {
  onNavigateToChat: () => void;
  onNavigateToPrayers: () => void;
  hasNewMessages?: boolean;
}

export const MainScreen = ({ 
  onNavigateToChat, 
  onNavigateToPrayers,
  hasNewMessages = true 
}: MainScreenProps) => {
  const handleSupportClick = () => {
    window.open("https://forms.gle/HaeqCG7ZBBb5rkHg7", "_blank");
  };

  return (
      <div className="container px-4 sm:px-6 lg:px-8">
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background with reduced opacity overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          filter: "blur(8px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Message icon with notification */}
      <button
        onClick={onNavigateToChat}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 relative"
        aria-label="Ver mensajes"
      >
        <img 
          src={envelopeIcon} 
          alt="Mensajes" 
          className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
        />
        {hasNewMessages && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background animate-pulse" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Saint image */}
        <div className="mb-6 md:mb-8">
          <img
            src={santoImage}
            alt="San Benito"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
          />
        </div>

        {/* Main title with glowing effect */}
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-2 md:mb-4"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-glow) / 0.5)",
          }}
        >
          ALGO DIVINO ESTÁ A
        </h1>
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-glow) / 0.5)",
          }}
        >
          PUNTO DE SUCEDER
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[hsl(var(--parchment))] text-center mb-2 max-w-md">
          HAZ CLIC EN EL BOTÓN DE ABAJO PARA
        </p>
        <p className="text-base md:text-lg text-[hsl(var(--parchment))] text-center mb-4 max-w-md">
          ACCEDER A LAS ORACIONES
        </p>

        {/* Animated arrows */}
        <div className="flex gap-4 mb-4">
          <span 
            className="text-[hsl(var(--gold))] text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
          <span 
            className="text-[hsl(var(--gold))] text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0.2s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
          <span 
            className="text-[hsl(var(--gold))] text-4xl animate-arrow-bounce"
            style={{ 
              animationDelay: "0.4s",
              textShadow: "0 0 10px hsl(var(--gold-glow))"
            }}
          >
            ↓
          </span>
        </div>

        {/* Prayers button */}
        <button
          onClick={onNavigateToPrayers}
          className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] text-[hsl(var(--dark-brown))] px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold mb-4 md:mb-6 hover:scale-105 transition-transform duration-300 shadow-lg animate-gentle-glow"
          style={{
            boxShadow: "0 0 20px hsl(var(--gold) / 0.5), 0 0 40px hsl(var(--gold-glow) / 0.3)",
            border: "2px solid hsl(var(--gold))"
          }}
        >
          ACCEDER A LAS ORACIONES
        </button>

        {/* Small update text */}
        <p className="text-xs md:text-sm text-[hsl(var(--parchment))] text-center mb-6 md:mb-8 max-w-md">
          CADA MES, LAS ORACIONES SE ACTUALIZARÁN, ¡NO TE LAS PIERDAS!
        </p>

        {/* Support button */}
        <button
          onClick={handleSupportClick}
          className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] text-[hsl(var(--dark-brown))] px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
          style={{
            boxShadow: "0 0 20px hsl(var(--gold) / 0.5), 0 0 40px hsl(var(--gold-glow) / 0.3)",
            border: "2px solid hsl(var(--gold))"
          }}
        >
          QUIERO SOPORTE / REEMBOLSO
        </button>
      </div>
    </div>
    </div>
  );
};
