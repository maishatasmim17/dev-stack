function TechnologyCard({
  tech,
  addToStack,
  stack
}) {
  const added = stack.some((item) => item.id === tech.id);

  // Exact badge styles from Figma design
  const badgeStyles = {
    Popular: "text-blue-500 bg-blue-50 border-blue-200",
    Versatile: "text-emerald-500 bg-emerald-50 border-emerald-200",
    Fast: "text-orange-500 bg-orange-50 border-orange-200",
    Standard: "text-emerald-500 bg-emerald-50 border-emerald-200",
    "Top SQL": "text-blue-500 bg-blue-50 border-blue-200",
    Cache: "text-rose-500 bg-rose-50 border-rose-200",
    Ubiquitous: "text-amber-500 bg-amber-50 border-amber-200",
    Essential: "text-blue-500 bg-blue-50 border-blue-200",
    Robust: "text-blue-500 bg-blue-50 border-blue-200",
    Modern: "text-teal-500 bg-teal-50 border-teal-200",
    Containers: "text-blue-500 bg-blue-50 border-blue-200"
  };

  const badgeClass =
    badgeStyles[tech.badge] || "text-slate-500 bg-slate-50 border-slate-200";

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 flex flex-col justify-between h-full min-h-[305px] shadow-2xs hover:shadow-xs transition-all">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between">
          <img
            src={tech.logo}
            alt={tech.name}
            className="w-8 h-8 object-contain"
          />

          {tech.badge ? (
            <span
              className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${badgeClass}`}
            >
              {tech.badge}
            </span>
          ) : (
            <div className="h-5" />
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 mt-4">
          {tech.name}
        </h3>

        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex items-center justify-between text-xs pt-3 mb-4">
          <span className="bg-gray-50 border border-gray-200/90 text-slate-600 rounded-md px-2 py-0.5 text-[11px] font-medium">
            {tech.category}
          </span>

          <span className="text-[11px] text-slate-400">
            {tech.difficulty}
          </span>

          <span className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </span>
        </div>

        {/* Button exactly like Figma UI Demo */}
        <button
          onClick={() => addToStack(tech)}
          className="w-full py-2.5 rounded-lg text-xs font-semibold bg-[#0b0f19] hover:bg-slate-800 text-white transition-all cursor-pointer shadow-xs active:scale-[0.99] flex items-center justify-center gap-1"
        >
          {added ? "✓ Add to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;