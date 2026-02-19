
import React from 'react';
import Card from './Card';

interface BentoGridItemProps {
  children: React.ReactNode;
  className?: string;
  // Added style prop to allow inline styles for animations
  style?: React.CSSProperties;
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({ children, className = '' }) => {
  return (
    <Card className={`
      col-span-1 row-span-1
      flex flex-col justify-between
      ${className}
    `}>
      {children}
    </Card>
  );
};

export default BentoGridItem;