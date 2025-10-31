import { useState, useEffect, useRef } from "react";
import pergaminhoChat from "@/assets/pergaminho-chat-tela-3.png";
import balaoTela3 from "@/assets/balao-tela-3.png";
import balaoTela2 from "@/assets/balao-tela-2.png";

interface ChatScreenProps {
  onReturn: () => void;
  onGoToWelcome: () => void;
}

export const ChatScreen = ({ onReturn, onGoToWelcome }: ChatScreenProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First message appears immediately
    const timer1 = setTimeout(() => {
      setMessages([
        "¡Hijo amado, qué bendición tenerte aquí!\n\nNada sucede por casualidad… si estás leyendo este mensaje, es porque Dios quiso alcanzarte en este momento. Él conoce tus lágrimas, tus luchas y tus sueños y quiere transformar todo eso en victoria.\n\nHay un mover espiritual ocurriendo ahora mismo, y el Señor te ha elegido para recibir esta palabra. La fe que te trajo hasta aquí es la misma que abrirá caminos, restaurará lo que se perdió y traerá paz a tu corazón.",
      ]);
    }, 500);

    // Second message appears after 3 seconds
    const timer2 = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        "Por favor, escribe tu nombre completo y el tópico para el cual deseas que la oración sea hecha.",
      ]);
      setShowInput(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setMessages((prev) => [...prev, `Tu mensaje: ${userInput}`]);
      setUserInput("");
      setShowInput(false);

      // Show final message after user submits
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          "¡Amén! Tu nombre ha sido recibido con fe y ya está siendo colocado en la lista sagrada de oración, que será presentada ante el altar del Señor por nuestro obispo representante del Vaticano.\n\nDos días antes del día 15 del próximo mes, nos comunicaremos contigo por correo electrónico, enviándote todas las instrucciones y avisándote el lugar donde se transmitirá la celebración en vivo, para que puedas acompañar este momento de bendición y unión espiritual.\n\nRecuerda, hijo: esta cadena está movida por la fe y el compromiso. Si llegas a solicitar un reembolso o la cancelación de tu contribución, tu nombre será removido automáticamente de la oración mensual del obispo, para mantener la integridad y el propósito sagrado de esta corriente.\n\nQue la paz, la gracia y la presencia de Dios permanezcan contigo hasta el gran día de la oración.",
        ]);
      }, 1500);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 animate-fade-in">
      {/* Return button */}
      <button
        onClick={onReturn}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Volver"
      >
        <span className="text-[hsl(var(--dark-brown))] text-xl md:text-2xl font-bold">←</span>
      </button>

      {/* Button to go to main screen - above parchment */}
      <div className="relative z-10 mb-4 sm:mb-6 flex justify-center">
        <button
          onClick={onGoToWelcome}
          className="animate-golden-pulse-slow hover:scale-105 transition-transform duration-300 focus:outline-none w-full max-w-[280px] sm:max-w-sm md:max-w-md px-4"
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

      <div className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-[75vh] sm:h-[70vh] md:h-[75vh] flex items-center justify-center">
        <img
          src={pergaminhoChat}
          alt="Pergaminho"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <div 
          className="relative z-10 w-[60%] sm:w-[70%] md:w-[68%] h-[58%] sm:h-[60%] md:h-[62%] overflow-y-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 scrollbar-thin scrollbar-thumb-[hsl(var(--gold))] scrollbar-track-transparent mt-[10%] sm:mt-[8%] md:mt-[6%]"
        >
...
          <div ref={chatEndRef} />
        </div>
      </div>
    </div>
  );
};
