import React from 'react';
import { BookOpenIcon, UsersIcon, CodeIcon, LightbulbIcon } from 'lucide-react';
const StatsSection = () => {
  const stats = [{
    icon: <BookOpenIcon className="w-10 h-10 text-blue-400" />,
    value: '41',
    label: 'Sessions Conducted'
  }, {
    icon: <CodeIcon className="w-10 h-10 text-blue-400" />,
    value: '3',
    label: 'Ongoing Projects'
  }, {
    icon: <LightbulbIcon className="w-10 h-10 text-blue-400" />,
    value: '33',
    label: 'Completed Projects'
  }, {
    icon: <UsersIcon className="w-10 h-10 text-blue-400" />,
    value: '410',
    label: 'Students Trained'
  }];
  return <section id="stats" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Story
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg">
            <p className="text-white/90 text-center leading-relaxed">
              Affiliated chapter- Electronics, Robotics, and Innovation Club of
              SUN (ERIC-SUN), Soroti University – Uganda (joined ERIC family in
              2025)
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 text-center shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-400">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default StatsSection;