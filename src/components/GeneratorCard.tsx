
import { useRef } from "react";
import { Link } from "react-router-dom";

interface GeneratorCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  index: number;
}

const GeneratorCard = ({ id, title, description, color, icon, index }: GeneratorCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const colorClasses: Record<string, string> = {
    'fun-pink': 'bg-fun-pink text-white border-fun-pink/20',
    'fun-blue': 'bg-fun-blue text-white border-fun-blue/20',
    'fun-green': 'bg-fun-green text-white border-fun-green/20',
    'fun-yellow': 'bg-fun-yellow text-gray-900 border-fun-yellow/20',
    'fun-purple': 'bg-fun-purple text-white border-fun-purple/20',
    'fun-orange': 'bg-fun-orange text-white border-fun-orange/20',
  };
  
  const bgColorClass = colorClasses[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  
  // Calculate delay for staggered animation
  const delay = 0.1 + (index * 0.05);
  
  return (
    <div 
      ref={cardRef}
      className="card-hover rounded-xl overflow-hidden shadow-sm border border-gray-100"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0, 
        animation: 'fade-in 0.5s ease-out forwards',
      }}
    >
      <Link to={`/generator/${id}`} className="block h-full">
        <div className="h-full flex flex-col">
          <div className={`h-12 ${bgColorClass} flex items-center px-4`}>
            <span className="text-lg font-medium truncate">{title.split(' ')[0]}</span>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm flex-1">{description}</p>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">10 new names per click</span>
              <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-700 text-xs">
                Popular
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GeneratorCard;
