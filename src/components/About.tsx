
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Our mission is to ensure Somali becomes a first-class digital language
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedSection delay={100} className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To safeguard, develop, and elevate the Somali language through innovative digital solutions, 
              artificial intelligence, and community-driven technology projects.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={300} className="bg-gradient-to-br from-secondary/5 to-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To see Somali language fully integrated into global digital ecosystems—accessible, 
              standardized, and empowered by modern technology.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={500} className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Who We Are</h3>
            <p className="text-gray-700">
              Wagéfaal is a volunteer-led non-profit organization based in Somalia, dedicated 
              to advancing the Somali language in the digital era. Founded by linguists, 
              technologists, educators, and cultural advocates.
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={700} className="mt-16 bg-gradient-to-r from-primary to-primary/90 text-white p-8 md:p-12 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-secondary">Afkeenna, Awooddeenna</span>
              </h3>
              <p className="text-white/90 mb-6">
                We bridge the gap between Somali linguistic heritage and modern digital tools. 
                We empower communities by developing language resources, engaging with youth 
                through culturally relevant content, and providing open-source tools to 
                developers and educators worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <span>Community-Driven</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <span>Technology-Focused</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <span>Culturally Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
