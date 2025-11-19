import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  dark = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 mx-auto mt-6 rounded-full ${dark ? 'bg-lightblue' : 'bg-navy'}`}></div>
    </div>
  );
};