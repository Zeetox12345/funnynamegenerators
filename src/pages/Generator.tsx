
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { generators, Generator as GeneratorType } from "../data/generators";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NameGenerator from "../components/NameGenerator";
import ContentSection from "../components/ContentSection";

const Generator = () => {
  const { id } = useParams<{ id: string }>();
  const [generator, setGenerator] = useState<GeneratorType | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Find the matching generator
    const found = generators.find(g => g.id === id);
    
    if (found) {
      setGenerator(found);
      // Scroll to top when generator changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!generator) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Generator Not Found</h1>
        <p className="text-gray-600 mb-6">Sorry, we couldn't find the generator you're looking for.</p>
        <Link 
          to="/" 
          className="bg-fun-pink text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  
  // Get background color class based on the generator's color
  const getBgColorClass = (color: string) => {
    const colorClasses: Record<string, string> = {
      'fun-pink': 'bg-fun-pink/10',
      'fun-blue': 'bg-fun-blue/10',
      'fun-green': 'bg-fun-green/10',
      'fun-yellow': 'bg-fun-yellow/10',
      'fun-purple': 'bg-fun-purple/10',
      'fun-orange': 'bg-fun-orange/10',
    };
    
    return colorClasses[color] || 'bg-gray-100';
  };
  
  return (
    <div ref={pageRef} className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className={`${getBgColorClass(generator.color)} pt-16 pb-10 px-4 md:px-8 border-b border-gray-200`}>
          <div className="container mx-auto max-w-4xl opacity-0 animate-slide-down" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{generator.title}</h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">{generator.description}</p>
            </div>
          </div>
        </section>
        
        {/* Generator Section */}
        <section className="py-10 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <NameGenerator category={generator.id} accentColor={generator.color} />
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12 px-4 md:px-8 border-t border-gray-100">
          <div className="container mx-auto max-w-3xl">
            <ContentSection 
              title="Introduction" 
              accentColor={generator.color}
            >
              <p className="text-lg">{generator.article.intro}</p>
            </ContentSection>
            
            <ContentSection 
              title={`What is a Good ${generator.title.split(' ')[1]} Name?`}
              accentColor={generator.color}
            >
              <p>{generator.article.whatIsGood}</p>
            </ContentSection>
            
            <ContentSection 
              title="How to Use the Generator"
              accentColor={generator.color}
            >
              <p>{generator.article.howToUse}</p>
            </ContentSection>
            
            <ContentSection 
              title={`${generator.title.split(' ')[1]} Naming Traditions`}
              accentColor={generator.color}
            >
              <p>{generator.article.traditions}</p>
            </ContentSection>
            
            <ContentSection 
              title={`Most Popular ${generator.title.split(' ')[1]} Names`}
              accentColor={generator.color}
            >
              <p className="mb-6">Here are some of our most popular funny {generator.title.split(' ')[1].toLowerCase()} names:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {generator.article.popular.slice(0, 10).map((name, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-md p-3 border border-gray-200 shadow-sm"
                  >
                    <span className="font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </ContentSection>
          </div>
        </section>
        
        {/* Related Generators */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Try Our Other Generators</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generators
                .filter(g => g.id !== generator.id)
                .slice(0, 3)
                .map((generator, index) => (
                  <div 
                    key={generator.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    style={{ 
                      animationDelay: `${0.1 + (index * 0.1)}s`,
                      opacity: 0, 
                      animation: 'fade-in 0.5s ease-out forwards',
                    }}
                  >
                    <Link to={`/generator/${generator.id}`} className="block">
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{generator.title}</h3>
                        <p className="text-gray-600 text-sm">{generator.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/" 
                className="inline-flex items-center text-fun-pink hover:text-fun-pink/80 font-medium"
              >
                <span>View All Generators</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Generator;
