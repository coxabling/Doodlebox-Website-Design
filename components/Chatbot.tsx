
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatInstanceRef = useRef<Chat | null>(null);

  useEffect(() => {
    // Initialize chat instance only when the chatbot is opened for the first time
    // or when API key might refresh (though not an issue with `process.env.API_KEY`)
    if (isOpen && !chatInstanceRef.current) {
      initializeChat();
    }
  }, [isOpen]);

  // Scroll to bottom of chat messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const initializeChat = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstanceRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: 'You are a friendly and helpful assistant for Doodlebox, a bespoke website design agency. You help users understand services, process, and answer common questions, guiding them towards getting a quote. Keep responses concise and encouraging. Do not provide information outside of Doodlebox services.',
        },
      });
      setMessages([{ text: "Hi there! I'm your Doodlebox assistant. How can I help you get your bespoke website today?", sender: 'bot' }]);
    } catch (error) {
      console.error("Failed to initialize chat:", error);
      setMessages([{ text: "Oops, something went wrong initializing the chat. Please try again later.", sender: 'bot' }]);
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (!chatInstanceRef.current) {
      console.error("Chat instance not initialized.");
      setMessages((prev) => [...prev, { text: "Sorry, the chat is not ready yet. Please try again in a moment.", sender: 'bot' }]);
      setIsLoading(false);
      return;
    }

    try {
      const response: GenerateContentResponse = await chatInstanceRef.current.sendMessage({ message: input });
      const botResponseText = response.text || "I'm sorry, I couldn't generate a response.";
      setMessages((prev) => [...prev, { text: botResponseText, sender: 'bot' }]);
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      setMessages((prev) => [...prev, { text: "I'm having trouble connecting right now. Could you please try again in a moment?", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-20 right-6 w-11/12 md:w-96 h-[500px] bg-dark-card rounded-lg shadow-2xl flex flex-col z-50 border border-gray-700 backdrop-blur-md bg-opacity-90"
      role="dialog"
      aria-labelledby="chatbot-header"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-dark-bg rounded-t-lg">
        <h2 id="chatbot-header" className="text-lg font-bold text-light-text">Doodlebox Assistant</h2>
        <button
          onClick={onClose}
          className="text-medium-text hover:text-light-text transition-colors"
          aria-label="Close chatbot"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-brand-primary text-white ml-auto'
                  : 'bg-gray-700 text-light-text mr-auto'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-gray-700 text-light-text">
              <span className="animate-pulse">Typing...</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-gray-700 bg-dark-bg rounded-b-lg flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask me anything..."
          className="flex-1 p-3 rounded-lg bg-dark-card border border-gray-600 text-light-text placeholder-medium-text focus:outline-none focus:border-brand-primary transition-colors"
          aria-label="Chat input"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || input.trim() === ''}
          className={`ml-3 p-3 rounded-lg ${
            isLoading || input.trim() === ''
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-brand-primary hover:bg-brand-secondary'
          } text-white transition-colors transform hover:scale-105`}
          aria-label="Send message"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d3748; /* dark-card */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00BFFF; /* brand-primary */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1E90FF; /* brand-secondary */
        }
      `}</style>
    </div>
  );
};

export default Chatbot;