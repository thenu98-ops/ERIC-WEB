import React, { useState } from 'react';
const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('exco');
  const excoMembers = [{
    name: 'Melanka Waladeniya',
    position: 'President',
    image: 'group/melanka.webp'
  }, {
    name: 'Rochana Lokubalasooriya',
    position: 'Vice President',
    image: 'group/rochana.webp'
  }, {
    name: 'Sasheeva Abeywickrama',
    position: 'Vice President',
    image: 'group/sashee.webp'
  }, {
    name: 'Deepna Weerakoon',
    position: 'Secretary',
    image: 'group/deepna.webp'
  }, {
    name: 'Induwari Nissanka',
    position: 'Assistant Secretary',
    image: 'group/induwari.webp'
  }, {
    name: 'Lalitha Dulanjana',
    position: 'Treasurer',
    image: 'group/lalitha.webp'
  }, {
    name: 'Chathma Vithanachchi',
    position: 'Assistant Treasurer',
    image: 'group/chathma.webp'
  }, {
    name: 'Samitha Deshan',
    position: 'Research In-Charge',
    image: 'group/samitha.webp'
  }];
  const bodMembers = [{
    name: 'Sanjula Weerasekara',
    position: 'Workshop Coordinating Director',
    image: 'group/sanjula.webp'
  }, {
    name: 'Kavindu Ranasinghe',
    position: 'Educational Team Director',
    image: 'group/kavindu.webp'
  }, {
    name: 'Veenavee Samarasinghe',
    position: 'Marketing Director',
    image: 'group/veenavee.webp'
  },{
    name: 'Thenura Karunarathna',
    position: 'IT Director',
    image: 'group/thenura.webp'
  }, {
    name: 'Kasuni Udangamuwa',
    position: 'PR Director',
    image: 'group/kasuni.webp'
  }, {
    name: 'Sachila Herath',
    position: 'Event Coordinating Director',
    image: 'group/sachila.webp'
  }, {
    name: 'Imal Perera',
    position: 'Finance Director',
    image: 'group/imal.webp'
  }];
  const advisors = [{
    name: 'Eng. Udaya Dampage',
    position: 'Advisor, Electronic, Robotics and Innovation Club',
    image: 'dampa.jpg'
  }, {
    name: 'Eng. Geeth Karunarathne',
    position: 'Lecture In-Charge, Electronic, Robotics and Innovation Club',
    image: 'geeth.jpg'
  }, {
    name: 'Capt RT Hettiarachchi USP',
    position: 'Head of Department of Electrical Electronic Telecommunication and Biomedical Engineering',
    image: 'group/lalitha.webp'
  }];
  const renderTeamMembers = members => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, index) => <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
          <div className="h-60 overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transform transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold text-blue-400">{member.name}</h3>
            <p className="text-white/70 text-sm">{member.position}</p>
          </div>
        </div>)}
    </div>;
  return <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Team
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
          Here are the people behind this gigantic operation
        </p>
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-md backdrop-blur-md bg-white/5 border border-white/10 p-1">
            <button onClick={() => setActiveTab('exco')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'exco' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
              Executive Committee
            </button>
            <button onClick={() => setActiveTab('bod')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'bod' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
              Board of Directors
            </button>
            <button onClick={() => setActiveTab('advisors')} className={`px-4 py-2 rounded-md transition-all ${activeTab === 'advisors' ? 'bg-blue-600 text-white' : 'text-white/70 hover:text-white'}`}>
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
    </section>;
};
export default TeamSection;