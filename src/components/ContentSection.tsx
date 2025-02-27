
import { useRef, useEffect } from "react";

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  accentColor?: string;
}

const ContentSection = ({ title, children, id, accentColor = "fun-pink" }: ContentSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const colorClasses: Record<string, string> = {
    'fun-pink': 'text-fun-pink',
    'fun-blue': 'text-fun-blue',
    'fun-green': 'text-fun-green',
    'fun-yellow': 'text-fun-yellow',
    'fun-purple': 'text-fun-purple',
    'fun-orange': 'text-fun-orange',
  };
  
  const titleColorClass = colorClasses[accentColor] || 'text-gray-900';
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id={id}
      className="opacity-0 translate-y-4 transition-all duration-700 ease-out py-8"
    >
      <h2 className={`text-2xl font-bold mb-4 ${titleColorClass}`}>{title}</h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
