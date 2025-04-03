import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0215] text-white py-20 relative flex justify-center">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500 blur-[120px] opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        className="container mx-auto px-6 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 text-center">
          CONTACT ME
        </h2>

        {/* Contact Form */}
        <motion.form
          className="bg-[#14062d] shadow-lg border border-purple-500 rounded-2xl p-8 max-w-4xl mx-auto text-center flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.5)" }}
        >
          <input type="text" name="name" placeholder="Your Name" className="mb-4 p-2 w-full rounded-md bg-[#0a0215] text-white border border-purple-500 focus:outline-none focus:border-pink-500" required />
          <input type="email" name="email" placeholder="Your Email" className="mb-4 p-2 w-full rounded-md bg-[#0a0215] text-white border border-purple-500 focus:outline-none focus:border-pink-500" required />
          <textarea name="message" placeholder="Your Message" className="mb-4 p-2 w-full rounded-md bg-[#0a0215] text-white border border-purple-500 focus:outline-none focus:border-pink-500" required></textarea>
          <button type="submit" className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-pink-500 transition-colors duration-300">Send Message</button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
  