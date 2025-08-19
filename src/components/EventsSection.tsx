// import React, { useState } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const EventsSection = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//   const events = [
//     {
//       title: 'AGM – Annual General Meeting',
//       description:
//         'A special gathering to appreciate the outgoing committee, welcome the new team, and share inspiring visions for the year ahead.',
//       photos: ['AGM/1.webp', 'AGM/2.webp', 'AGM/3.webp', 'AGM/4.webp', 'AGM/5.webp'],
//     },
//     {
//       title: 'SPARK',
//       description:
//         'A month-long workshop series that equips students with in-depth knowledge in robotics, software, and electronics through interactive sessions and hands-on projects.',
//       photos: [
//         'SPARK/8.webp',
//         'SPARK/2.webp',
//         'SPARK/3.webp',
//         'SPARK/4.webp',
//         'SPARK/5.webp',
//         'SPARK/6.webp',
//         'SPARK/7.webp',
//         'SPARK/1.webp',
//       ],
//     },
//     {
//       title: 'GENESIZ',
//       description:
//         'An inter-university competition where students display their talents in electronics, academics, robotics, software, and idea pitching.',
//       photos: [
//         'Genesiz/1.webp',
//         'Genesiz/2.webp',
//         'Genesiz/3.webp',
//         'Genesiz/4.webp',
//         'Genesiz/5.webp',
//         'Genesiz/6.webp',
//         'Genesiz/7.webp',
//       ],
//     },
//     {
//       title: 'ROSCO',
//       description:
//         'A robotics competition co-organized by IMechE KDU and ERIC KDU, providing a platform for participants to demonstrate their robotics expertise.',
//       photos: [
//         'Rosco/1.webp',
//         'Rosco/2.webp',
//         'Rosco/3.webp',
//         'Rosco/4.webp',
//         'Rosco/5.webp',
//         'Rosco/6.webp',
//         'Rosco/7.webp',
//       ],
//     },
//     {
//       title: 'INSPIRE Magazine',
//       description:
//         "Our annual publication showcasing ERIC's projects, success stories, and innovative achievements.",
//       photos: ['Inspire/IMG_0813.webp'],
//     },
//   ];

//   const openGallery = (event, photoIndex = 0) => {
//     setSelectedEvent(event);
//     setCurrentPhotoIndex(photoIndex);
//   };

//   const closeGallery = () => {
//     setSelectedEvent(null);
//     setCurrentPhotoIndex(0);
//   };

//   const nextPhoto = () => {
//     if (selectedEvent) {
//       setCurrentPhotoIndex((prev) =>
//         prev === selectedEvent.photos.length - 1 ? 0 : prev + 1
//       );
//     }
//   };

//   const prevPhoto = () => {
//     if (selectedEvent) {
//       setCurrentPhotoIndex((prev) =>
//         prev === 0 ? selectedEvent.photos.length - 1 : prev - 1
//       );
//     }
//   };

//   return (
//     <>
//       <section
//         id="events"
//         className="py-20 bg-gradient-to-b from-gray-900 to-blue-950"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
//             Annual Events
//           </h2>
//           <div className="space-y-12">
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col ${
//                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } gap-8 items-center`}
//               >
//                 {/* ==== IMAGE PREVIEW (MULTI-IMAGES) ==== */}
//                 <div className="w-full md:w-1/2 relative group">
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                     {event.photos.slice(0, 3).map((photo, idx) => (
//                       <div
//                         key={idx}
//                         className="relative rounded-xl overflow-hidden border border-white/10 shadow-md cursor-pointer group"
//                         onClick={() => openGallery(event, idx)}
//                       >
//                         <img
//                           src={photo}
//                           alt={`${event.title} preview ${idx + 1}`}
//                           className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110"
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
//                           <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg shadow">
//                             <span className="text-white text-sm font-medium">
//                               Click Me
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* "+X more" if more than 3 photos */}
//                   {event.photos.length > 3 && (
//                     <div
//                       onClick={() => openGallery(event, 3)}
//                       className="mt-2 text-center text-white/70 text-sm cursor-pointer hover:text-blue-400"
//                     >
//                       +{event.photos.length - 3} more
//                     </div>
//                   )}
//                 </div>

//                 {/* ==== TEXT DESCRIPTION ==== */}
//                 <div className="w-full md:w-1/2">
//                   <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg h-full">
//                     <h3 className="text-2xl font-bold mb-4 text-blue-400">
//                       {event.title}
//                     </h3>
//                     <p className="text-white/80 leading-relaxed">
//                       {event.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==== GALLERY MODAL ==== */}
//       {selectedEvent && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//           <div className="relative w-full h-full max-w-5xl flex flex-col">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4 text-white">
//               <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
//               <button
//                 onClick={closeGallery}
//                 className="p-2 hover:bg-white/10 rounded-full transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Main Photo */}
//             <div className="flex-1 flex items-center justify-center relative">
//               <img
//                 src={selectedEvent.photos[currentPhotoIndex]}
//                 alt={`${selectedEvent.title} - Photo ${
//                   currentPhotoIndex + 1
//                 }`}
//                 className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg transition-all duration-500"
//               />

//               {/* Nav Buttons */}
//               {selectedEvent.photos.length > 1 && (
//                 <>
//                   <button
//                     onClick={prevPhoto}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
//                   >
//                     <ChevronLeft size={24} />
//                   </button>
//                   <button
//                     onClick={nextPhoto}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
//                   >
//                     <ChevronRight size={24} />
//                   </button>
//                 </>
//               )}
//             </div>

//             {/* Counter */}
//             <div className="text-center text-white/70 mt-4">
//               {currentPhotoIndex + 1} of {selectedEvent.photos.length}
//             </div>

//             {/* Thumbnails */}
//             {selectedEvent.photos.length > 1 && (
//               <div className="mt-4 flex justify-center space-x-2 overflow-x-auto">
//                 {selectedEvent.photos.map((photo, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCurrentPhotoIndex(idx)}
//                     className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-transform ${
//                       idx === currentPhotoIndex
//                         ? 'border-blue-400 scale-110'
//                         : 'border-white/20 hover:border-white/40'
//                     }`}
//                   >
//                     <img
//                       src={photo}
//                       alt={`Thumbnail ${idx + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventsSection;


import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const events = [
    {
      title: 'AGM – Annual General Meeting',
      description:
        'A special gathering to appreciate the outgoing committee, welcome the new team, and share inspiring visions for the year ahead.',
      photos: ['AGM/1.webp', 'AGM/2.webp', 'AGM/3.webp', 'AGM/4.webp', 'AGM/5.webp'],
    },
    {
      title: 'SPARK',
      description:
        'A month-long workshop series that equips students with in-depth knowledge in robotics, software, and electronics through interactive sessions and hands-on projects.',
      photos: ['SPARK/8.webp', 'SPARK/2.webp', 'SPARK/3.webp', 'SPARK/4.webp', 'SPARK/5.webp', 'SPARK/6.webp', 'SPARK/7.webp', 'SPARK/1.webp'],
    },
    {
      title: 'GENESIZ',
      description:
        'An inter-university competition where students display their talents in electronics, academics, robotics, software, and idea pitching.',
      photos: ['Genesiz/1.webp', 'Genesiz/2.webp', 'Genesiz/3.webp', 'Genesiz/4.webp', 'Genesiz/5.webp', 'Genesiz/6.webp', 'Genesiz/7.webp'],
    },
    {
      title: 'ROSCO',
      description:
        'A robotics competition co-organized by IMechE KDU and ERIC KDU, providing a platform for participants to demonstrate their robotics expertise.',
      photos: ['Rosco/1.webp', 'Rosco/2.webp', 'Rosco/3.webp', 'Rosco/4.webp', 'Rosco/5.webp', 'Rosco/6.webp', 'Rosco/7.webp'],
    },
    {
      title: 'INSPIRE Magazine',
      description: "Our annual publication showcasing ERIC's projects, success stories, and innovative achievements.",
      photos: ['Inspire/IMG_0813.webp'],
    },
  ];

  const openGallery = (event, photoIndex = 0) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(photoIndex);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prev) => (prev === selectedEvent.photos.length - 1 ? 0 : prev + 1));
    }
  };

  const prevPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prev) => (prev === 0 ? selectedEvent.photos.length - 1 : prev - 1));
    }
  };

  return (
    <>
      <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Annual Events
          </h2>
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2 relative group cursor-pointer" onClick={() => openGallery(event, 0)}>
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg h-64 md:h-80">
                    <img
                      src={event.photos[0]}
                      alt={event.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-white font-semibold">Click Me</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg h-full">
                    <h3 className="text-2xl font-bold mb-4 text-blue-400">{event.title}</h3>
                    <p className="text-white/80 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-5xl flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 text-white">
              <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
              <button
                onClick={closeGallery}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Photo */}
            <div className="flex-1 flex items-center justify-center relative">
              <img
                src={selectedEvent.photos[currentPhotoIndex]}
                alt={`${selectedEvent.title} - Photo ${currentPhotoIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg transition-all duration-500"
              />

              {/* Nav Buttons */}
              {selectedEvent.photos.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Counter */}
            <div className="text-center text-white/70 mt-4">
              {currentPhotoIndex + 1} of {selectedEvent.photos.length}
            </div>

            {/* Thumbnails */}
            {selectedEvent.photos.length > 1 && (
              <div className="mt-4 flex justify-center space-x-2 overflow-x-auto">
                {selectedEvent.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhotoIndex(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-transform ${
                      idx === currentPhotoIndex
                        ? 'border-blue-400 scale-110'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img src={photo} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsSection;
