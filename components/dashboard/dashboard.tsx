import { useState } from 'react';
import DashboardLink from './dashboardLink';
import DashboardContent from './dashboardContent';

interface CardData {
  title: string;
  description: string;
  icon: string;
}

const Dashboard = () => {
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
    <div className="flex flex-wrap justify-center items-center max-w-screen-lg mx-auto">
      {cardData.map((card) => (
        <div
          className="card relative"
          key={card.title}
          onMouseEnter={() => handleCardHover(card)}
          onMouseLeave={handleCardLeave}
        >
          <DashboardLink
            title={card.title}
            onMouseEnter={() => handleCardHover(card)}
            onMouseLeave={handleCardLeave}
          />
          <div className="card-icon">
            <i className={`fas fa-${card.icon}`}></i>
          </div>
          {hoveredCard && hoveredCard.title === card.title && (
            <DashboardContent title={card.title} cardData={cardData} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
