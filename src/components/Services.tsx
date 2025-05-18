
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Book, Code, MessageSquare, Users, Globe } from 'lucide-react';

const services = [
  {
    icon: <Book className="h-10 w-10 text-secondary" />,
    title: "Digital Dictionaries & Lexicons",
    description: "Development of Somali monolingual and dialect-based dictionaries with mobile/web access.",
  },
  {
    icon: <Code className="h-10 w-10 text-secondary" />,
    title: "NLP Data Collection & Curation",
    description: "Collecting and annotating clean Somali datasets to power AI applications and support Large Language Models (LLMs).",
  },
  {
    icon: <Globe className="h-10 w-10 text-secondary" />,
    title: "Mobile App Development",
    description: "Designing educational and practical apps in Somali, from voice assistants to interactive storybooks.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-secondary" />,
    title: "Community Engagement",
    description: "Promoting Somali oral and written culture through digital storytelling, folklore archives, and social media campaigns.",
  },
  {
    icon: <Users className="h-10 w-10 text-secondary" />,
    title: "Workshops & Trainings",
    description: "Hosting capacity-building programs on Somali computational linguistics, AI tools, and digital content creation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Our focus is on culturally grounded and scalable digital language solutions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
