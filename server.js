// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001; // Porta para o seu backend

// Obtenha sua chave de API de um arquivo .env (MUITO MAIS SEGURO)
// Crie um arquivo chamado .env e adicione a linha:
// GROQ_API_KEY=sua_nova_chave_secreta_aqui
require('dotenv').config();

app.use(cors()); // Permite que o seu frontend (ex: localhost:3000) faça requisições
app.use(express.json()); // Permite que o servidor leia JSON

// Rota para o chatbot
app.post('/api/chat', async (req, res) => {
  const { userMessage } = req.body; // Recebe a mensagem do React

  if (!userMessage) {
    return res.status(400).json({ error: 'Nenhuma mensagem fornecida' });
  }

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
          // A CHAVE FICA SEGURA AQUI, NO SERVIDOR!
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Envia a resposta do bot de volta para o React
    res.json({ botMessage: response.data.choices[0].message.content });

  } catch (error) {
    console.error('Erro ao chamar a API da Groq:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Erro ao processar sua mensagem' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});