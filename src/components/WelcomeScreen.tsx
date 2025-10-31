import balaoTela1 from "@/assets/balao-tela-1.png";
import backgroundGif from "@/assets/background.gif";

interface WelcomeScreenProps {
  onContinue: () => void;
}

export const WelcomeScreen = ({ onContinue }: WelcomeScreenProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      {/* Background with blur and overlay */}
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Button with animation */}
      <button
        onClick={onContinue}
        className="relative z-10 animate-golden-pulse-slow hover:scale-105 transition-transform duration-300 focus:outline-none max-w-[90vw] w-full max-w-md md:max-w-lg"
        style={{
          filter: "drop-shadow(0 0 40px rgba(218, 165, 32, 0.9))",
        }}
      >
        <img
          src={balaoTela1}
          alt="Hijo mío, Dios reservó algo especial para ti. Haz clic aquí y descúbrelo."
          className="w-full h-auto"
        />
      </button>
    </div>
  );
};
