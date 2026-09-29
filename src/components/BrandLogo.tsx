import React from 'react';
import logo from '../assets/tublack-logo.jpg';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
}) => {
  return (
    <img
      src={logo}
      alt="Tublack Imagery"
      className={`object-contain h-auto ${className}`}
    />
  );
};