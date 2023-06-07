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
      title: 'Auth Tokens',
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
      title: 'Charge Point Port',
      description: "Customize your website's look and feel.",
      icon: 'palette',
    },
    {
      title: 'Charge Point Port Error Code Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Charge Point Port Meter Values',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Charge Point Port Prices',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Charge Point Port Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Charge Point Port Status Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Faults',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Fault Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'TopUp',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'TopUp Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'TopUp Status Type',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'TopUp Type',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'User',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'User Groups',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'User Group Users',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'User Group User RFID',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Orders',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Order Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Order Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Order Status Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Order Status Reason Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Penalties',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Penalty Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Penalty Charges',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Penalty Status Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Reservations',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Reservations Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Reservations Status Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Reservations Order Relations',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Wallet',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Wallet Transaction Types',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Withdrawal',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Withdrawal Status',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Withdrawal Type',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Withdrawal Status Type',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Car Brand',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'Car Model',
      description: 'Get help and access documentation.',
      icon: 'question',
    },
    {
      title: 'User Car',
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
