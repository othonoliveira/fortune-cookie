import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Sparkle from './Sparkle';

const fortunes = [
  "Your future is bright and full of possibilities! ⭐",
  "A wonderful opportunity awaits you soon! ✨",
  "Trust your instincts, they will guide you well! 🌟",
  "Adventure and excitement are coming your way! 🎯",
  "Your creativity will open new doors! 🎨",
  "Good fortune follows those who believe! 🍀",
  "Success is just around the corner! 🏆",
  "Your kindness will be returned tenfold! 💝",
  "Dreams you thought impossible will come true! 🌙",
  "A special person will bring joy to your life! 💫",
  "Your hard work is about to pay off! 💎",
  "Unexpected good news is heading your way! 📬",
  "Your wisdom will inspire others today! 🦉",
  "Love and happiness surround you! 💕",
  "A journey of a thousand miles begins with a single step! 👣"
];


const generateLuckyNumbers = () => {
  const numbers = new Set<number>();
  while (numbers.size < 5) {
    numbers.add(Math.floor(Math.random() * 99) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
};

export const FortuneCookie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFortune, setCurrentFortune] = useState('');
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const crackCookie = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const newLuckyNumbers = generateLuckyNumbers();
    setCurrentFortune(randomFortune);
    setLuckyNumbers(newLuckyNumbers);
    
    setTimeout(() => {
      setIsOpening(true);
    }, 600);
    
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
      setIsOpening(false);
    }, 1100);
  };

  const resetCookie = () => {
    setIsOpen(false);
    setCurrentFortune('');
    setLuckyNumbers([]);
    setIsAnimating(false);
    setIsOpening(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="text-center space-y-8 max-w-md mx-auto px-4 relative">
        <Sparkle className="absolute -top-8 -left-12" delay={0} />
        <Sparkle className="absolute -top-4 -right-16" delay={1} />
        <Sparkle className="absolute top-16 -left-8" delay={2} />
        <Sparkle className="absolute top-20 -right-8" delay={0.5} />
        <Sparkle className="absolute -bottom-8 -left-16" delay={1.5} />
        <Sparkle className="absolute -bottom-12 -right-12" delay={2.5} />
        <Sparkle className="absolute top-32 left-20" delay={3} />
        <Sparkle className="absolute bottom-16 right-1" delay={1.8} />
        {!isOpen ? (
          <>
            <div className="relative">
              <button
                onClick={crackCookie}
                disabled={isAnimating}
                className={`
                  w-48 h-32 mx-auto block relative
                  bg-gradient-to-br from-cookie-gold to-yellow-500
                  rounded-full
                  shadow-2xl shadow-cookie-shadow/30
                  border-2 border-yellow-600/20
                  transition-all duration-300
                  hover:scale-105 hover:shadow-3xl
                  active:scale-95
                  disabled:pointer-events-none
                  animate-glow
                  ${isAnimating && !isOpening ? 'animate-crack' : ''}
                  ${isOpening ? 'animate-cookie-split' : ''}
                `}
                style={{
                  clipPath: 'ellipse(80% 70% at 50% 45%)',
                  background: 'var(--gradient-cookie)'
                }}
              >
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-6 left-8 w-16 h-0.5 bg-yellow-600 rounded transform rotate-12"></div>
                  <div className="absolute top-10 right-10 w-12 h-0.5 bg-yellow-600 rounded transform -rotate-6"></div>
                  <div className="absolute bottom-8 left-12 w-20 h-0.5 bg-yellow-600 rounded transform rotate-6"></div>
                  <div className="absolute bottom-12 right-8 w-14 h-0.5 bg-yellow-600 rounded transform -rotate-12"></div>
                </div>
                
                <div className="absolute inset-2 bg-gradient-to-br from-transparent to-cookie-shadow/20 rounded-full"></div>
              </button>
            </div>

            <h1 className="text-4xl font-bold text-primary tracking-wide">
              Fortune Cookie
            </h1>

            <p className="text-lg text-muted-foreground">
              Tap the cookie to crack it open!
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 rounded-full animate-magic-pulse">
              <span className="text-accent-foreground font-medium">
                ⭐ Magic awaits inside ⭐
              </span>
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-fortune-reveal">
            <div className="text-6xl">🥠</div>
            
            <h2 className="text-3xl font-bold text-primary">
              Your Fortune
            </h2>
            
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-xl space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                {currentFortune}
              </p>
              
              <div className="pt-4 border-t border-border/30">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  Your Lucky Numbers
                </h3>
                <div className="flex justify-center gap-3">
                  {luckyNumbers.map((number, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Button
              onClick={resetCookie}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Another Fortune
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};