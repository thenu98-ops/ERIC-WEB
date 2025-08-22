import React, { useState } from 'react';
import BlurImage from './BlurImage';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'ERIC Kit',
      description: 'A custom kit designed to support students in building and experimenting with electronics and robotics projects.',
      images: [
        'ERIC KIT/3.webp',
        'ERIC KIT/1.webp',
        'ERIC KIT/2.webp',
        'ERIC KIT/4.webp'
      ]
    },
    {
      title: 'Autonomous Robot',
      description: 'Self-navigating robot with obstacle detection and path planning capabilities.',
      images: ['auto3.jpg', 'auto2.jpg', 'auto1.jpg']
    },
    {
      title: 'Drone Technology',
      description: 'Custom-built drones for various applications including surveillance and mapping.',
      images: ['dr1.jpg', 'dr2.jpg']
    }
  ];

  // keep track of active image per project
  const [activeImageIndexes, setActiveImageIndexes] = useState(
    projects.map(() => 0) // initialize with 0 for each project
  );

  const handleImageChange = (projectIndex, imgIndex) => {
    setActiveImageIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] = imgIndex;
      return newIndexes;
    });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]"
            >
              {/* Main Image */}
              <div className="h-64 overflow-hidden relative">
                <BlurImage
                  src={project.images[activeImageIndexes[projectIndex]]}
                  alt={project.title}
                  className="hover:scale-110"
                />

                {/* Thumbnail Gallery */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex justify-center space-x-2">
                  {project.images.map((img, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => handleImageChange(projectIndex, imgIndex)}
                      className={`w-12 h-12 rounded overflow-hidden border-2 ${
                        activeImageIndexes[projectIndex] === imgIndex
                          ? 'border-blue-400'
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">{project.description}</p>

                <div className="flex space-x-2">
                  {project.images.map((img, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => handleImageChange(projectIndex, imgIndex)}
                      className={`text-xs px-2 py-1 rounded ${
                        activeImageIndexes[projectIndex] === imgIndex
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {imgIndex + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
