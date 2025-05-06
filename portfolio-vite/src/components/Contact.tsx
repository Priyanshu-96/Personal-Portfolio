import { useState } from "react";
import ScrollFadeIn from "./ScrollFadeIn";
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
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section
      id="connect"
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
    >
      <ParticlesComponent />

      <ScrollFadeIn>
        <div className="relative z-10 container mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">
            Let's Connect 🚀
          </h2>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-[#14062d]/70 backdrop-blur-xl rounded-3xl border border-purple-400/30 shadow-xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-500"
            >
              {["name", "email", "message"].map((field, index) => (
                <div key={index} className="relative">
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      autoComplete="off"
                      placeholder={field === "name" ? "Your Name" : "Your Email"}
                      className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all placeholder-transparent"
                    />
                  ) : (
                    <textarea
                      name="message"
                      required
                      rows={4}
                      autoComplete="off"
                      placeholder="Your Message"
                      className="peer p-3 w-full bg-transparent text-white border-b-2 border-purple-500 focus:outline-none focus:border-pink-500 transition-all resize-none placeholder-transparent"
                    />
                  )}
                  <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-purple-600 peer-focus:top-0 peer-focus:text-xs peer-focus:text-pink-400 peer-valid:top-0 peer-valid:text-xs peer-valid:text-pink-400">
                    {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
                  </label>
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className={`mt-4 px-6 py-3 rounded-xl text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <div className="flex gap-1 justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          ) : (
            <div className="text-purple-400 text-2xl md:text-3xl font-semibold text-center mt-10">
              🎉 Thank you for reaching out! I’ll get back to you soon.
            </div>
          )}
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default Contact;
