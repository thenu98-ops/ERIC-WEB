// import React, { useState } from 'react';
// const TeamSection = () => {
//   const [activeTab, setActiveTab] = useState('exco');
//   const excoMembers = [{
//     name: 'Melanka Waladeniya',
//     position: 'President',
//     image: 'group/melanka.webp'
//   }, {
//     name: 'Rochana Lokubalasooriya',
//     position: 'Vice President',
//     image: 'group/rochana.webp'
//   }, {
//     name: 'Sasheeva Abeywickrama',
//     position: 'Vice President',
//     image: 'group/sashee.webp'
//   }, {
//     name: 'Deepna Weerakoon',
//     position: 'Secretary',
//     image: 'group/deepna.webp'
//   }, {
//     name: 'Induwari Nissanka',
//     position: 'Assistant Secretary',
//     image: 'group/induwari.webp'
//   }, {
//     name: 'Lalitha Dulanjana',
//     position: 'Treasurer',
//     image: 'group/lalitha.webp'
//   }, {
//     name: 'Chathma Vithanachchi',
//     position: 'Assistant Treasurer',
//     image: 'group/chathma.webp'
//   }, {
//     name: 'Samitha Deshan',
//     position: 'Research In-Charge',
//     image: 'group/samitha.webp'
//   }];
//   const bodMembers = [{
//     name: 'Sanjula Weerasekara',
//     position: 'Workshop Coordinating Director',
//     image: 'group/sanjula.webp'
//   }, {
//     name: 'Kavindu Ranasinghe',
//     position: 'Educational Team Director',
//     image: 'group/kavindu.webp'
//   }, {
//     name: 'Veenavee Samarasinghe',
//     position: 'Marketing Director',
//     image: 'group/veenavee.webp'
//   },{
//     name: 'Thenura Karunarathna',
//     position: 'IT Director',
//     image: 'group/thenura.webp'
//   }, {
//     name: 'Kasuni Udangamuwa',
//     position: 'PR Director',
//     image: 'group/kasuni.webp'
//   }, {
//     name: 'Sachila Herath',
//     position: 'Event Coordinating Director',
//     image: 'group/sachila.webp'
//   }, {
//     name: 'Imal Perera',
//     position: 'Finance Director',
//     image: 'group/imal.webp'
//   },{
//     name: 'Janitha Rajapaksha',
//     position: 'Editor',
//     image: 'group/janitha.webp'
//   },{
//     name: 'Sarah Widanagamage',
//     position: 'Co- Editor',
//     image: 'group/sarah.webp'
//   },{
//     name: 'Dumini Hirunika',
//     position: 'Project Coordinator',
//     image: 'group/dumini.webp'
//   }];
//   const advisors = [{
//     name: 'Eng. Udaya Dampage',
//     position: 'Advisor, Electronic, Robotics and Innovation Club',
//     image: 'dampa.jpg'
//   }, {
//     name: 'Eng. Geeth Karunarathne',
//     position: 'Lecture In-Charge, Electronic, Robotics and Innovation Club',
//     image: 'geeth.jpg'
//   }, {
//     name: 'Capt RT Hettiarachchi USP',
//     position: 'Head of Department of Electrical Electronic Telecommunication and Biomedical Engineering',
//     image: 'hod.jpg'
//   }];
//   const renderTeamMembers = members => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {members.map((member, index) => <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
//           <div className="h-60 overflow-hidden">
//             <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform transition-transform duration-500 hover:scale-110" />
//           </div>
//           <div className="p-4 text-center">
//             <h3 className="text-lg font-bold text-blue-400">{member.name}</h3>
//             <p className="text-white/70 text-sm">{member.position}</p>
//           </div>
//         </div>)}
//     </div>;
//   return <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//           Our Team
//         </h2>
//         <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
//           Here are the people behind this gigantic operation
//         </p>
//         <div className="mb-10 flex justify-center">
//           <div className="inline-flex rounded-md backdrop-blur-md bg-white/5 border border-white/10 p-1">
//             <button onClick={() => setActiveTab('exco')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'exco' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
//               Executive Committee
//             </button>
//             <button onClick={() => setActiveTab('bod')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'bod' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
//               Board of Directors
//             </button>
//             <button onClick={() => setActiveTab('advisors')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'advisors' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
//               Advisors/
//             </button>
//           </div>
//         </div>
//         <div>
//           {activeTab === 'exco' && renderTeamMembers(excoMembers)}
//           {activeTab === 'bod' && renderTeamMembers(bodMembers)}
//           {activeTab === 'advisors' && renderTeamMembers(advisors)}
//         </div>
//       </div>
//     </section>;
// };
// export default TeamSection;

import React, { useState } from 'react';
import { Linkedin } from 'lucide-react'; // LinkedIn icon

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('exco');

  const excoMembers = [
    {
      name: 'Melanka Waladeniya',
      position: 'President',
      image: 'group/melanka.webp',
      linkedin: 'https://www.linkedin.com/in/melankawaladeniya/'
    },
    {
      name: 'Rochana Lokubalasooriya',
      position: 'Vice President',
      image: 'group/rochana.webp',
      linkedin: 'https://www.linkedin.com/in/rochana-lokubalasuriya/'
    },
    {
      name: 'Sasheeva Abeywickrama',
      position: 'Vice President',
      image: 'group/sashee.webp',
      linkedin: 'http://www.linkedin.com/in/sasheeva-abeywickrama-172b54299'
    },
    {
      name: 'Deepna Weerakoon',
      position: 'Secretary',
      image: 'group/deepna.webp',
      linkedin: 'http://www.linkedin.com/in/deepna-weerakoon'
    },
    {
      name: 'Induwari Nissanka',
      position: 'Assistant Secretary',
      image: 'group/induwari.webp',
      linkedin: 'http://www.linkedin.com/in/induwarinissanka-b90851299'
    },
    {
      name: 'Lalitha Dulanjana',
      position: 'Treasurer',
      image: 'group/lalitha.webp',
      linkedin: 'https://www.linkedin.com/in/lalitha-dulanjana-302463302/'
    },
    {
      name: 'Chathma Vithanachchi',
      position: 'Assistant Treasurer',
      image: 'group/chathma.webp',
      linkedin: 'https://www.linkedin.com/in/chathmavithanachchi/'
    },
    {
      name: 'Samitha Deshan',
      position: 'Research In-Charge',
      image: 'group/samitha.webp',
      linkedin: 'https://www.linkedin.com/in/samitha-deshan-a61015265/'
    }
  ];

  const bodMembers = [
    {
      name: 'Sanjula Weerasekara',
      position: 'Workshop Coordinating Director',
      image: 'group/sanjula.webp',
      linkedin: 'http://www.linkedin.com/in/sanjula-weerasekara-d2002'
    },
    {
      name: 'Kavindu Ranasinghe',
      position: 'Educational Team Director',
      image: 'group/kavindu.webp',
      linkedin: 'https://www.linkedin.com/in/kavindu-ranasinghe-3b5633240'
    },
    {
      name: 'Veenavee Samarasinghe',
      position: 'Marketing Director',
      image: 'group/veenavee.webp',
      linkedin: 'http://www.linkedin.com/in/veenavee-samarasinghe'
    },
    {
      name: 'Thenura Karunarathna',
      position: 'IT Director',
      image: 'group/thenura.webp',
      linkedin: 'https://www.linkedin.com/in/thenura-ops/'
    },
    {
      name: 'Kasuni Udangamuwa',
      position: 'PR Director',
      image: 'group/kasuni.webp',
      linkedin: 'https://www.linkedin.com/in/kasuni-udangamuwa-83b21b338/'
    },
    {
      name: 'Sachila Herath',
      position: 'Event Coordinating Director',
      image: 'group/sachila.webp',
      linkedin: 'http://www.linkedin.com/in/sachilaherath'
    },
    {
      name: 'Imal Perera',
      position: 'Finance Director',
      image: 'group/imal.webp',
      linkedin: 'https://www.linkedin.com/in/imal-perera-51985228b/'
    },
    {
      name: 'Janitha Rajapaksha',
      position: 'Editor',
      image: 'group/janitha.webp',
      linkedin: 'https://www.linkedin.com/in/janitha-rajapaksha-7b3544179'
    },
    {
      name: 'Sarah Widanagamage',
      position: 'Co- Editor',
      image: 'group/sarah.webp',
      linkedin: 'https://www.linkedin.com/in/sarah-widanagamage-b93208247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Dumini Hirunika',
      position: 'Project Coordinator',
      image: 'group/dumini.webp',
      linkedin: 'https://www.linkedin.com/in/dumini-hirunika-692265312/'
    }
  ];

  const advisors = [
    {
      name: 'Eng. Udaya Dampage',
      position: 'Advisor, Electronic, Robotics and Innovation Club',
      image: 'dampa.jpg'
    },
    {
      name: 'Eng. Geeth Karunarathne',
      position: 'Lecture In-Charge, Electronic, Robotics and Innovation Club',
      image: 'geeth.jpg'
    },
    {
      name: 'Capt RT Hettiarachchi USP',
      position: 'Head of Department of Electrical Electronic Telecommunication and Biomedical Engineering',
      image: 'hod.jpg'
    }
  ];

  const renderTeamMembers = (members) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]"
        >
          <div className="h-60 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
                loading="lazy"
  onLoad={(e) => e.currentTarget.classList.remove("blur-lg", "scale-105")}
              className="w-full h-full object-cover object-top transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-blue-400">{member.name}</h3>
            <p className="text-white/70 text-sm">{member.position}</p>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-2 text-blue-400 hover:text-blue-500 transition"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Team</h2>
        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
          Here are the people behind this gigantic operation
        </p>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-md backdrop-blur-md bg-white/5 border border-white/10 p-1">
            <button
              onClick={() => setActiveTab('exco')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'exco'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Executive Committee
            </button>
            <button
              onClick={() => setActiveTab('bod')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'bod'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Board of Directors
            </button>
            <button
              onClick={() => setActiveTab('advisors')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'advisors'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Advisors
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'exco' && renderTeamMembers(excoMembers)}
          {activeTab === 'bod' && renderTeamMembers(bodMembers)}
          {activeTab === 'advisors' && renderTeamMembers(advisors)}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
