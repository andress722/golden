import { useState } from "react";
import backgroundGif from "@/assets/background.gif";
import balaoTela1 from "@/assets/balao-tela-1.png";
import balaoTela2 from "@/assets/balao-tela-2.png";
import pergaminhoTela2 from "@/assets/pergaminho-texto-tela-2.png";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ChatScreen } from "@/components/ChatScreen";
import { MainScreen } from "@/components/MainScreen";
import { PrayersScreen } from "@/components/PrayersScreen";
import { WelcomeScreen } from "@/components/WelcomeScreen";

type Screen = "welcome" | "main" | "screen1" | "screen2" | "screen3" | "prayers";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTo = (screen: Screen) => {
    if (screen === "welcome" || screen === "main" || screen === "prayers" || screen === "screen3") {
      // No transition for these screens
      setCurrentScreen(screen);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScreen(screen);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden">
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
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Audio Player */}
      <AudioPlayer />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {/* Welcome Screen */}
        {currentScreen === "welcome" && (
          <WelcomeScreen onContinue={() => transitionTo("screen2")} />
        )}

        {/* Main Screen */}
        {currentScreen === "main" && (
          <MainScreen
            onNavigateToChat={() => transitionTo("screen3")}
            onNavigateToPrayers={() => transitionTo("prayers")}
          />
        )}

        {/* Prayers Screen */}
        {currentScreen === "prayers" && (
          <PrayersScreen onReturn={() => transitionTo("main")} />
        )}

        {/* Screen 1 */}
        {currentScreen === "screen1" && (
          <div
            className={`absolute inset-0 flex items-center justify-center p-4 ${
              isTransitioning ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            <button
              onClick={() => transitionTo("screen2")}
              className="animate-golden-pulse hover:scale-105 transition-transform duration-300 focus:outline-none max-w-[90vw]"
            >
              <img
                src={balaoTela1}
                alt="Hijo mío, Dios reservó algo especial para ti"
                className="w-full max-w-md md:max-w-lg h-auto"
              />
            </button>
          </div>
        )}

        {/* Screen 2 */}
        {currentScreen === "screen2" && (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8 ${
              isTransitioning ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
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
            
            {/* Return button */}
            <button
              onClick={() => transitionTo("welcome")}
              className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] flex items-center justify-center hover:scale-110 transition-transform duration-300"
              aria-label="Volver"
            >
              <span className="text-[hsl(var(--dark-brown))] text-xl md:text-2xl font-bold">←</span>
            </button>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full">
              <img
                src={pergaminhoTela2}
                alt="Tu fe te ha traído hasta aquí"
                className="w-full max-w-sm md:max-w-2xl lg:max-w-3xl h-auto px-4"
              />
              <button
                onClick={() => transitionTo("screen3")}
                className="animate-golden-pulse-slow hover:scale-105 transition-transform duration-300 focus:outline-none w-full max-w-sm md:max-w-md lg:max-w-lg px-4"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(218, 165, 32, 0.9))",
                }}
              >
                <img
                  src={balaoTela2}
                  alt="Haz clic aquí y forma parte de esta cadena de oración"
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>
        )}

        {/* Screen 3 */}
        {currentScreen === "screen3" && !isTransitioning && (
          <ChatScreen 
            onReturn={() => transitionTo("screen2")} 
            onGoToWelcome={() => transitionTo("main")}
          />
        )}
      </div>
    </main>
  );
};

export default Index;
