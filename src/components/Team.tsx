
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const teamMembers = [
  {
    name: "Abdikafi Isse Isak",
    role: "Project Lead",
    description: "Strategic planning, partnerships, and organizational leadership",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Yusuf Mohamed Ahmed",
    role: "Software Developer",
    description: "App and tool development, backend/frontend engineering",
    imageUrl: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    name: "Ismail Abdifadil Isack",
    role: "Linguist & Language Expert",
    description: "Language data verification, corpus development",
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Mustaf Abubakar",
    role: "Community Coordinator",
    description: "Volunteer management, outreach, and field engagement",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Abdénuur Umur",
    role: "Content Creator",
    description: "Educational content design, digital storytelling",
    imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Wagéfaal thrives through the dedication of multi-disciplinary and passionate individuals
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">Supporting Roles</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 01-.659 1.591L9.5 14.5M9.75 3.104a24.301 24.301 0 00-4.5 0m0 0v5.714a2.25 2.25 0 01.659 1.591L9.5 14.5" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">AI/NLP Researchers</h4>
              <p className="text-gray-600 text-sm">Corpus annotation, model development, data analysis</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Cultural Advisors</h4>
              <p className="text-gray-600 text-sm">Ensuring cultural accuracy and inclusivity</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Translators & Voice Contributors</h4>
              <p className="text-gray-600 text-sm">Enriching the database with multilingual input and oral recordings</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;
