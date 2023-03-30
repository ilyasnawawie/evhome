interface CardData {
    title: string;
    description: string;
    icon: string;
  }
  
  interface DashboardContentProps {
    title: string;
    cardData: CardData[];
  }
  
  const DashboardContent = ({ title, cardData }: DashboardContentProps) => {
    const card = cardData.find((card) => card.title === title);
    if (!card) {
      return null;
    }
  
    return (
      <div className="card-description flex items-center justify-center">
        <div>
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.description}</div>
        </div>
      </div>
    );
  };
  
  export default DashboardContent;
  