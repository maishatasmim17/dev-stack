import heroImage from "../assets/hero.png";

function Hero() {
  const scrollToTechnologies = () => {
    const el = document.getElementById("technologies");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="w-full py-12 sm:py-20 lg:py-24 pl-8 sm:pl-14 lg:pl-20 xl:pl-24 pr-4 sm:pr-8 lg:pr-10 xl:pr-12">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Column: Heading, Subtitle & CTAs */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Build Your Ideal<br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-500 text-sm sm:text-base lg:text-[17px] max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex items-center gap-3.5 pt-2">
            <button
              onClick={scrollToTechnologies}
              className="px-6 py-2.5 rounded-lg text-white font-semibold text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Explore Technologies
            </button>

            <button
              onClick={scrollToTechnologies}
              className="px-6 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-700 font-semibold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: Isometric 3D Stack Graphic */}
        <div className="flex justify-center lg:justify-end items-center">
          <img
            src={heroImage}
            alt="Development Stack Illustration"
            className="w-[320px] sm:w-[380px] lg:w-[440px] object-contain drop-shadow-sm hover:scale-102 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;