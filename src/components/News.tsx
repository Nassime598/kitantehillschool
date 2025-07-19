import React from 'react';
import { Calendar, Trophy, Users, BookOpen, Clock } from 'lucide-react';

const News: React.FC = () => {
  const news = [
    {
      title: 'Excellent UCE Results 2024',
      date: 'March 15, 2025',
      category: 'Academic Achievement',
      summary: 'Kitante Hill School achieves 95% pass rate in Uganda Certificate of Education examinations.',
      icon: Trophy
    },
    {
      title: 'New Science Laboratory Opened',
      date: 'February 28, 2025',
      category: 'Infrastructure',
      summary: 'State-of-the-art chemistry and physics laboratory now available for advanced practical sessions.',
      icon: BookOpen
    },
    {
      title: 'Inter-School Debate Championship',
      date: 'February 10, 2025',
      category: 'Extracurricular',
      summary: 'Our debate team emerges victorious in the regional inter-school debate championship.',
      icon: Users
    }
  ];

  const events = [
    {
      title: 'Term 2 Begins',
      date: 'May 6, 2025',
      time: '8:00 AM',
      type: 'Academic'
    },
    {
      title: 'PTA Meeting',
      date: 'May 15, 2025',
      time: '2:00 PM',
      type: 'Community'
    },
    {
      title: 'Mid-Term Examinations',
      date: 'June 10-14, 2025',
      time: 'All Day',
      type: 'Academic'
    },
    {
      title: 'Sports Day',
      date: 'June 28, 2025',
      time: '9:00 AM',
      type: 'Sports'
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, achievements, and upcoming events at Kitante Hill School
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest News */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="h-6 w-6 text-green-600 mr-3" />
              Latest News
            </h3>
            
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <item.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-green-600 mr-3" />
              Upcoming Events
            </h3>
            
            <div className="bg-navy-900 rounded-xl p-6 text-white">
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Term Dates */}
            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">2025 Term Dates</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Term 1</span>
                  <span className="text-gray-600">Feb 5 - Apr 26, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Term 2</span>
                  <span className="text-gray-600">May 6 - Aug 2, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Term 3</span>
                  <span className="text-gray-600">Aug 26 - Nov 22, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;