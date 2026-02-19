
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  // Added style prop to allow inline styles for animations
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-card-bg backdrop-blur-md border border-glass-border rounded-2xl p-6
      shadow-xl shadow-background-dark/30 hover:shadow-primary-brand/20 transition-all duration-300 ease-in-out
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;