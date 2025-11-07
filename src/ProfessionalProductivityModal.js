import React from 'react';
import './ProfessionalProductivityModal.css';

function ProfessionalProductivityModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const productivityInfo = [
    {
      title: "Automação de Tarefas Repetitivas",
      description: "A automação de tarefas repetitivas com IA pode aumentar a eficiência e reduzir erros humanos. Ferramentas como Zapier e IFTTT permitem a integração de diferentes aplicativos e serviços, automatizando fluxos de trabalho sem a necessidade de intervenção manual. Isso não só economiza tempo, mas também permite que os profissionais se concentrem em tarefas mais estratégicas e criativas. Além disso, a automação pode ser personalizada para atender às necessidades específicas de cada negócio, garantindo que as operações sejam realizadas de maneira consistente e eficiente.",
      links: { "Zapier": "https://zapier.com", "IFTTT": "https://ifttt.com" }
    },
    {
      title: "Assistentes Virtuais",
      description: "Assistentes virtuais como Alexa e Google Assistant ajudam na organização e na execução de tarefas diárias. Eles podem gerenciar agendas, enviar lembretes, controlar dispositivos inteligentes e até mesmo realizar compras online. Esses assistentes utilizam processamento de linguagem natural para entender e responder a comandos de voz, tornando a interação com a tecnologia mais intuitiva e acessível. Com o avanço da IA, esses assistentes estão se tornando cada vez mais sofisticados, capazes de aprender com as interações passadas e oferecer sugestões personalizadas.",
      links: { "Alexa": "https://www.amazon.com/alexa", "Google Assistant": "https://assistant.google.com" }
    },
    {
      title: "Análise de Dados Rápida",
      description: "A IA pode processar grandes volumes de dados rapidamente, oferecendo insights valiosos que podem orientar decisões de negócios. Ferramentas como Tableau e Power BI utilizam algoritmos de aprendizado de máquina para identificar padrões e tendências nos dados, permitindo que as empresas tomem decisões informadas e baseadas em dados. Isso é especialmente útil em setores como finanças, marketing e saúde, onde a análise de dados pode revelar oportunidades de mercado, otimizar campanhas e melhorar os resultados dos pacientes.",
      links: { "Tableau": "https://www.tableau.com", "Power BI": "https://powerbi.microsoft.com" }
    },
    {
      title: "IA para Programação",
      description: "Ferramentas de IA como GitHub Copilot e Tabnine estão revolucionando a maneira como os desenvolvedores escrevem código. Essas ferramentas podem sugerir trechos de código, detectar erros e até mesmo ajudar no aprendizado de novas linguagens de programação. Ao automatizar tarefas repetitivas e fornecer assistência em tempo real, a IA permite que os desenvolvedores se concentrem em resolver problemas complexos e inovar em seus projetos. Além disso, a IA pode ajudar a garantir a qualidade do código, identificando vulnerabilidades de segurança e sugerindo melhorias.",
      links: { "GitHub Copilot": "https://github.com/features/copilot", "Tabnine": "https://www.tabnine.com" }
    },
    {
      title: "Gerenciamento de Projetos",
      description: "A IA pode otimizar o gerenciamento de projetos, alocando recursos de forma eficiente e prevendo possíveis atrasos. Plataformas como Monday.com e Asana utilizam algoritmos de IA para priorizar tarefas, monitorar o progresso e fornecer relatórios detalhados. Isso permite que os gerentes de projeto tenham uma visão clara do status de seus projetos e tomem decisões proativas para garantir o sucesso. Além disso, a IA pode facilitar a colaboração entre equipes, integrando-se a outras ferramentas de comunicação e produtividade.",
      links: { "Monday.com": "https://monday.com", "Asana": "https://asana.com" }
    }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Produtividade Profissional com IA</h2>
        {productivityInfo.map((item, index) => (
          <div key={index} className="info-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="links">
              {Object.entries(item.links).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>
              ))}
            </div>
          </div>
        ))}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default ProfessionalProductivityModal;