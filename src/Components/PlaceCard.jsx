import { Link } from 'react-router-dom';
import { Star, TrendingUp, Clock } from 'lucide-react';

const difficultyColor = {
  Easy: 'text-moss-light border-moss-light/40',
  Moderate: 'text-clay-light border-clay-light/40',
  Hard: 'text-clay border-clay/50',
};

export default function PlaceCard({ place }) {
  return (
    <Link
      to={`/places/${place.id}`}
      className="group block rounded-2xl overflow-hidden bg-white/60 border border-bark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to- from-black/60 via-black/0 to-black/0" />
        <span
          className={`absolute top-3 left-3 text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-canopy-dark/70 backdrop-blur-sm border ${difficultyColor[place.difficulty] || 'text-mist border-mist/30'}`}
        >
          {place.difficulty}
        </span>
        <div className="absolute bottom-3 left-3">
          <span className="block text-mist font-display text-lg leading-tight">{place.location}</span>
          <span className="block text-mist/70 text-xs font-mono uppercase tracking-wide">{place.country}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-bark leading-snug">{place.name}</h3>
          <span className="shrink-0 flex items-center gap-1 text-sm text-clay-dark font-mono">
            <Star size={14} fill="currentColor" strokeWidth={0} />
            {place.rating}
          </span>
        </div>

        <p className="mt-2 text-sm text-bark-light leading-relaxed line-clamp-2">{place.description}</p>

        <div className="mt-4 flex items-center gap-4 text-xs font-mono text-bark-light/80">
          <span className="flex items-center gap-1">
            <TrendingUp size={13} /> {place.elevation}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {place.duration}
          </span>
          <span>{place.distanceKm} km</span>
        </div>
      </div>
    </Link>
  );
}