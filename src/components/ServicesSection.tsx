import React from 'react';
import { MonitorIcon, BookIcon, VideoIcon, TrophyIcon, HeartIcon } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: <MonitorIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Workshops',
    description: 'We conduct technical skill development workshops in both hardware and software product development, as well as research support.'
  }, {
    icon: <BookIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Bootcamps',
    description: 'Our bootcamps provide beginner-friendly training for first-year undergraduates in programming, electronics, and robotics.'
  }, {
    icon: <VideoIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Webinars',
    description: 'We host online training sessions for students across KDU campuses, ensuring equal opportunities for all.'
  }, {
    icon: <TrophyIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Competitions',
    description: 'ERIC organizes both internal and inter-university competitions, giving participants the chance to showcase their skills and creativity.'
  }, {
    icon: <HeartIcon className="w-12 h-12 text-blue-400 mb-4" />,
    title: 'Campaigns & CSR',
    description: 'We are committed to giving back to the community through annual CSR initiatives and awareness campaigns.'
  }];
  return <section id="services" className="py-20 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          What We Offer
        </h2>
        <p className="text-xl text-center text-white/80 mb-12 max-w-3xl mx-auto">
          We've got everything you need to be industry-ready:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:translate-y-[-5px]">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                {service.title}
              </h3>
              <p className="text-white/80">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;