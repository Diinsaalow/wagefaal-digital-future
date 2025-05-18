
import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    info: "contact@wagefaal.org",
    link: "mailto:contact@wagefaal.org",
  },
  {
    icon: <Facebook className="h-6 w-6" />,
    title: "Facebook",
    info: "facebook.com/wagefaal",
    link: "https://facebook.com/wagefaal",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    title: "Twitter/X",
    info: "twitter.com/wagefaal",
    link: "https://twitter.com/wagefaal",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    info: "linkedin.com/company/wagefaal",
    link: "https://linkedin.com/company/wagefaal",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="section-title">Get Involved</h2>
          <p className="section-subtitle">
            Join us in building digital equity for the Somali language
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={100}>
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Call to Action</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Volunteer</h4>
                    <p className="text-white/80 text-sm">Contribute your time and expertise in software, linguistics, AI, or content creation.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Partner</h4>
                    <p className="text-white/80 text-sm">Collaborate with us on tools, research, and community projects.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Donate</h4>
                    <p className="text-white/80 text-sm">Support our hosting, infrastructure, and training programs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-secondary">Advocate</h4>
                    <p className="text-white/80 text-sm">Advocate for Somali in AI by sharing our work and using our resources.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20">
                <a href="http://www.wagefaal.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                  <span className="font-bold">Website:</span> www.wagefaal.org
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">Connect With Us</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <a 
                    key={index} 
                    href={method.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{method.title}</h4>
                      <p className="text-sm text-gray-600">{method.info}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
                <p className="text-gray-600 mb-4">
                  Together, we can ensure that Somali remains not just preserved, but thriving in the digital age.
                </p>
                <a 
                  href="mailto:contact@wagefaal.org"
                  className="btn-primary"
                >
                  Send Message
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
