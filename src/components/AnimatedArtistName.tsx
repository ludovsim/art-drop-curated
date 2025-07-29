import { useState, useEffect } from 'react';

const AnimatedArtistName = () => {
  const fullName = "DAMIEN HIRST";
  const [visibleLetters, setVisibleLetters] = useState<Set<number>>(new Set());
  
  useEffect(() => {
    // Créer un tableau des indices des lettres (en excluant l'espace)
    const letterIndices = Array.from({ length: fullName.length }, (_, i) => i)
      .filter(i => fullName[i] !== ' ');
    
    // Mélanger les indices aléatoirement
    const shuffledIndices = [...letterIndices].sort(() => Math.random() - 0.5);
    
    // Révéler une lettre chaque seconde
    shuffledIndices.forEach((index, i) => {
      setTimeout(() => {
        setVisibleLetters(prev => new Set([...prev, index]));
      }, i * 1000);
    });
    
    // Nettoyer les timeouts si le composant est démonté
    return () => {
      shuffledIndices.forEach((_, i) => {
        clearTimeout(i * 1000);
      });
    };
  }, []);

  return (
    <h1 className="text-7xl md:text-9xl font-thin text-white tracking-wider">
      {fullName.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-opacity duration-300 ${
            letter === ' ' || visibleLetters.has(index) 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedArtistName;