import React from 'react';
import { BookOpen, Users, Trophy, Microscope, Palette, Globe, Computer, Calculator } from 'lucide-react';

const Academics: React.FC = () => {
  const departments = [
    { name: 'Sciences', icon: Microscope, subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'] },
    { name: 'Arts & Humanities', icon: Palette, subjects: ['Literature', 'History', 'Geography', 'Religious Education'] },
    { name: 'Languages', icon: Globe, subjects: ['English', 'Luganda', 'French', 'Kiswahili'] },
    { name: 'ICT & Technology', icon: Computer, subjects: ['Computer Studies', 'Technical Drawing', 'Electronics'] },
    { name: 'Mathematics', icon: Calculator, subjects: ['Pure Mathematics', 'Applied Mathematics', 'Statistics'] },
  ];

  const activities = [
    'Football & Netball Teams',
    'Debate Society',
    'Drama Club',
    'Science Club',
    'Student Council',
    'Music & Dance',
    'Environmental Club',
    'First Aid Club'
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed to prepare students for higher education and successful careers
          </p>
        </div>

        {/* Curriculum Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">O-Level Program</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our Ordinary Level program (S1-S4) provides a strong foundation in core subjects, 
              preparing students for the Uganda Certificate of Education (UCE) examinations.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• 4-year comprehensive program</li>
              <li>• Core subjects + electives</li>
              <li>• Continuous assessment</li>
              <li>• UCE examination preparation</li>
            </ul>
          </div>

          <div className="bg-navy-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-navy-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">A-Level Program</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Our Advanced Level program (S5-S6) offers specialized study in chosen subject combinations, 
              leading to the Uganda Advanced Certificate of Education (UACE).
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• 2-year specialized program</li>
              <li>• Subject combinations available</li>
              <li>• University preparation focus</li>
              <li>• UACE examination preparation</li>
            </ul>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Departments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <dept.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">{dept.name}</h4>
                </div>
                <ul className="space-y-2">
                  {dept.subjects.map((subject, idx) => (
                    <li key={idx} className="text-gray-700">• {subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Extracurricular Activities</h3>
            <p className="text-green-100 text-lg">
              Beyond academics, we offer diverse opportunities for personal growth and skill development
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p className="font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;