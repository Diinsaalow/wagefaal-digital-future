
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-primary">Empowering</span> <span className="text-secondary">Somali</span> Through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Safeguarding, developing, and elevating the Somali language through innovative digital solutions, artificial intelligence, and community-driven technology projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get Involved
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-outline"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
