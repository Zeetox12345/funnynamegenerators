
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { generators } from "../data/generators";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GeneratorCard from "../components/GeneratorCard";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="hero-gradient pt-20 pb-16 px-4 md:px-8"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-fun-pink">funny</span>name<span className="text-fun-blue">generators</span><span className="text-gray-500">.com</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We Make Boring Names Hilarious!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/generator/cabin" 
                className="bg-fun-pink text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 font-medium"
              >
                Try a Generator
              </Link>
              <a 
                href="#generators" 
                className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 font-medium border border-gray-200"
              >
                Explore All Generators
              </a>
            </div>
          </div>
        </section>
        
        {/* Generators Grid */}
        <section id="generators" className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2 text-center">Our Funny Name Generators</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose a category below and generate hilariously random names with a single click!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generators.map((generator, index) => (
                <GeneratorCard 
                  key={generator.id}
                  id={generator.id}
                  title={generator.title}
                  description={generator.description}
                  color={generator.color}
                  icon={generator.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* How it Works */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-fun-pink text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Choose a Category</h3>
                <p className="text-gray-600">
                  Select from our diverse range of funny name generators
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-fun-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Click Generate</h3>
                <p className="text-gray-600">
                  Press the button to instantly create 10 hilarious random names
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-fun-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Share the Laughter</h3>
                <p className="text-gray-600">
                  Copy your favorites and share them with friends and family
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Funny Name?</h2>
            <p className="text-xl text-gray-600 mb-8">
              With thousands of hilarious possibilities, your next laugh is just a click away.
            </p>
            <Link 
              to="/generator/batman" 
              className="inline-block bg-fun-purple text-white px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 font-medium text-lg"
            >
              Try the Batman Name Generator
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
