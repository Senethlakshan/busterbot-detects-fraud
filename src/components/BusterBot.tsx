
import React from 'react';

interface BusterBotProps {
  emotion?: 'default' | 'happy' | 'thinking' | 'scanning' | 'waving';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const BusterBot: React.FC<BusterBotProps> = ({ 
  emotion = 'default', 
  size = 'md', 
  className = '',
  animate = true
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };
  
  const emotionStyles = {
    default: {
      body: 'fill-fraudbuster-blue',
      eyes: 'fill-white',
      pupils: 'fill-fraudbuster-darkBlue',
      mouth: 'stroke-fraudbuster-darkBlue',
      animation: animate ? 'animate-bounce-slight' : ''
    },
    happy: {
      body: 'fill-fraudbuster-blue',
      eyes: 'fill-white',
      pupils: 'fill-fraudbuster-darkBlue',
      mouth: 'stroke-fraudbuster-darkBlue',
      animation: animate ? 'animate-bounce-slight' : ''
    },
    thinking: {
      body: 'fill-fraudbuster-purple',
      eyes: 'fill-white',
      pupils: 'fill-fraudbuster-darkBlue',
      mouth: 'stroke-fraudbuster-darkBlue',
      animation: animate ? 'animate-float' : ''
    },
    scanning: {
      body: 'fill-fraudbuster-blue',
      eyes: 'fill-fraudbuster-pink',
      pupils: 'fill-fraudbuster-darkBlue',
      mouth: 'stroke-fraudbuster-darkBlue',
      animation: animate ? 'animate-spin-slow' : ''
    },
    waving: {
      body: 'fill-fraudbuster-purple',
      eyes: 'fill-white',
      pupils: 'fill-fraudbuster-darkBlue',
      mouth: 'stroke-fraudbuster-darkBlue',
      animation: animate ? 'animate-bounce-slight' : ''
    },
  };

  const style = emotionStyles[emotion];

  return (
    <div className={`relative ${sizeClasses[size]} ${style.animation} ${className}`}>
      {/* Robot Body */}
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <rect x="25" y="30" width="50" height="50" rx="10" className={`${style.body}`} />
        
        {/* Head */}
        <circle cx="50" cy="20" r="15" className={`${style.body}`} />
        
        {/* Eyes */}
        <circle cx="42" cy="18" r="5" className={style.eyes} />
        <circle cx="58" cy="18" r="5" className={style.eyes} />
        
        {/* Pupils */}
        <circle cx="42" cy="18" r="2.5" className={style.pupils} />
        <circle cx="58" cy="18" r="2.5" className={style.pupils} />
        
        {/* Mouth */}
        {emotion === 'happy' ? (
          <path d="M40,30 Q50,40 60,30" fill="none" strokeWidth="2" className={style.mouth} />
        ) : emotion === 'thinking' ? (
          <path d="M40,30 Q50,26 60,30" fill="none" strokeWidth="2" className={style.mouth} />
        ) : (
          <path d="M40,30 Q50,32 60,30" fill="none" strokeWidth="2" className={style.mouth} />
        )}
        
        {/* Antenna */}
        <line x1="50" y1="5" x2="50" y2="10" stroke="#1A365D" strokeWidth="2" />
        <circle cx="50" cy="3" r="3" fill="#D3E4FD" />
        
        {/* Arms */}
        <rect x="15" y="40" width="10" height="25" rx="5" className={`${style.body}`} />
        <rect x="75" y="40" width="10" height="25" rx="5" className={`${style.body}`} />

        {/* Waving arm for waving emotion */}
        {emotion === 'waving' && (
          <g transform="rotate(-30, 75, 40)">
            <rect x="75" y="40" width="10" height="25" rx="5" className={`${style.body}`} />
          </g>
        )}
        
        {/* Legs */}
        <rect x="35" y="80" width="10" height="15" rx="5" className={`${style.body}`} />
        <rect x="55" y="80" width="10" height="15" rx="5" className={`${style.body}`} />
      </svg>

      {/* Scanning effect */}
      {emotion === 'scanning' && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-1 bg-red-500 opacity-70 animate-ping"></div>
        </div>
      )}
    </div>
  );
};

export default BusterBot;
