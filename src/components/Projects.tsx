
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const projects = [
  {
    title: "Reegey App",
    description: "A May language dictionary featuring vocabularies, proverbs, idioms, and cultural expressions.",
    tags: ["Mobile App", "Dictionary", "Cultural"],
    color: "from-blue-500/20 to-blue-400/10",
  },
  {
    title: "Somali Vocabulary Collection",
    description: "A comprehensive project collecting standardized Somali vocabulary for use in NLP training and educational tools.",
    tags: ["Data Collection", "Education", "NLP"],
    color: "from-yellow-500/20 to-orange-400/10",
  },
  {
    title: "Somali Speech Dataset Initiative",
    description: "Recording and labeling spoken Somali from diverse dialects to power voice recognition and speech-to-text tools.",
    tags: ["Audio", "AI", "Dialects"],
    color: "from-green-500/20 to-emerald-400/10",
  },
  {
    title: "Digital Somali Corpus",
    description: "Building a searchable, annotated Somali corpus from books, articles, and social media content.",
    tags: ["Corpus", "Research", "Digital Archive"],
    color: "from-purple-500/20 to-indigo-400/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Wagéfaal is currently running several pilot and production-stage initiatives
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150} className={`rounded-xl overflow-hidden bg-gradient-to-br ${project.color} border border-gray-100`}>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-white px-3 py-1 text-sm rounded-full text-primary border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Partner on Our Projects
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
