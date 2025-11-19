import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary': // Dynamic Gradient Magenta
      variantStyles = "bg-gradient-to-r from-magenta to-purple-600 text-white shadow-lg shadow-magenta/30 hover:shadow-magenta/50 border border-transparent hover:brightness-110";
      break;
    case 'outline': // White Outline with backdrop
      variantStyles = "bg-white/5 backdrop-blur-sm border border-white/30 text-white hover:bg-white/10 hover:border-white";
      break;
    case 'secondary': // Navy Gradient
      variantStyles = "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white hover:border-navy";
      break;
    case 'ghost':
        variantStyles = "bg-transparent text-navy hover:bg-gray-100";
        break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};