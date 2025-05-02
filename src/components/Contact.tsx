import React, { useState } from 'react';
import { Mail, Github, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind? Want to collaborate? Feel free to reach out.
            </p>
            <div className="space-y-4">
              <a href="mailto:rajakanumuri2005@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Mail className="w-5 h-5" />
                rajakanumuri2005@gmail.com
              </a>
              <a href="https://github.com/LVSJanakiRamaraju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/lvsjanakiramarajukanumuri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <a href="https://www.youtube.com/@LVS_Logics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                <Youtube className="w-6 h-6" />
                YouTube
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Add your Web3Forms Access Key below */}
              <input type="hidden" name="access_key" value="53649f62-67c4-46e7-9161-e32dc138c2ad"/>
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="subject" value="New message from portfolio contact form" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 -translate-y-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                      : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
