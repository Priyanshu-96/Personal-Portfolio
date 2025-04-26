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
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 relative">
      <ParticlesComponent />

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500 blur-[120px] opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 text-center">
          Let's Connect 🚀
        </h2>

        {/* Form or Success Message */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="relative bg-[#14062d]/80 backdrop-blur-lg border border-purple-500/50 rounded-3xl p-8 md:p-10 w-full max-w-md flex flex-col gap-6 shadow-xl transition-all duration-500 hover:shadow-purple-400/30"
            initial={{ y: 30, opacity: 0 }}
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
                    className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all placeholder-shown:border-purple-400"
                    placeholder=" "
                  />
                ) : (
                  <textarea
                    name="message"
                    required
                    rows={4}
                    autoComplete="off"
                    className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all placeholder-shown:border-purple-400 resize-none"
                    placeholder=" "
                  />
                )}
                <label
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-purple-600 peer-focus:top-0 peer-focus:text-xs peer-focus:text-pink-400"
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
            className="text-purple-400 text-3xl font-semibold text-center animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🎉 Thank you for reaching out!  
            <br /> I'll connect with you soon 💬
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
