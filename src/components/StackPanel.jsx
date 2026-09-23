function StackPanel({ stack, removeFromStack, removeAll }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-2xs">
      {/* Header */}
      <h3 className="text-base font-bold text-slate-900">
        Your Stack
      </h3>
      <p className="text-xs text-slate-400 mt-0.5 mb-4">
        {stack.length} Technology Selected
      </p>

      {/* Selected Items */}
      {stack.length === 0 ? (
        <div className="py-6 text-center text-xs text-slate-400">
          No technologies added yet.
        </div>
      ) : (
        <div className="space-y-2.5">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="border border-gray-200/90 rounded-xl p-2.5 sm:p-3 flex items-center justify-between bg-white"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-5 h-5 object-contain shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate leading-tight">
                    {tech.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    {tech.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromStack(tech.id)}
                className="text-slate-400 hover:text-slate-600 text-xs p-1 cursor-pointer transition leading-none font-bold"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {stack.length > 0 && (
        <button
          onClick={removeAll}
          className="w-full mt-4 py-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 text-xs font-semibold transition cursor-pointer text-center"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default StackPanel;