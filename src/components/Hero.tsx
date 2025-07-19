import React from 'react';
import { Users, Phone, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-600 to-green-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Kitante Hill School
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Excellence in Secondary Education
            </p>
            <p className="text-lg mb-8 text-green-100 leading-relaxed">
              Empowering young minds through quality education, character development, 
              and academic excellence in the heart of Kampala, Uganda.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#admissions" className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block">
                Apply Now
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-all duration-200 inline-block">
                Contact Us
              </a>
              <a href="#academics" className="border-2 border-green-300 text-green-100 px-8 py-3 rounded-lg font-semibold hover:bg-green-300 hover:text-green-800 transition-all duration-200 inline-block">
                Explore Programs
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://kitantehillschool.wordpress.com/wp-content/uploads/2021/12/school.jpg?w=640"
              alt="Students at Kitante Hill School"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <p className="font-bold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;