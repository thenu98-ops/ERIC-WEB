import React from 'react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-blue-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            About ERIC
          </h2>
          <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 mb-12 shadow-lg">
            <p className="mb-6 text-white/90 leading-relaxed">
              The Electronics, Robotics and Innovation Club (ERIC-KDU) of
              General Sir John Kotelawala Defence University is a vibrant
              student-led organization where enthusiasts of electronics,
              robotics, and innovation come together to learn, create, and share
              their ideas.
            </p>
            <p className="text-white/90 leading-relaxed">
              We provide a platform for students to develop inventive skills by
              working closely with experts in the electronics field, engaging in
              research, and creating cutting-edge technologies. Our activities
              are guided by an executive committee under the supervision of the
              KDU administration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To inspire and empower innovators in electronics, robotics, and
                technology to create solutions that shape a better future.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To serve as a supporting platform, where undergraduates who are
                interested in robotics and innovation can participate and engage
                in promoting robotics and innovation for the betterment of the
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;