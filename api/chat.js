// api/chat.js

// 1. Pega a sua nova chave de API das variáveis de ambiente da Vercel
const API_KEY = process.env.GEMINI_API_KEY;

// 2. Define a URL da API do Gemini
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

  // 7. Tenta chamar a API do Google usando fetch (sem axios)
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Converte o payload em JSON
    });

    // 8. Pega a resposta
    const data = await response.json();

    // 8b. Verifica se o Google retornou um erro
    if (!response.ok || !data.candidates) {
      console.error('ERRO AO CHAMAR O GEMINI:', data);
      return res.status(500).json({ error: 'Erro nos dados recebidos da IA' });
    }

    // 9. Pega a resposta do bot
    const botMessage = data.candidates[0].content.parts[0].text;

    // 10. Envia de volta para o seu Chatbot.js
    res.status(200).json({ botMessage: botMessage });

  } catch (error) {
    // 11. Se der erro de rede ou JSON
    console.error('ERRO GERAL NA FUNÇÃO:', error.message);
    res.status(500).json({ error: 'Erro ao conectar com a IA do Google' });
  }
}