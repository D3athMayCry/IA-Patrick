// api/chat.js
import axios from 'axios';

// A Vercel vai lidar com esta função como um servidor
export default async function handler(req, res) {
  // 1. Apenas permitir requisições POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} Não Permitido`);
  }

  // 2. Pegar a mensagem do corpo da requisição
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida' });
  }

  // 3. Chamar a API da Groq (a chave vem das Variáveis de Ambiente)
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'mixtral-8x7b-32768',
        messages: [
          { role: 'system', content: 'You are a helpful assistant specializing in automation and productivity.' },
          { role: 'user', content: userMessage },
        ],
      },
      {
        headers: {
          // A Vercel pega isso das "Environment Variables" do seu projeto
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // 4. Enviar a resposta de volta para o seu React
    res.status(200).json({ botMessage: response.data.choices[0].message.content });

  } catch (error) {
    console.error('Erro ao chamar a API da Groq:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao processar sua mensagem' });
  }
}