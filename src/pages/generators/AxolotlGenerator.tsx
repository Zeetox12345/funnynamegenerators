import { useEffect, useState, useRef } from "react";
import { generators, Generator as GeneratorType } from "../../data/generators";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NameGenerator from "../../components/NameGenerator";
import ContentSection from "../../components/ContentSection";
import { Link } from "react-router-dom";

const AxolotlGenerator = () => {
  const [generator, setGenerator] = useState<GeneratorType | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Find the axolotl generator
    const found = generators.find(g => g.id === "axolotl");
    
    if (found) {
      setGenerator(found);
      // Scroll to top when generator changes
      window.scrollTo(0, 0);
    }
  }, []);
  
  if (!generator) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Loading Generator...</h1>
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
              <div className="mt-4 text-gray-700">
                <p>Our {generator.title.toLowerCase()} was designed with both fun and functionality in mind. It draws inspiration from popular culture, linguistics, and the unique characteristics of {generator.title.split(' ')[1].toLowerCase()} naming conventions to create names that are both entertaining and practical.</p>
                <p className="mt-2">Whether you're looking for inspiration, entertainment, or a practical solution to your naming needs, our generator offers endless possibilities with just a click.</p>
              </div>
            </ContentSection>
            
            <ContentSection 
              title={`What is a Good ${generator.title.split(' ')[1]} Name?`}
              accentColor={generator.color}
            >
              <p>{generator.article.whatIsGood}</p>
              <div className="mt-4 text-gray-700">
                <p>The art of naming {generator.title.split(' ')[1].toLowerCase()} involves balancing several key elements:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><span className="font-medium">Memorability</span> - A name that sticks in the mind and creates an immediate impression</li>
                  <li><span className="font-medium">Relevance</span> - Connection to the {generator.title.split(' ')[1].toLowerCase()}'s purpose, appearance, or character</li>
                  <li><span className="font-medium">Uniqueness</span> - Standing out from common or overused names</li>
                  <li><span className="font-medium">Pronounceability</span> - Easy to say and share with others</li>
                  <li><span className="font-medium">Humor</span> - The perfect balance of cleverness without being too forced</li>
                </ul>
                <p className="mt-3">Our generator carefully balances these elements to create names that hit the sweet spot between humor, creativity, and practicality.</p>
              </div>
            </ContentSection>
            
            <ContentSection 
              title="How to Use the Generator"
              accentColor={generator.color}
            >
              <p>{generator.article.howToUse}</p>
              <div className="mt-4 text-gray-700">
                <p>Here are some pro tips to get the most out of our generator:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Click "Generate Names" multiple times to explore different naming styles and themes</li>
                  <li>Save your favorites for comparison before making a final decision</li>
                  <li>Consider your audience - what might seem hilarious to you could be confusing to others</li>
                  <li>Test potential names with friends or family for feedback</li>
                  <li>Mix and match elements from different generated names to create your perfect custom name</li>
                </ol>
                <p className="mt-3">Remember, the perfect name often appears when you least expect it, so don't be afraid to keep exploring the possibilities!</p>
              </div>
            </ContentSection>
            
            <ContentSection 
              title={`${generator.title.split(' ')[1]} Naming Traditions`}
              accentColor={generator.color}
            >
              <p>{generator.article.traditions}</p>
              <div className="mt-4 text-gray-700">
                <p>The evolution of {generator.title.split(' ')[1].toLowerCase()} naming practices reflects broader cultural trends and changing attitudes toward humor and creativity. Today's naming practices often blend these traditions with contemporary pop culture references and internet humor.</p>
                <p className="mt-2">Regional differences also play a significant role in {generator.title.split(' ')[1].toLowerCase()} naming conventions. What's considered clever in one region might be viewed differently in another, demonstrating how cultural context shapes our perception of names.</p>
                <p className="mt-2">Our generator draws inspiration from these diverse traditions while adding modern twists that resonate with today's sensibilities.</p>
              </div>
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
              
              <div className="mt-4 text-gray-700">
                <p>These popular names have stood the test of time for good reason. They exemplify the perfect balance of humor, relevance, and memorability that makes a {generator.title.split(' ')[1].toLowerCase()} name truly outstanding.</p>
                <p className="mt-2">Notice how many of these names use techniques like:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Clever wordplay and puns</li>
                  <li>Cultural references that resonate with wide audiences</li>
                  <li>Unexpected combinations of concepts</li>
                  <li>Alliteration and rhythmic patterns that make them satisfying to say</li>
                </ul>
                <p className="mt-3">Use these popular examples as inspiration, but don't be afraid to forge your own path. The best names often come from thinking outside the box and bringing your unique perspective to the naming process.</p>
                <p className="mt-3">Our generator creates endless variations that build on these proven formulas while introducing fresh elements to keep your names original and engaging.</p>
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
                    <Link to={`/${generator.id}`} className="block">
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

export default AxolotlGenerator; 