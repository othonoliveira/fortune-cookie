const Sparkle = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`absolute text-sparkle text-2xl animate-sparkle ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    ✨
  </div>
);

export default Sparkle