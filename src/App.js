import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import PersonalProductivity from './PersonalProductivity';
import ProfessionalProductivity from './ProfessionalProductivity';
import Chatbot from './Chatbot';
import logo from './assets/images/IA.png';
import headerLogo from './assets/images/IA2.png';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="header-title">Assistente de Produtividade IA</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/personal">Produtividade Pessoal</Link></li>
              <li><Link to="/professional">Produtividade Profissional</Link></li>
              <li><button onClick={() => setIsChatbotOpen(true)}>Assistente de Automação</button></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home setIsChatbotOpen={setIsChatbotOpen} />} />
            <Route path="/personal" element={<PersonalProductivity />} />
            <Route path="/professional" element={<ProfessionalProductivity />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Assistente de Produtividade IA. Todos os direitos reservados.</p>
        </footer>

        <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      </div>
    </Router>
  );
}

function Home({ setIsChatbotOpen }) {
  return (
    <div className="home">
      <section id="intro">
        <h2>Bem-vindo ao seu Assistente de Produtividade IA</h2>
        <p>Escolha uma categoria para começar a melhorar sua produtividade:</p>
      </section>
      <section id="categories">
        <div className="category">
          <h3>Produtividade Pessoal</h3>
          <p>Otimize sua vida pessoal e alcance seus objetivos.</p>
          <Link to="/personal" className="button">Explorar</Link>
        </div>
        <div className="category">
          <h3>Produtividade Profissional</h3>
          <p>Aumente sua eficiência e desempenho no trabalho.</p>
          <Link to="/professional" className="button">Explorar</Link>
        </div>
        <div className="category">
          <h3>Assistente de Automação e Produtividade</h3>
          <p>Descubra como automatizar tarefas e processos.</p>
          <button onClick={() => setIsChatbotOpen(true)} className="button">Abrir Chatbot</button>
        </div>
      </section>
    </div>
  );
}

export default App;