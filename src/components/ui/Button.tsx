import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200';

  const variants = {
    primary: 'bg-[#7A6A58] text-white hover:bg-[#6a5a48]',
    secondary: 'bg-[#171717] text-white hover:bg-[#333]',
    outline: 'border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white',
    ghost: 'text-[#171717] hover:bg-[#F7F7F5]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
