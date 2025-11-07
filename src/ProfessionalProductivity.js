import React from 'react';
import './ProfessionalProductivity.css';

function ProfessionalProductivity() {
  const professionalProductivityInfo = [
    {
      title: "Automação de Tarefas Repetitivas",
      description: "A IA está revolucionando a automação de processos, permitindo que as empresas economizem tempo e recursos em tarefas rotineiras. Isso libera os profissionais para se concentrarem em trabalhos mais estratégicos e criativos, aumentando a eficiência geral da organização.",
      applications: [
        "Use ferramentas de RPA (Robotic Process Automation) para automatizar fluxos de trabalho complexos.",
        "Implemente chatbots de IA para atendimento ao cliente e suporte interno.",
        "Utilize software de IA para transcrição e análise automática de reuniões."
      ],
      links: [
        { name: "UiPath", url: "https://www.uipath.com" },
        { name: "Zapier", url: "https://zapier.com" },
        { name: "Otter.ai", url: "https://otter.ai" }
      ]
    },
    {
      title: "Análise de Dados e Business Intelligence",
      description: "A IA está transformando a maneira como as empresas analisam dados e tomam decisões. Algoritmos avançados de machine learning podem processar grandes volumes de dados rapidamente, identificando padrões e insights que seriam difíceis de detectar manualmente.",
      applications: [
        "Utilize plataformas de BI com recursos de IA para criar dashboards dinâmicos e previsões precisas.",
        "Implemente algoritmos de machine learning para prever tendências de mercado e comportamento do consumidor.",
        "Use ferramentas de IA para análise de sentimento em feedbacks de clientes e mídias sociais."
      ],
      links: [
        { name: "Tableau", url: "https://www.tableau.com" },
        { name: "Power BI", url: "https://powerbi.microsoft.com" },
        { name: "DataRobot", url: "https://www.datarobot.com" }
      ]
    },
    {
      title: "Desenvolvimento e Teste de Software",
      description: "A IA está acelerando o processo de desenvolvimento de software, desde a geração de código até a detecção de bugs e testes automatizados. Isso permite que as equipes de desenvolvimento entreguem software de alta qualidade mais rapidamente.",
      applications: [
        "Use ferramentas de IA para autocompletar código e sugerir melhorias de qualidade.",
        "Implemente testes automatizados com IA para detectar bugs e vulnerabilidades.",
        "Utilize IA para otimizar a alocação de recursos em projetos de desenvolvimento."
      ],
      links: [
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
        { name: "DeepCode", url: "https://www.deepcode.ai" },
        { name: "Testim", url: "https://www.testim.io" }
      ]
    },
    {
      title: "Gestão de Projetos e Colaboração",
      description: "A IA está melhorando a forma como as equipes colaboram e gerenciam projetos. Ferramentas inteligentes podem prever gargalos, otimizar a alocação de recursos e facilitar a comunicação entre membros da equipe.",
      applications: [
        "Use ferramentas de IA para prever atrasos em projetos e sugerir ações corretivas.",
        "Implemente assistentes virtuais de IA para agendar reuniões e gerenciar tarefas.",
        "Utilize plataformas de colaboração com IA para melhorar a comunicação da equipe."
      ],
      links: [
        { name: "Asana", url: "https://asana.com" },
        { name: "Monday.com", url: "https://monday.com" },
        { name: "Forecast", url: "https://www.forecast.app" }
      ]
    },
    {
      title: "Marketing e Vendas Inteligentes",
      description: "A IA está transformando as estratégias de marketing e vendas, permitindo uma personalização em massa e insights preditivos sobre o comportamento do cliente. Isso resulta em campanhas mais eficazes e uma melhor experiência do cliente.",
      applications: [
        "Use IA para segmentação de clientes e personalização de conteúdo em tempo real.",
        "Implemente chatbots de vendas para qualificação de leads e suporte ao cliente 24/7.",
        "Utilize análise preditiva para otimizar preços e prever tendências de vendas."
      ],
      links: [
        { name: "HubSpot", url: "https://www.hubspot.com" },
        { name: "Salesforce Einstein", url: "https://www.salesforce.com/products/einstein/overview/" },
        { name: "Adobe Sensei", url: "https://www.adobe.com/sensei.html" }
      ]
    }
  ];

  return (
    <div className="professional-productivity">
      <h1>IA na Produtividade Profissional</h1>
      {professionalProductivityInfo.map((info, index) => (
        <div key={index} className="info-item">
          <h2>{info.title}</h2>
          <p>{info.description}</p>
          <h3>Aplicações Práticas:</h3>
          <ul>
            {info.applications.map((app, appIndex) => (
              <li key={appIndex}>{app}</li>
            ))}
          </ul>
          <h3>Ferramentas Recomendadas:</h3>
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

export default ProfessionalProductivity;