import DarkModeToggle from "./DarkModeToggle";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-6">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0">
        <h1 className="text-lg font-semibold">PRIYANSHU</h1>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <a href="#about" className="text-black dark:text-white hover:text-sky-500">ABOUT</a>
          <a href="#projects" className="text-black dark:text-white hover:text-sky-500">PROJECTS</a>
          <a href="#contact" className="text-black dark:text-white hover:text-sky-500">CONTACT</a>
        </div>
      </nav>

      <div className="absolute top-4 right-6">
        <DarkModeToggle />
      </div>

      {/* SVG Avatar with Laptop */}
      <div className="relative w-56 h-56 flex items-center justify-center mt-16">
        <object 
          type="image/svg+xml" 
          data="/avatar-laptop.svg" 
          className="w-full h-full"
        ></object>
      </div>

      <h2 className="text-4xl font-cursive mt-6">Hi, I'm Priyanshu</h2>
      <h3 className="text-lg font-bold tracking-wide mt-2">SOFTWARE DEVELOPER</h3>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-lg mt-4 leading-relaxed">
        A front-end developer with a passion for building seamless digital experiences.
        With expertise in JavaScript, React, and UI/UX design, I create websites and applications
        that not only function beautifully but also tell a story.
      </p>
    </section>
  );
};

export default Home;
