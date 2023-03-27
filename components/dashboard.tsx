import { useState } from 'react';

interface CardData {
  title: string;
  description: string;
  icon: string;
}

const HoverCards = () => {
  const [hoveredCard, setHoveredCard] = useState<CardData | null>(null);

  const handleCardHover = (card: CardData) => {
    setHoveredCard(card);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cardData: CardData[] = [
    {
      title: 'User management',
      description: 'Manage user accounts and permissions.',
      icon: 'user',
    },
    {
      title: 'Content management',
      description: 'Manage website content and assets.',
      icon: 'file',
    },
    {
      title: 'Analytics and reporting',
      description: 'Track website traffic and performance.',
      icon: 'chart-bar',
    },
    {
      title: 'Security and access control',
      description: 'Ensure website security and control access to sensitive data.',
      icon: 'lock',
    },
    {
      title: 'Integration with other systems',
      description: 'Connect your website to other systems and APIs.',
      icon: 'link',
    },
    {
      title: 'Customization',
      description: "Customize your website's look and feel.",
      icon: 'palette',
    },
    {
      title: 'Support and documentation',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div
          className="card"
          key={card.title}
          onMouseEnter={() => handleCardHover(card)}
          onMouseLeave={handleCardLeave}
        >
          <div className="card-icon">
            <i className={`fas fa-${card.icon}`}></i>
          </div>
          <div className="card-title">{card.title}</div>
          {hoveredCard && hoveredCard.title === card.title && (
            <div className="card-description">{card.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverCards;
