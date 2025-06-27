
const Hero = () => {
  return (
    <section id="home" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            RV
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Rishikesh Verma
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          QA Engineer | Manual & API Testing | Automation Enthusiast
        </p>

        {/* Brief Introduction */}
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate Quality Assurance Engineer with 2 years of experience in ensuring software excellence 
          through comprehensive testing strategies, automation, and continuous improvement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
