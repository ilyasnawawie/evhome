import React from 'react';

interface SectionProps {
  name: string;
  percentage: number;
}

const Section: React.FC<SectionProps> = ({ name, percentage }) => {
  return (
    <div className="section" style={{ flex: percentage }}>
      {name}
    </div>
  );
};

export default Section;
