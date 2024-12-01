import heroImage from "../assets/images/image-hero-desktop.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="md:max-w-lg space-y-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-snug">
          Empower <span className="text-blue-600">remote teams</span>
        </h1>
        <p className="text-gray-700 text-lg">
          Collaborate effortlessly, no matter where you are. Boost productivity, 
          establish routines, and build stronger connections.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <div className="flex justify-center md:justify-start space-x-6 mt-10">
          <img src="../assets/images/client-databiz.svg" alt="Databiz" className="h-10" />
          <img src="../assets/images/client-audiophile.svg" alt="Audiophile" className="h-10" />
          <img src="../assets/images/client-meet.svg" alt="Meet" className="h-10" />
          <img src="../assets/images/client-maker.svg" alt="Maker" className="h-10" />
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full rounded-lg shadow-md transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
