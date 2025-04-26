import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "./ParticlesComponent";
import confetti from "canvas-confetti";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xgvkvlra", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        triggerConfetti();
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center  overflow-hidden px-4 py-16">
      {/* Background Particles */}
      <ParticlesComponent />
      <section id="connect" className="bg-[#0a0215] text-white py-20 relative flex justify-center">

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto flex flex-col items-center will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 text-center">
          Let's Connect 🚀
        </h2>

        {/* Form or Success Message */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="relative bg-[#14062d]/80 backdrop-blur-md border border-purple-400/40 rounded-3xl p-6 md:p-8 w-full max-w-sm flex flex-col gap-6 shadow-md transition-all duration-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Input Wrapper */}
            {["name", "email", "message"].map((field, index) => (
              <div key={index} className="relative">
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    autoComplete="off"
                    className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all placeholder-transparent"
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                  />
                ) : (
                  <textarea
                    name="message"
                    required
                    rows={4}
                    autoComplete="off"
                    className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                )}
                <label
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-purple-600 peer-focus:top-0 peer-focus:text-xs peer-focus:text-pink-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-pink-400"
                >
                  {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
                </label>
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading ? (
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.4s]"></div>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="text-purple-400 text-2xl md:text-3xl font-semibold text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🎉 Thank you for reaching out! I'll connect with you soon.
          </motion.div>
        )}
      </motion.div>
      </section>
    </section>
  );
};

export default Contact;
