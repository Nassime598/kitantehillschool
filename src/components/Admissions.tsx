import React from 'react';
import { FileText, Phone, Mail, CheckCircle, User } from 'lucide-react';

const Admissions: React.FC = () => {
  const requirements = [
    'Completed application form',
    'Primary Leaving Examination (PLE) certificate',
    'Birth certificate or statutory declaration of age',
    'Passport-size photographs (4 copies)',
    'Medical examination report',
    'Transfer certificate (if from another school)',
    'Application fee payment receipt'
  ];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of learners and embark on a journey of academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Application Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Application Requirements</h3>
            </div>
            <p className="text-gray-700 mb-6">
              To apply for admission to Kitante Hill School, please ensure you have the following documents:
            </p>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Application Process</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download Application Form</h4>
                  <p className="text-gray-600">Get the official application form below</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Complete & Submit</h4>
                  <p className="text-gray-600">Fill out the form and submit with required documents</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment & Interview</h4>
                  <p className="text-gray-600">Attend placement assessment and interview</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Admission Decision</h4>
                  <p className="text-gray-600">Receive admission decision and enrollment information</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Admissions Office */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Admissions Office</h3>
          <p className="text-center text-gray-700 mb-8">
            Have questions about the admissions process? Our admissions team is here to help.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-700">+256.414233951</p>
              <p className="text-sm text-gray-600">Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-700">opokukwame561@gmail.com</p>
              <p className="text-sm text-gray-600">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;