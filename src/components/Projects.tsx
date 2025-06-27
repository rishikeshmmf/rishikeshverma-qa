
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website Testing",
      description: "Comprehensive testing of an e-commerce platform including manual testing of user workflows, API testing for payment processing, cart management, and user authentication. Created detailed test cases and executed regression testing.",
      technologies: ["Manual Testing", "API Testing", "Postman", "JIRA", "TestRail"],
      highlights: [
        "100+ test cases created and executed",
        "API testing for 25+ endpoints",
        "Cross-browser compatibility testing",
        "Performance testing under load"
      ]
    },
    {
      title: "Selenium Automation Framework",
      description: "Developed a robust automation framework using Selenium WebDriver with Python, implementing Page Object Model (POM) design pattern. The framework includes data-driven testing capabilities and detailed reporting.",
      technologies: ["Selenium", "Python", "POM", "pytest", "HTML Reports"],
      highlights: [
        "Page Object Model implementation",
        "Data-driven test execution",
        "Cross-browser automation support",
        "Detailed HTML test reports"
      ]
    },
    {
      title: "Performance Testing with JMeter",
      description: "Created comprehensive performance test scripts using Apache JMeter to evaluate system performance under various load conditions. Analyzed response times, throughput, and system resource utilization.",
      technologies: ["JMeter", "Performance Testing", "Load Testing", "k6"],
      highlights: [
        "Load testing for 1000+ concurrent users",
        "Response time analysis and optimization",
        "Bottleneck identification and reporting",
        "Performance metrics dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Highlights:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Github size={16} className="mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
