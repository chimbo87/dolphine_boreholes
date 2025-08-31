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
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Proven Track Record
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            With decades of experience in borehole drilling and water resource management, 
            we deliver results you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-opacity-10 mb-4 ${stat.color.replace('text-', 'bg-')}`}>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                <div className="mb-3">
                  <span className="text-4xl font-bold text-gray-800">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-gray-600">
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
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