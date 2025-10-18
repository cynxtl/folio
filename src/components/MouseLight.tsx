import { useEffect, useState } from 'react';

export function MouseLight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300 hidden sm:block"
      style={{
        left: coords.x - 200,
        top: coords.y - 200,
        width: 400,
        height: 400,
        opacity: isVisible ? 0.4 : 0,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(102, 255, 253, 0.3) 0%, rgba(66, 245, 233, 0.15) 30%, transparent 70%)',
          filter: 'blur(40px)',
          transition: 'left 0.08s ease-out, top 0.08s ease-out',
        }}
      />
    </div>
  );
}
