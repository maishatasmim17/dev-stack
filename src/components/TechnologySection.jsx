import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

function TechnologySection({
  technologies,
  stack,
  addToStack,
  removeFromStack,
  removeAll
}) {
  return (
    <section id="technologies" className="w-full py-12 sm:py-18 lg:py-24 pl-8 sm:pl-14 lg:pl-20 xl:pl-24 pr-4 sm:pr-8 lg:pr-10 xl:pr-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore the <span className="text-[#e11d48]">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* 4-Column Layout: 3 Columns of Cards on Left + Sticky Stack Panel on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Columns 1-3: 12 Technology Cards in 3 Columns */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                stack={stack}
                addToStack={addToStack}
              />
            ))}
          </div>

          {/* Column 4: Your Stack Panel in Row 1 */}
          <div className="md:col-span-2 lg:col-span-1 sticky top-24">
            <StackPanel
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;