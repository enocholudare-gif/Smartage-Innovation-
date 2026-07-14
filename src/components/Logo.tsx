import React, { useState } from 'react';
import smartageLogo from '../assets/images/smartage_logo_1783241579312.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark'; // 'dark' = for light bg (dark text), 'light' = for dark bg (white text)
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'dark',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const userProvidedLogoUrl = 'https://cdn.phototourl.com/free/2026-07-14-988140ab-5d2f-4606-b06b-9236a5b563f2.jpg';
  const logoSrc = imageError ? smartageLogo : userProvidedLogoUrl;

  // Dimension mapping
  const dimensions = {
    sm: { box: 'w-9 h-9', img: 'w-7 h-7', title: 'text-lg', subtitle: 'text-[8px]' },
    md: { box: 'w-12 h-12', img: 'w-9 h-9', title: 'text-xl', subtitle: 'text-[9px]' },
    lg: { box: 'w-16 h-16', img: 'w-12 h-12', title: 'text-2xl', subtitle: 'text-[10px]' },
  }[size];

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0B1220]';
  const subtitleColor = variant === 'light' ? 'text-[#D97706]' : 'text-[#8B5A2B]';

  return (
    <div className={`flex items-center space-x-3 group cursor-pointer ${className}`}>
      {/* Stable Logo Container */}
      <div className="relative flex items-center justify-center">
        {/* Simple crisp background border box */}
        <div className={`relative ${dimensions.box} bg-[#0B1220] rounded-xl flex items-center justify-center p-1 shadow-md border border-[#8B5A2B]/60 transition-colors overflow-hidden`}>
          <img
            src={logoSrc}
            alt="SMART AGE INNOVATIONS LIMITED Logo"
            onError={() => setImageError(true)}
            className={`${dimensions.img} object-cover rounded-lg filter drop-shadow-sm`}
          />
        </div>
      </div>

      {/* Text Brand Title */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${dimensions.title} font-black tracking-tight ${textColor} leading-none transition-colors`}>
            SMART AGE<span className="text-[#D97706] font-extrabold font-mono">.</span>
          </span>
          <span className={`${dimensions.subtitle} font-bold tracking-[0.2em] ${subtitleColor} uppercase font-mono mt-1`}>
            INNOVATIONS LTD
          </span>
        </div>
      )}
    </div>
  );
};

