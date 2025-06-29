import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'siammsheikh09@gmail.com',
    href: 'mailto:siammsheikh09@gmail.com'
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+880 1628 025085',
    href: 'tel:+8801628025085'
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+880 1628 025085',
    href: 'https://wa.me/8801628025085'
  }
];

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ success: false, message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setFormStatus({ success: true, message: 'Message sent successfully!' });
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        setFormStatus({ success: false, message: 'Failed to send message. Please try again.' });
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="py-20 bg-base-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariant} className="text-center mb-12">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-base-content/60 mt-2">Have a question or want to work together? Send me a message!</p>
            <div className="w-24 h-1 bg-info mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <motion.form ref={form} onSubmit={sendEmail} variants={itemVariant} className="bg-base-100 p-8 rounded-xl shadow-lg space-y-6 border border-base-300/50">
              
              <div className="relative">
                <input type="text" id="user_name" name="user_name" className="input input-bordered w-full peer pt-6" placeholder=" " required />
                <label htmlFor="user_name" className="absolute text-sm text-base-content/70 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-info peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input type="email" id="user_email" name="user_email" className="input input-bordered w-full peer pt-6" placeholder=" " required />
                <label htmlFor="user_email" className="absolute text-sm text-base-content/70 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-info peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Your Email
                </label>
              </div>
              
              <div className="relative">
                <textarea id="message" name="message" className="textarea textarea-bordered h-36 w-full peer pt-6" placeholder=" " required></textarea>
                <label htmlFor="message" className="absolute text-sm text-base-content/70 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-info peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Your Message
                </label>
              </div>
              <button type="submit" className="btn btn-info w-full" disabled={isSending}>
                {isSending ? <span className="loading loading-spinner"></span> : 'Send Message'}
              </button>
              {formStatus.message && (
                <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-error'} mt-4`}>
                  {formStatus.success ? <FaCheckCircle /> : <FaExclamationCircle />}
                  <span>{formStatus.message}</span>
                </div>
              )}
            </motion.form>

            
            <motion.div variants={itemVariant} className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="bg-base-100 p-6 rounded-xl shadow-lg flex items-center gap-6 border border-transparent hover:border-info/50 transition-all duration-300"
                >
                  <div className="text-3xl text-info bg-info/10 p-4 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{item.label}</h3>
                    <p className="text-base-content/80">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;