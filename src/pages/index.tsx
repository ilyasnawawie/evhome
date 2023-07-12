import React, { useState } from 'react';
import Wheel from '../../components/wheelComponents/wheels';
import Button from '../../components/wheelComponents/buttons';

interface SectionData {
  name: string;
  percentage: number;
}

export default function HomePage() {
  const [isSpinning, setSpinning] = useState(false);

  const data: SectionData[] = [
    { name: 'Section 1', percentage: 25 },
    { name: 'Section 2', percentage: 25 },
    { name: 'Section 3', percentage: 25 },
    { name: 'Section 4', percentage: 25 },
  ];

  return (
    <div>
      <Wheel data={data} spinning={isSpinning} />
      <Button onClick={() => setSpinning(!isSpinning)}>Start</Button>
    </div>
  );
}
