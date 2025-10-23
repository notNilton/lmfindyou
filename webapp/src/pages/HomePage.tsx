import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Homepage: React.FC = () => {
  const cardsData = [
    {
      title: "Recurso 1",
      description: "Descrição do primeiro recurso incrível da nossa plataforma.",
      icon: "🚀"
    },
    {
      title: "Recurso 2",
      description: "Descrição do segundo recurso que vai transformar seu trabalho.",
      icon: "💡"
    },
    {
      title: "Recurso 3",
      description: "Descrição do terceiro recurso para maximizar sua produtividade.",
      icon: "⚡"
    },
    {
      title: "Recurso 4",
      description: "Descrição do quarto recurso com tecnologia de ponta.",
      icon: "🔧"
    }
  ];

  return (
    <div className="homepage">
      <Navbar />
      
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Bem-vindo à Nossa Plataforma</h1>
          <p className="hero-subtitle">
            Descubra todos os recursos incríveis que preparamos para você
          </p>
        </div>

        <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;