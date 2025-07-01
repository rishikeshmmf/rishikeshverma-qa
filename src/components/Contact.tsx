import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xyzjoblw');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rishikeshverma9@gmail.com',
      link: 'mailto:rishikeshverma9@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7693948120',
      link: 'tel:+917693948120',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rishikeshverma-softwarequalityengineer',
      color: 'text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/rishikeshmmf',
      color: 'text-gray-800 dark:text-gray-200',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about quality assurance and testing. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <info.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {state.succeeded ? (
              <div className="p-8 rounded-xl shadow-lg bg-white dark:bg-gray-900 text-center text-lg font-medium text-green-600 dark:text-green-400">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
