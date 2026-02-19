
import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className = '',
  id,
}) => {
  return (
    <header id={id} className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 ${className}`}>
      {label && (
        <p className="text-primary-brand text-sm md:text-base font-semibold uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-text-light mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
