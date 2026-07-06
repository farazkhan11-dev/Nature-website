export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-body border transition-colors ${
              isActive
                ? 'bg-canopy text-mist border-canopy'
                : 'bg-transparent text-bark border-bark/20 hover:border-moss hover:text-moss-dark'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}