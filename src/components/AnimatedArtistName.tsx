import { useState, useEffect } from 'react';

interface AnimatedArtistNameProps {
  name: string;
  className?: string;
}

const AnimatedArtistName = ({ name, className = "" }: AnimatedArtistNameProps) => {
  const [visibleLetters, setVisibleLetters] = useState<Set<number>>(new Set());
  
  useEffect(() => {
    // Reset les lettres visibles quand le nom change
    setVisibleLetters(new Set());
    
    // Créer un tableau des indices des lettres (en excluant l'espace)
    const letterIndices = Array.from({ length: name.length }, (_, i) => i)
      .filter(i => name[i] !== ' ');
    
    // Mélanger les indices aléatoirement
    const shuffledIndices = [...letterIndices].sort(() => Math.random() - 0.5);
    
    // Révéler une lettre chaque seconde
    const timeouts: NodeJS.Timeout[] = [];
    shuffledIndices.forEach((index, i) => {
      const timeout = setTimeout(() => {
        setVisibleLetters(prev => new Set([...prev, index]));
      }, i * 1000);
      timeouts.push(timeout);
    });
    
    // Nettoyer les timeouts si le composant est démonté
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [name]);

  return (
    <h1 className={`text-7xl md:text-9xl font-thin text-white tracking-wider ${className}`}>
      {name.split('').map((letter, index) => (
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