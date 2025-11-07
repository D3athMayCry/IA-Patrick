import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: "mixtral-8x7b-32768",
          messages: [
            { role: "system", content: "You are a helpful assistant specializing in automation and productivity." },
            { role: "user", content: input }
          ],
        },
        {
          headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = { text: response.data.choices[0].message.content, user: false };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message to Groq:', error);
    }
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