import React from 'react';
import { Award, Target, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Kitante Hill School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading secondary education institution committed to academic excellence and character development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our History</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Established in 1985, Kitante Hill School has been a cornerstone of quality secondary education 
              in Kampala for nearly four decades. From humble beginnings with just 50 students, we have grown 
              into one of Uganda's most respected educational institutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our school has consistently produced outstanding academic results and has nurtured thousands 
              of students who have gone on to excel in various fields including medicine, engineering, 
              law, business, and public service.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-700">
                  To provide quality, holistic education that develops intellectual capacity, 
                  moral character, and practical skills for responsible citizenship.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-700">
                  To be a center of academic excellence that produces well-rounded individuals 
                  equipped to contribute meaningfully to national and global development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Accreditation</h3>
          <p className="text-center text-gray-700 text-lg">
            Kitante Hill School is fully accredited by the <strong>Uganda Ministry of Education and Sports</strong>, 
            ensuring our curriculum meets the highest national standards for secondary education.
          </p>
        </div>

        <div className="bg-navy-900 text-white rounded-xl p-8">
          <div className="flex items-start space-x-6">
            <img
              src="https://lh6.googleusercontent.com/proxy/awfgOUL3-7eR2IFyy2oNh2U-UPzhweukj8gT6fXohyJtbSXOI2KG1IreR6Ss5ERJmKqq7seUWqlUM_egaVp3V-RTZSDub06V2ckcrOrtPbmL6qO2qSlGeVVBylMixw"
              alt="Principal"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Principal's Message</h3>
              <p className="text-gray-300 leading-relaxed">
                "Welcome to Kitante Hill School, where we believe every student has the potential for greatness. 
                Our dedicated faculty and comprehensive programs ensure that each student receives the support 
                and challenge they need to excel academically while developing strong moral character and leadership skills."
              </p>
              <p className="mt-4 font-semibold">
                — Mrs. Sarah Nakamya, Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;