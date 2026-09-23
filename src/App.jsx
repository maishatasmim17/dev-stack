import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

import technologies from "./data/technologies";

function App() {
  // Prepopulate with Svelte and Redis to match Figma mockup initial state
  const [stack, setStack] = useState(() => {
    const svelte = technologies.find((t) => t.name === "Svelte");
    const redis = technologies.find((t) => t.name === "Redis");
    return [svelte, redis].filter(Boolean);
  });

  const addToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (!exists) {
      setStack([...stack, tech]);
    }
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <TechnologySection
          technologies={technologies}
          stack={stack}
          addToStack={addToStack}
          removeFromStack={removeFromStack}
          removeAll={removeAll}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;