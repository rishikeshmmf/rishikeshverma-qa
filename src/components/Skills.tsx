
const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Types",
      skills: [
        { name: "Manual Testing", level: 90 },
        { name: "API Testing", level: 85 },
        { name: "Automation Testing", level: 70 },
        { name: "Performance Testing", level: 65 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Postman", level: 85 },
        { name: "Selenium", level: 70 },
        { name: "JMeter", level: 65 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Test Management",
      skills: [
        { name: "TestRail", level: 80 },
        { name: "Zephyr", level: 75 },
        { name: "JIRA", level: 85 },
        { name: "Bugzilla", level: 70 }
      ]
    },
    {
      title: "CI/CD & Platforms",
      skills: [
        { name: "Jenkins", level: 60 },
        { name: "GitHub Actions", level: 65 },
        { name: "Windows", level: 90 },
        { name: "Linux", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
