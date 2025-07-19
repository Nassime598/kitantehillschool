import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const academicLinks = [
    'O-Level Program',
    'A-Level Program',
    'Examination Results',
    'Academic Calendar',
    'Fee Structure',
    'Student Portal',
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Kitante Hill School</h3>
                <p className="text-gray-400 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing quality secondary education in Kampala, Uganda since 1985. 
              We are committed to developing well-rounded individuals equipped for success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic Programs</h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300">P.O. BOX 7102</p>
                  <p className="text-gray-300">Kampala, Uganda</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-gray-300">+256.414233951</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p className="text-gray-300">opokukwame561@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Kitante Hill School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;