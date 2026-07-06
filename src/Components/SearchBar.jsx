import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, placeholder = 'Search trails, forests, coasts…' }) {
  return (
    <div className="relative w-full max-w-md">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-bark/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-full bg-white/70 border border-bark/10 text-sm text-bark placeholder:text-bark/40 focus:outline-none focus:ring-2 focus:ring-moss/50 focus:border-moss transition"
      />
    </div>
  );
}