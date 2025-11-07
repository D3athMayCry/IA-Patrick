// api/chat.js

// 1. Importa o SDK oficial do Google
import { GoogleGenerativeAI } from "@google/genai";

// 2. Pega a sua chave de API das variáveis da Vercel
const API_KEY = process.env.GEMINI_API_KEY;

// 3. Inicializa o SDK com a sua chave
const genAI = new GoogleGenerativeAI(API_KEY);

// 4. A função principal da Vercel
export default async function handler(req, res) {
  // 5. Verifica se é um método POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} Não Permitido`);
  }

  // 6. Pega a mensagem do usuário
  const { userMessage } = req.body;
  if (!userMessage) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida' });
  }

  // 7. Tenta chamar a API
  try {
    // 8. Pega o modelo. 
    //    Usamos 'gemini-pro' pois é o mais estável e temos certeza que funciona
    //    para testar sua chave.
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 9. Define o "system prompt" (personalidade do bot)
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Você é um assistente prestativo focado em automação e produtividade." }],
        },
        {
          role: "model",
          parts: [{ text: "Entendido! Estou pronto para ajudar com automação e produtividade." }],
        },
      ],
    });

    // 10. Envia a mensagem do usuário para o chat
    const result = await chat.sendMessage(userMessage);
    const response = result.response;
    const botMessage = response.text();
    
    // 11. Envia a resposta do bot de volta para o seu frontend
    res.status(200).json({ botMessage: botMessage });

  } catch (error) {
    // 12. Se der qualquer erro, mostra nos logs da Vercel
    console.error("ERRO AO CHAMAR O GEMINI SDK:", error);
    res.status(500).json({ error: 'Erro ao conectar com a IA do Google' });
  }
}