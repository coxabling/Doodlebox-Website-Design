import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
  isStreaming?: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatInstanceRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (isOpen && !chatInstanceRef.current) {
      initializeChat();
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);

  const initializeChat = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstanceRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Doodlebox Design AI, a sleek and professional assistant. 
          Your goal is to help clients understand that Doodlebox delivers elite, bespoke websites in just 24 hours. 
          Be conversational, slightly witty, and highly professional. 
          Doodlebox specialties: Web Design, UI/UX, Performance Optimization, and SEO. 
          Prices start at $1,500 for a standard bespoke site. 
          Always try to guide the user towards starting a project.`,
        },
      });
      setMessages([{ text: "Hey! I'm the Doodlebox Design AI. Ready to build something legendary in the next 24 hours? What can I help you with?", sender: 'bot' }]);
    } catch (error) {
      console.error("Chat init failed:", error);
      setMessages([{ text: "System glitch. Please refresh or try again later.", sender: 'bot' }]);
    }
  };

  const sendMessage = async () => {
    if (input.trim() === '' || isTyping) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    if (!chatInstanceRef.current) return;

    try {
      // Add an empty message for streaming
      setMessages(prev => [...prev, { text: '', sender: 'bot', isStreaming: true }]);
      
      const streamResponse = await chatInstanceRef.current.sendMessageStream({ message: userMsg });
      
      let fullText = '';
      for await (const chunk of streamResponse) {
        const textChunk = (chunk as GenerateContentResponse).text || '';
        fullText += textChunk;
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          if (lastMsg.sender === 'bot' && lastMsg.isStreaming) {
            lastMsg.text = fullText;
          }
          return newMessages;
        });
      }

      // Finalize the message
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        lastMsg.isStreaming = false;
        return newMessages;
      });

    } catch (error) {
      console.error("Stream failed:", error);
      setMessages(prev => [...prev, { text: "Connection interrupted. Let's try that again.", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] md:w-[420px] h-[600px] glass rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col z-50 overflow-hidden animate-reveal border border-white/10"
      role="dialog"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
          <div>
            <h2 className="text-sm font-black text-light-text tracking-widest uppercase">Design AI</h2>
            <p className="text-[10px] text-brand-primary font-bold uppercase">Online Now</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors text-medium-text">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.sender === 'user' 
                ? 'bg-brand-primary text-dark-bg font-bold shadow-lg shadow-brand-primary/20 rounded-tr-none' 
                : 'bg-white/5 text-light-text border border-white/5 rounded-tl-none'
            }`}>
              {msg.text || (msg.isStreaming && <span className="animate-pulse">Thinking...</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 bg-white/5 border-t border-white/5">
        <div className="flex items-center glass rounded-2xl p-1 px-3 focus-within:ring-2 ring-brand-primary/50 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Describe your vision..."
            className="flex-1 bg-transparent border-none py-3 text-sm text-light-text placeholder-medium-text focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={isTyping || input.trim() === ''}
            className={`p-2 rounded-xl transition-all ${isTyping || input.trim() === '' ? 'text-white/20' : 'text-brand-primary hover:bg-brand-primary hover:text-dark-bg'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;