// Dashboard.tsx
import { useState } from 'react';
import DashboardLink from '../dashboardcomponents/dashboardLink';
import DashboardContent from '../dashboardcomponents/dashboardContent';
import { useRouter } from 'next/router';

interface CardData {
  title: string;
  description: string;
  icon: string;
}

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState<CardData | null>(null);
  const router = useRouter();

  const handleCardHover = (card: CardData) => {
    setHoveredCard(card);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (card: CardData) => {
    const apiEndpoint = card.title.toLowerCase().replace(/\s/g, '_');
    router.push(`/${apiEndpoint}`);
  };

  const cardData: CardData[] = [
    {
      title: 'User Groups',
      description: 'Manage user group accounts and permissions.',
      icon: 'user',
    },
    {
      title: 'Users',
      description: 'Manage users under different groups.',
      icon: 'user',
    },
    {
      title: 'Charge Point',
      description: 'Track website traffic and performance.',
      icon: 'chart-bar',
    },
    {
      title: 'Charge Point Locations',
      description: 'Ensure website security and control access to sensitive data.',
      icon: 'lock',
    },
    {
      title: 'Charge Point Location Ownerships',
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
            onClick={() => handleCardClick(card)}
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
