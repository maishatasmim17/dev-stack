import technologies from "../data/technologies";
import TechnologyCard from "./TechnologyCard";

const TechnologyList = ({ addToStack, removeFromStack = () => {}, stack = [] }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-slate-50">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-slate-900 tracking-tight">
        Explore the Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            stack={stack}
            addToStack={addToStack}
            removeFromStack={removeFromStack}
          />
        ))}
      </div>
    </section>
  );
};


export default TechnologyList;