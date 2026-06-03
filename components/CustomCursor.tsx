
import React, { useEffect, useRef, useState } from 'react';

const TRAIL_DOTS = 10;

const CustomCursor: React.FC = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;

    // Array to keep track of the dots' current positions
    const dotsPositions = Array.from({ length: TRAIL_DOTS }, () => ({ x: -100, y: -100 }));

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement;
      // Check if hovering over a link or button
      const isLink = target.closest('a') !== null || target.closest('button') !== null;
      setIsHovering(isLink);
    };

    const render = () => {
      // First dot follows the mouse closely
      dotsPositions[0] = {
        x: mouseX,
        y: mouseY
      };

      for (let i = 1; i < TRAIL_DOTS; i++) {
        // Each subsequent dot lerps towards the previous dot
        dotsPositions[i] = {
          x: dotsPositions[i].x + (dotsPositions[i - 1].x - dotsPositions[i].x) * 0.4,
          y: dotsPositions[i].y + (dotsPositions[i - 1].y - dotsPositions[i].y) * 0.4,
        };
      }

      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          dot.style.transform = `translate3d(calc(${dotsPositions[index].x}px - 50%), calc(${dotsPositions[index].y}px - 50%), 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_DOTS }).map((_, index) => (
        <div 
          key={index}
          ref={(el) => (dotsRef.current[index] = el)}
          className={`fixed pointer-events-none z-[9999] rounded-full bg-primary-brand hidden md:block transition-transform duration-300 ${
            isHovering ? 'scale-[2] opacity-50' : ''
          }`} 
          style={{ 
            left: 0, 
            top: 0,
            width: `${10 - index * 0.6}px`,
            height: `${10 - index * 0.6}px`,
            opacity: 1 - (index / TRAIL_DOTS),
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
