import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary': // Magenta CTA
      variantStyles = "bg-magenta text-white hover:shadow-lg hover:brightness-110 border border-transparent";
      break;
    case 'outline':
      variantStyles = "bg-transparent border-2 border-white text-white hover:bg-white/10";
      break;
    case 'secondary': // Navy Outline
      variantStyles = "bg-transparent border-2 border-navy text-navy hover:bg-navy/5";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};