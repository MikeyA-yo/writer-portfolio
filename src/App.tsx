import React from 'react';
import { Mail, Github, Linkedin, FileText, Quote, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Sarah Mitchell</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Professional Writer & Content Strategist</p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Get in Touch
            </a>
            <a href="#portfolio" className="border border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                alt="Professional headshot"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in professional writing and content strategy,
                I help businesses and individuals tell their stories effectively. My work spans
                across technical documentation, creative writing, and marketing content.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="w-8 h-8 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the writing project, highlighting key achievements
                  and the impact it had on the client's business.
                </p>
                <a href="#" className="text-gray-900 font-medium hover:underline">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John Smith",
                role: "Marketing Director",
                company: "Tech Corp",
                content: "Sarah's writing transformed our technical documentation into clear, engaging content that our users love."
              },
              {
                name: "Emma Wilson",
                role: "CEO",
                company: "Creative Agency",
                content: "Working with Sarah was a game-changer for our content strategy. Her insights and writing skills are exceptional."
              },{
                name: "Michael Johnson",
                role: "Content Strategist",
                company: "Digital Agency",
                content: "Sarah's content strategy has transformed our marketing efforts, and her writing is always top-notch."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <Quote className="w-8 h-8 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Sarah Mitchell. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com" className="hover:text-gray-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-gray-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;