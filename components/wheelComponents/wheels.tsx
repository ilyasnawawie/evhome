import React from 'react';
import Section from './sections';
import styles from '../../src/styles/wheel.module.css';

interface SectionData {
  name: string;
  percentage: number;
}

interface WheelProps {
  data: SectionData[];
  spinning: boolean;
}

const Wheel: React.FC<WheelProps> = ({ data, spinning }) => {
  return (
    <div className={spinning ? styles.spinning : styles.wheel}>
      {data.map((item, index) => (
        <Section key={index} name={item.name} percentage={item.percentage} />
      ))}
    </div>
  );
};

export default Wheel;
