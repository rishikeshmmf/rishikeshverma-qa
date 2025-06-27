
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a dedicated QA Engineer with a genuine passion for quality and attention to detail. 
              My mission is to ensure that every piece of software I test meets the highest standards 
              of functionality, usability, and performance.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With 2 years of hands-on experience in manual testing, API testing, and test automation, 
              I've developed a keen eye for identifying potential issues before they reach end users. 
              I'm particularly enthusiastic about automation and DevOps practices that streamline the 
              testing process.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My toolkit includes industry-standard tools like Postman for API testing, Selenium for 
              automation, JMeter for performance testing, and TestRail for comprehensive test case 
              management. I'm always eager to learn new technologies and methodologies that can 
              improve software quality.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                <span className="text-gray-700 dark:text-gray-300">2+ Years of QA Experience</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-4"></span>
                <span className="text-gray-700 dark:text-gray-300">Manual & Automation Testing</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-4"></span>
                <span className="text-gray-700 dark:text-gray-300">API Testing Specialist</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                <span className="text-gray-700 dark:text-gray-300">DevOps & CI/CD Enthusiast</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
