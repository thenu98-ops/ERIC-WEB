import React from 'react';
import { MapPinIcon, MailIcon, InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact Us
        </h2>
        <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-white/80">
                      General Sir John Kotelawala Defense University
                      <br />
                      Kadalawa Road, Rathmalana 10390
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-white/80">eric@kdu.ac.lk</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                      <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                      <LinkedinIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white/80 hover:text-blue-400 transition-colors">
                      <YoutubeIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300 w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;