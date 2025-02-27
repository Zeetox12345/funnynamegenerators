
import { useState, useEffect, useRef } from "react";
import { getRandomNames } from "../data/generators";
import { useToast } from "@/hooks/use-toast";

interface NameGeneratorProps {
  category: string;
  accentColor: string;
}

const NameGenerator = ({ category, accentColor }: NameGeneratorProps) => {
  const [names, setNames] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const colorClasses: Record<string, string> = {
    'fun-pink': 'bg-fun-pink hover:bg-fun-pink/90 focus:ring-fun-pink/30',
    'fun-blue': 'bg-fun-blue hover:bg-fun-blue/90 focus:ring-fun-blue/30',
    'fun-green': 'bg-fun-green hover:bg-fun-green/90 focus:ring-fun-green/30',
    'fun-yellow': 'bg-fun-yellow hover:bg-fun-yellow/90 text-gray-900 focus:ring-fun-yellow/30',
    'fun-purple': 'bg-fun-purple hover:bg-fun-purple/90 focus:ring-fun-purple/30',
    'fun-orange': 'bg-fun-orange hover:bg-fun-orange/90 focus:ring-fun-orange/30',
  };
  
  const btnColorClass = colorClasses[accentColor] || 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-400/30';
  
  const generateNames = () => {
    setIsGenerating(true);
    
    // Create confetti effect
    if (resultRef.current) {
      const colors = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
      
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
        confetti.style.animationDelay = `${Math.random() * 0.2}s`;
        resultRef.current.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
          confetti.remove();
        }, 2000);
      }
    }
    
    // Simulate loading
    setTimeout(() => {
      setNames(getRandomNames(category, 10));
      setIsGenerating(false);
      setHasGenerated(true);
      
      // Scroll to results if they're now visible
      if (resultRef.current && hasGenerated) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  };
  
  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name)
      .then(() => {
        toast({
          title: "Name copied!",
          description: `"${name}" has been copied to your clipboard.`,
        });
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <button
          onClick={generateNames}
          disabled={isGenerating}
          className={`generate-button ${btnColorClass} text-white font-medium rounded-lg px-8 py-3 shadow-sm focus:outline-none focus:ring-4 transition-all text-lg`}
        >
          {isGenerating ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            <span>Generate 10 Funny Names</span>
          )}
        </button>
      </div>
      
      <div 
        ref={resultRef}
        className={`relative transition-all duration-500 ${hasGenerated ? 'opacity-100' : 'opacity-0'}`}
      >
        {hasGenerated && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {names.map((name, index) => (
              <div 
                key={index}
                className="name-item group"
                style={{ 
                  animationDelay: `${0.05 * index}s`,
                  opacity: 0,
                  animation: 'slide-up 0.4s ease-out forwards' 
                }}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{name}</p>
                  <button
                    onClick={() => copyToClipboard(name)}
                    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100 p-1 hover:text-gray-700 rounded focus:outline-none"
                    aria-label="Copy to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NameGenerator;
