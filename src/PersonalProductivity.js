import React from 'react';
import './PersonalProductivity.css';

function PersonalProductivity() {
  const personalProductivityInfo = [
    {
      title: "Lazer e Entretenimento",
      description: "A IA está transformando a forma como consumimos entretenimento, oferecendo recomendações personalizadas e experiências imersivas. Algoritmos de aprendizado de máquina analisam seus hábitos de visualização e escuta para sugerir conteúdo relevante, enquanto assistentes de IA podem ajudar a descobrir novas músicas, filmes e séries que se alinham com seus gostos.",
      applications: [
        "Utilize o ChatGPT para obter recomendações personalizadas de filmes e séries baseadas em seus interesses.",
        "Experimente o Spotify AI DJ para descobrir novas músicas e criar playlists personalizadas.",
        "Use o Midjourney ou DALL-E para gerar arte e imagens únicas para seus projetos pessoais."
      ],
      links: [
        { name: "Chippu", url: "https://chippu.com.br" },
        { name: "Soundiiz", url: "https://soundiiz.com" },
        { name: "AI Dungeon", url: "https://play.aidungeon.io" }
      ]
    },
    {
      title: "Saúde e Bem-estar",
      description: "A IA está revolucionando o cuidado pessoal, oferecendo insights personalizados sobre saúde e bem-estar. Aplicativos de IA podem monitorar seus hábitos, sugerir melhorias na dieta e rotina de exercícios, e até mesmo detectar potenciais problemas de saúde precocemente.",
      applications: [
        "Use wearables com IA integrada para monitorar sua saúde e receber recomendações personalizadas.",
        "Experimente aplicativos de meditação guiada por IA para melhorar seu bem-estar mental.",
        "Utilize assistentes de IA para planejar refeições saudáveis e controlar sua dieta."
      ],
      links: [
        { name: "Ada Health", url: "https://ada.com" },
        { name: "Lark", url: "https://www.lark.com" },
        { name: "Replika", url: "https://replika.ai" }
      ]
    },
    {
      title: "Gestão Financeira Pessoal",
      description: "A IA está tornando a gestão financeira pessoal mais acessível e eficiente. Algoritmos inteligentes podem analisar seus hábitos de gastos, oferecer conselhos personalizados de investimento e até mesmo prever tendências futuras para ajudar no planejamento financeiro de longo prazo.",
      applications: [
        "Use aplicativos de IA para rastrear seus gastos e receber dicas de economia personalizadas.",
        "Experimente robôs-conselheiros para obter recomendações de investimento baseadas em seu perfil de risco.",
        "Utilize chatbots de IA para esclarecer dúvidas sobre finanças e impostos."
      ],
      links: [
        { name: "Mint", url: "https://mint.intuit.com" },
        { name: "Wealthfront", url: "https://www.wealthfront.com" },
        { name: "Charlie", url: "https://www.hicharlie.co" }
      ]
    },
    {
      title: "Aprendizado e Desenvolvimento Pessoal",
      description: "A IA está transformando a educação e o desenvolvimento pessoal, oferecendo experiências de aprendizado personalizadas e adaptativas. Plataformas de IA podem identificar suas áreas de melhoria, sugerir recursos relevantes e adaptar o ritmo de aprendizado às suas necessidades individuais.",
      applications: [
        "Use plataformas de aprendizado de idiomas com IA para praticar conversação e receber feedback em tempo real.",
        "Experimente tutores virtuais de IA para receber assistência personalizada em diferentes disciplinas.",
        "Utilize ferramentas de IA para melhorar suas habilidades de escrita e comunicação."
      ],
      links: [
        { name: "Duolingo", url: "https://www.duolingo.com" },
        { name: "Coursera", url: "https://www.coursera.org" },
        { name: "Grammarly", url: "https://www.grammarly.com" }
      ]
    }
  ];

  return (
    <div className="personal-productivity">
      <h1>IA no Cotidiano Pessoal</h1>
      {personalProductivityInfo.map((info, index) => (
        <div key={index} className="info-item">
          <h2>{info.title}</h2>
          <p>{info.description}</p>
          <h3>Aplicações Práticas:</h3>
          <ul>
            {info.applications.map((app, appIndex) => (
              <li key={appIndex}>{app}</li>
            ))}
          </ul>
          <h3>Links Úteis:</h3>
          <div className="links">
            {info.links.map((link, linkIndex) => (
              <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonalProductivity;