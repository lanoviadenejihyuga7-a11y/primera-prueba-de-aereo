
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat as GenAIChat } from "@google/genai";

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" transform="rotate(30)">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy GLOBAIR Assistant. ¿Cómo puedo ayudarte con tu proceso de exportación aérea desde Perú?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<GenAIChat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && !chat) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const chatSession = ai.chats.create({
              model: 'gemini-2.5-flash',
              config: {
                systemInstruction: "Eres GLOBAIR Assistant, un asistente experto de IA especializado en exportaciones aéreas peruanas. Tu objetivo es proporcionar respuestas claras, precisas y concisas para ayudar a los usuarios a navegar por el proceso de exportación. Responde únicamente en español. Sé amigable y profesional.",
              },
            });
            setChat(chatSession);
        } catch(e) {
            console.error("Error initializing Gemini:", e);
            setMessages(prev => [...prev, {role: 'model', text: 'Lo siento, no pude conectarme con el asistente de IA. Asegúrate de que la clave de API esté configurada.'}]);
        }
    }
  }, [isOpen, chat]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userMessage.text });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      const errorMessage: Message = { role: 'model', text: 'Lo siento, ocurrió un error al procesar tu solicitud. Por favor, inténtalo de nuevo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-st-tropaz text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-50"
        aria-label="Abrir chat de ayuda"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[60vh] bg-catalina-blue rounded-2xl shadow-2xl flex flex-col z-50 font-sans animate-fade-in-up">
          <div className="bg-st-tropaz p-4 rounded-t-2xl">
            <h3 className="font-bold text-white text-lg">GLOBAIR Assistant</h3>
            <p className="text-sm text-polo-blue">Asistente para Exportadores</p>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-xl ${msg.role === 'user' ? 'bg-st-tropaz text-white' : 'bg-pattens-blue text-smoky-black'}`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="max-w-xs px-4 py-2 rounded-xl bg-pattens-blue text-smoky-black">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-polo-blue rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-polo-blue rounded-full animate-pulse [animation-delay:0.1s]"></div>
                        <div className="w-2 h-2 bg-polo-blue rounded-full animate-pulse [animation-delay:0.2s]"></div>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-st-tropaz">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="w-full bg-smoky-black text-white rounded-lg border-polo-blue focus:ring-polo-blue focus:border-polo-blue flex-grow"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-st-tropaz text-white p-3 rounded-full hover:bg-polo-blue disabled:bg-gray-500 transition-colors"
                disabled={isLoading || !input.trim()}
                aria-label="Enviar mensaje"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(1rem); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Chat;
