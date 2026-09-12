import React, { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', _replyto: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xblwdozr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', _replyto: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-textDark dark:text-white">Contact Me</h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-10"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Let's work together</h3>
            <p className="text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
              Have a project in mind? I'm available for work and open to new opportunities. Send me a message and let's discuss how I can help you build reliable software.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm dark:text-white uppercase tracking-wider mb-1">Location</h5>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">Benin City, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm dark:text-white uppercase tracking-wider mb-1">Email</h5>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">idakwosamuel2@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-sm dark:text-white uppercase tracking-wider mb-1">Phone</h5>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">+234 811 729 4817</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required 
                  placeholder="Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-lightBg dark:bg-gray-700 dark:text-white rounded-lg border-2 border-transparent focus:border-primary dark:border-gray-600 focus:bg-white dark:focus:bg-gray-600 outline-none transition-all"
                />
                <input 
                  type="email" 
                  required 
                  placeholder="Email" 
                  name="_replyto"
                  value={formData._replyto}
                  onChange={handleChange}
                  className="w-full p-4 bg-lightBg dark:bg-gray-700 dark:text-white rounded-lg border-2 border-transparent focus:border-primary dark:border-gray-600 focus:bg-white dark:focus:bg-gray-600 outline-none transition-all"
                />
              </div>
              <input 
                type="text" 
                required 
                placeholder="Subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 bg-lightBg dark:bg-gray-700 dark:text-white rounded-lg border-2 border-transparent focus:border-primary dark:border-gray-600 focus:bg-white dark:focus:bg-gray-600 outline-none transition-all"
              />
              <textarea 
                rows="5" 
                required 
                placeholder="Message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-lightBg dark:bg-gray-700 dark:text-white rounded-lg border-2 border-transparent focus:border-primary dark:border-gray-600 focus:bg-white dark:focus:bg-gray-600 outline-none transition-all resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full py-4 rounded-lg font-bold shadow-lg transition-all flex justify-center items-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-accent hover:bg-cyan-600 text-white hover:-translate-y-1'
                } ${status === 'loading' ? 'opacity-75 cursor-not-allowed transform-none' : ''}`}
              >
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-5 h-5" />}
                <span>
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </span>
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">Oops! There was a problem submitting your form. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
