const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0">
        <h1 className="text-lg font-semibold">PRIYANSHU</h1>
        <div className="space-x-8">
          <a href="#about" className="text-gray-800 hover:text-black">ABOUT</a>
          <a href="#projects" className="text-gray-800 hover:text-black">PROJECTS</a>
          <a href="#contact" className="text-gray-800 hover:text-black">CONTACT</a>
        </div>
        {/*Dark Mode*/}
        <button className="w-10 h-10 bg-black rounded-full"></button>
      </nav>
      {/* Profile Image */}
      <div className="w-40 h-40 bg-gray-700 rounded-full mt-16"></div>
      {/* Heading */}
      <h2 className="text-4xl font-cursive mt-6">Hi, I'm Priyanshu</h2>
      {/* Subheading */}
      <h3 className="text-lg font-bold tracking-wide mt-2">SOFTWARE DEVELOPER</h3>
      {/* Description */}
      <p className="text-center text-gray-600 max-w-lg mt-4 leading-relaxed">
        A front-end developer with a passion for building seamless digital experiences.
        With expertise in JavaScript, React, and UI/UX design, I create websites and applications
        that not only function beautifully but also tell a story.
      </p>
    </section>
  );
};

export default Home;
