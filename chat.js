// api/chat.js
import axios from 'axios';

// 1. Pega a sua nova chave de API das variáveis de ambiente da Vercel
const API_KEY = process.env.GEMINI_API_KEY;

// 2. Define a URL da API do Gemini (usando o modelo 'flash', que é rápido e gratuito)
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// 3. A função principal da Vercel
export default async function handler(req, res) {
  // 4. Verifica se é um método POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} Não Permitido`);
  }

  // 5. Pega a mensagem do usuário (do Chatbot.js)
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida' });
  }

  // 6. Formata a mensagem para o padrão do Gemini
  // O Gemini usa "contents" e "parts" em vez de "messages" e "content"
  const payload = {
    contents: [
      {
        parts: [
          {
            text: "Você é um assistente prestativo focado em automação e produtividade."
          }
        ],
        role: "model" // Simulação do 'system'
      },
      {
        parts: [
          {
            text: userMessage
          }
        ],
        role: "user"
      }
    ]
  };

  // 7. Tenta chamar a API do Google
  try {
    const response = await axios.post(
      API_URL,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // 8. Pega a resposta do bot do local correto
    const botMessage = response.data.candidates[0].content.parts[0].text;
    
    // 9. Envia a resposta de volta para o seu Chatbot.js
    res.status(200).json({ botMessage: botMessage });

  } catch (error) {
    // 10. Se der erro, mostra nos logs da Vercel
    console.error("ERRO AO CHAMAR O GEMINI:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao conectar com a IA do Google' });
  }
}