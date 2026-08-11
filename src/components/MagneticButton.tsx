import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
  href?: string;
  dataCursor?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  dataCursor,
  target,
  rel
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (max 8px movement)
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const transformStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
    transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
  };

  if (href) {
    return (
      <div 
        ref={buttonRef} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <a 
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          data-cursor={dataCursor}
          style={transformStyle}
          className={`inline-flex items-center justify-center ${className}`}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div 
      ref={buttonRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button 
        type="button"
        onClick={onClick}
        data-cursor={dataCursor}
        style={transformStyle}
        className={`inline-flex items-center justify-center ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
