import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kf80s0g",
        "template_waassmf",
        form.current,
        "nK6b5sNutEBmb4Jfn"
      )
      .then(
        () => {
          alert("Message sent successfully! We'll get back to you soon.");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#f97316,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1e40af,transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-customOrange/10 backdrop-blur-sm border border-customOrange/20 px-4 py-2 rounded-full text-customOrange font-semibold text-xs sm:text-sm tracking-wider mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-customOrange rounded-full animate-pulse" />
            Get in Touch
          </div>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you have a question, project idea, or partnership proposal
            we’re here to listen and help.
          </p>
        </motion.div>

        {/* Contact Info + Form */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-customOrange/20 to-customBlue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-1000" />
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50">
              <div className="absolute -top-5 -left-5 p-4 sm:p-5 bg-customOrange rounded-3xl shadow-2xl text-white">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 mt-5">
                Contact Information
              </h3>

              <div className="space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="p-2 sm:p-3 bg-customOrange/10 rounded-2xl">
                    <MapPin className="w-6 sm:w-7 h-6 sm:h-7 text-customOrange" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Office Address
                    </p>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed">
                      B46 Marcus Gundiri Street, Sunshine Estate Gwarimpa,
                      FCT-Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-2 sm:p-3 bg-customBlue/10 rounded-2xl">
                    <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-customBlue" />
                  </div>
                  <a
                    href="mailto:thaifchikiezmanltd@gmail.com"
                    className="text-sm sm:text-base text-customBlue hover:underline font-medium"
                  >
                    thaifchikiezmanltd@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-2 sm:p-3 bg-customOrange/10 rounded-2xl">
                    <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-customOrange" />
                  </div>
                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <a
                      href="tel:+2349091112210"
                      className="block text-gray-800 hover:text-customOrange transition"
                    >
                      +234 909 111 2210
                    </a>
                    <a
                      href="tel:+2348163647971"
                      className="block text-gray-800 hover:text-customOrange transition"
                    >
                      +234 803 879 2439
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-customBlue/20 to-customOrange/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition duration-1000" />
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200/50">
              <div className="absolute -top-5 -right-5 p-4 sm:p-5 bg-customOrange rounded-3xl shadow-2xl text-white">
                <Send className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Send Us a Message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-300 focus:border-customOrange focus:ring-4 focus:ring-customOrange/20 outline-none transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-300 focus:border-customBlue focus:ring-4 focus:ring-customBlue/20 outline-none transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-300 focus:border-customOrange focus:ring-4 focus:ring-customOrange/20 outline-none resize-none transition text-sm sm:text-base"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 sm:py-5 bg-customOrange text-white font-bold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                >
                  <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
