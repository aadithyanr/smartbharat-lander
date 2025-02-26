'use client';

import { useAsciiText, standard } from 'react-ascii-text';
import { useEffect, useState } from 'react';

export function SmartBharatAscii() {
  const [isMounted, setIsMounted] = useState(false);
  
  const asciiTextRef = useAsciiText({
    font: standard,
    text: "SmartBharat",
    isAnimated: true,
    animationCharacters: "░▒▓█",
    animationDirection: "down",
    animationSpeed: 40,
    animationInterval: 2000,
    animationLoop: true,
    animationDelay: 500,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden mb-16">
      <div className="ascii-container">
        <pre 
          ref={asciiTextRef as any}
          className="text-blue-400 font-mono mx-auto"
        ></pre>
      </div>
    </div>
  );
}