import React, { useState } from 'react';
// import axios from 'axios'; // <<< LINHA REMOVIDA

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput('');

    // <<< BLOCO MODIFICADO PARA USAR FETCH >>>
    try {
      // Esta chamada agora usa fetch para o backend /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: input 
        })
      });

      if (!response.ok) {
        // Se o servidor der erro (500, 404, etc.)
        throw new Error('Falha ao conectar com o servidor');
      }
      
      const data = await response.json();
      const botMessage = { text: data.botMessage, user: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Error sending message to backend:', error.message);
      const errorMessage = { text: 'Desculpe, não consegui me conectar ao assistente.', user: false };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
    // <<< FIM DO BLOCO MODIFICADO >>>
  };
  
  if (!isOpen) return null;

  return (
    <div className="chatbot-modal">
      <div className="chatbot-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Assistente de Automação</h2>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Digite sua mensagem..."
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;