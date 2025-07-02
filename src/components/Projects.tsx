import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "The Zenfulnote App",
      description:
        "Manually tested Zenfulnote — a self-reflection and wellness app focused on journaling, guided meditations, and emotional tracking. Ensured smooth user experiences across iOS and Android platforms, validating core features like shadow/glimmer tracking, deep journaling prompts, shadow work card games, and in-app purchases for premium content.",

      technologies: [
        "Manual Testing",
        "JIRA",
        "TestRail",
        "Figma",
        "Android & iOS (real devices)",
        "In-App Purchase Testing"
      ],

      highlights: [
        "Tested journaling prompts, shadow/glimmer tracking, and guided exercises",
        "Validated in-app purchase flows (subscriptions and unlockable content) on iOS and Android",
        "Ensured UI/UX consistency for features like check-ins and meditation journeys",
        "Tested onboarding, login/logout, and user profile flows",
        "Reported bugs with clear reproduction steps, screenshots, and test logs in JIRA",
        "Executed regression and compatibility testing on multiple devices and OS versions"
      ],

      viewUrl: "https://apps.apple.com/us/app/zenfulnote-shadow-work/id6464039288",
      learnUrl: "https://www.zenfulnote.app/"
    },

    {
      title: "The Zumi App",
      description:
        "Conducted comprehensive manual testing of the Zumi mobile application on both Android and iOS platforms. Focused on validating user flows, UI consistency, and functional accuracy across devices. Testing covered login, onboarding, notifications, in-app navigation, and purchase workflows.",

      technologies: [
        "Manual Testing",
        "JIRA",
        "TestRail",
        "Figma",
        "Android & iOS (real devices)",
        "Payment Testing"
      ],

      highlights: [
        "Tested core user journeys like login, onboarding, and payments",
        "Executed cross-platform tests on Android and iOS devices",
        "Created and maintained 80+ detailed test cases in TestRail",
        "UI/UX verification against Figma design specifications",
        "Documented bugs with clear reproduction steps in JIRA",
        "Collaborated closely with designers and developers to validate fixes and ensure consistent user experience across new feature releases"
      ],

      viewUrl: "https://play.google.com/store/apps/details?id=com.zumi.app.zumi_app",
      learnUrl: "https://wearezumi.com/"
    },

    {
      title: "Performance Testing with JMeter",
      description:
        "Created comprehensive performance test scripts using Apache JMeter to evaluate system performance under various load conditions. Analyzed response times, throughput, and system resource utilization.",

      technologies: ["JMeter", "Performance Testing", "Load Testing", "k6","JMeter", "Performance Testing", "Load Testing", "k6"],

      highlights: [
        "Load testing for 1000+ concurrent users",
        "Response time analysis and optimization",
        "Bottleneck identification and reporting",
        "Performance metrics dashboard",
        "Load testing for 1000+ concurrent users",
        "Response time analysis and optimization",
        "Bottleneck identification and reporting",
        "Performance metrics dashboard"
      ],

      viewUrl: "https://github.com/rishikeshmmf/jmeter-performance",
      learnUrl: "https://jmeter-performance.vercel.app"
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
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Key Highlights:
                  </h4>
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
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </a>

                  <a
                    href={project.learnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </a>
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
