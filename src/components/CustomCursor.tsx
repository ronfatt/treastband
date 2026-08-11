import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element cursor attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorAttrEl = target.closest('[data-cursor]') as HTMLElement | null;
        if (cursorAttrEl) {
          const text = cursorAttrEl.getAttribute('data-cursor');
          setCursorText(text);
          setIsHovered(true);
          return;
        }
      }
      setCursorText(null);
      setIsHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Smooth lerp trailing position
  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center Precision Dot */}
      <div 
        className="fixed w-2.5 h-2.5 bg-amber-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out shadow-[0_0_10px_rgba(245,158,11,0.8)]"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Outer Interactive Ring */}
      <div 
        className={`fixed border border-amber-500/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center backdrop-blur-[2px] ${
          isHovered 
            ? 'w-20 h-20 bg-amber-500/20 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)]' 
            : 'w-9 h-9 bg-transparent border-amber-500/40'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono-custom font-black tracking-widest uppercase text-amber-200 animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
