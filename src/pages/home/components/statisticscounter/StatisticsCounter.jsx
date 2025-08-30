import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';

const StatisticsCounter = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    successRate: 0
  });

  const finalValues = {
    experience: 25,
    projects: 1250,
    successRate: 98
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = {
      experience: setInterval(() => {
        setCounters(prev => ({
          ...prev,
          experience: Math.min(prev.experience + Math.ceil(finalValues.experience / steps), finalValues.experience)
        }));
      }, stepDuration),
      
      projects: setInterval(() => {
        setCounters(prev => ({
          ...prev,
          projects: Math.min(prev.projects + Math.ceil(finalValues.projects / steps), finalValues.projects)
        }));
      }, stepDuration),
      
      successRate: setInterval(() => {
        setCounters(prev => ({
          ...prev,
          successRate: Math.min(prev.successRate + Math.ceil(finalValues.successRate / steps), finalValues.successRate)
        }));
      }, stepDuration)
    };

    // Clear intervals when counters reach final values
    const checkCompletion = setInterval(() => {
      if (counters.experience >= finalValues.experience &&
          counters.projects >= finalValues.projects &&
          counters.successRate >= finalValues.successRate) {
        Object.values(intervals).forEach(clearInterval);
        clearInterval(checkCompletion);
      }
    }, 100);

    return () => {
      Object.values(intervals).forEach(clearInterval);
      clearInterval(checkCompletion);
    };
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: counters.experience,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Serving communities with reliable water solutions',
      color: 'text-emerald-600'
    },
    {
      icon: Award,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful boreholes drilled across the region',
      color: 'text-sky-600'
    },
    {
      icon: Target,
      value: counters.successRate,
      suffix: '%',
      label: 'Success Rate',
      description: 'Accurate water source identification',
      color: 'text-amber-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With decades of experience in borehole drilling and water resource management, 
            we deliver results you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-opacity-10 mb-6 ${stat.color.replace('text-', 'bg-')}`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-800">
                    {stat.value}
                  </span>
                  <span className="text-3xl font-bold text-gray-600">
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;