import { X } from "lucide-react";
import { useState } from "react";
import backgroundGif from "@/assets/background.gif";
import oracionSalud from "@/assets/oracion-salud.jpg";
import oracionProteccion from "@/assets/oracion-proteccion.png";
import oracionProsperidad from "@/assets/oracion-prosperidad.png";

interface PrayersScreenProps {
  onReturn: () => void;
}

interface Prayer {
  id: string;
  title: string;
  image: string;
  videoUrl?: string; // Para futuro uso
}

const prayers: Prayer[] = [
  {
    id: "salud",
    title: "Para la Salud Física y Mental",
    image: oracionSalud,
  },
  {
    id: "proteccion",
    title: "Para la Protección Espiritual y Contra Brujerías",
    image: oracionProteccion,
  },
  {
    id: "prosperidad",
    title: "Para el Dinero y la Prosperidad",
    image: oracionProsperidad,
  },
];

export const PrayersScreen = ({ onReturn }: PrayersScreenProps) => {
  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);

  const handlePrayerClick = (prayer: Prayer) => {
    // Por ahora, solo mostramos un alert. En el futuro, se puede abrir un modal con video
    alert(`Próximamente: Video de oración para ${prayer.title}`);
    // setSelectedPrayer(prayer);
  };

  return (
    <div className="relative w-screen h-screen overflow-y-auto">
      {/* Background with reduced opacity overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${backgroundGif})`,
          filter: "blur(8px)",
        }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Return button */}
      <button
        onClick={onReturn}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Volver"
      >
        <span className="text-[hsl(var(--dark-brown))] text-xl md:text-2xl font-bold">←</span>
      </button>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-20 pb-12 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12"
          style={{
            color: "hsl(var(--gold))",
            textShadow: "0 0 20px hsl(var(--gold-glow)), 0 0 40px hsl(var(--gold-glow) / 0.5)",
          }}
        >
          ORACIONES SAGRADAS
        </h1>

        {/* Prayer cards grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {prayers.map((prayer) => (
            <button
              key={prayer.id}
              onClick={() => handlePrayerClick(prayer)}
              className="group relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              style={{
                border: "3px solid hsl(var(--gold))",
                boxShadow: "0 0 20px hsl(var(--gold) / 0.3)",
              }}
            >
              <img
                src={prayer.image}
                alt={prayer.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <p className="text-[hsl(var(--gold))] text-center font-bold text-sm md:text-base">
                  Ver Oración
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-[hsl(var(--parchment))] text-center mt-12 max-w-2xl text-sm md:text-base">
          Haz clic en cualquier imagen para acceder a la oración correspondiente y recibir las bendiciones del Señor.
        </p>
      </div>
    </div>
  );
};
