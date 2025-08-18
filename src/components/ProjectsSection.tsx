import React from 'react';
const ProjectsSection = () => {
  const projects = [{
    title: 'ERIC Kit',
    description: 'A custom kit designed to support students in building and experimenting with electronics and robotics projects.',
    image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }, {
    title: 'Smart Home Automation',
    description: 'IoT-based home automation system developed by ERIC members.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }, {
    title: 'Autonomous Robot',
    description: 'Self-navigating robot with obstacle detection and path planning capabilities.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }, {
    title: 'Drone Technology',
    description: 'Custom-built drones for various applications including surveillance and mapping.',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  }];
  return <section id="projects" className="py-20 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-white/80">{project.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;