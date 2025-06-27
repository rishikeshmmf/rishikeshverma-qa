
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual PDF file
    alert('Resume download would be triggered here. Please upload your actual resume PDF to the project.');
  };

  const resumeHighlights = [
    "2+ years of QA Engineering experience",
    "Expertise in Manual and API Testing",
    "Automation framework development",
    "Performance testing and optimization",
    "Test case design and execution",
    "Bug tracking and defect management",
    "CI/CD pipeline integration knowledge"
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Resume
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <FileText size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Rishikesh Verma - QA Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive overview of my professional experience and skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Professional Highlights
              </h4>
              <ul className="space-y-2">
                {resumeHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Core Competencies
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Manual Testing</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <div key={star} className={`w-3 h-3 rounded-full ${star <= 5 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">API Testing</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <div key={star} className={`w-3 h-3 rounded-full ${star <= 4 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Test Automation</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <div key={star} className={`w-3 h-3 rounded-full ${star <= 4 ? 'bg-yellow-400' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download Full Resume (PDF)
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Updated as of December 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
