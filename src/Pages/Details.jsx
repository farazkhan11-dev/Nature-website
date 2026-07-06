import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, TrendingUp, Clock, Ruler, ArrowLeft } from 'lucide-react';
import { places } from '../Data/places.js';
import PlaceCard from '../Components/PlaceCard.jsx';

export default function Details() {
  const { id } = useParams();
  const place = places.find((p) => p.id === id);

  if (!place) return <Navigate to="/places" replace />;

  const related = places.filter((p) => p.category === place.category && p.id !== place.id).slice(0, 3);

  const stats = [
    { icon: TrendingUp, label: 'Elevation', value: place.elevation },
    { icon: Clock, label: 'Duration', value: place.duration },
    { icon: Ruler, label: 'Distance', value: `${place.distanceKm} km` },
    { icon: Star, label: 'Rating', value: `${place.rating} (${place.reviews})` },
  ];

  return (
    <>
      <section className="relative h-[60vh] min-h-[420px overflow-hidden bg-canopy">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to- from-canopy via-canopy/40 to-transparent" />

        <Link
          to="/places"
          className="absolute top-28 left-6 flex items-center gap-2 text-mist/90 hover:text-mist text-sm font-mono"
        >
          <ArrowLeft size={16} /> All places
        </Link>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-clay-light">
              {place.category} · {place.location}
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl text-mist">{place.name}</h1>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/70 rounded-xl p-4 border border-bark/5">
                <Icon size={18} className="text-moss-dark mb-2" />
                <div className="font-display text-lg text-bark">{value}</div>
                <div className="text-xs font-mono uppercase tracking-wide text-bark-light/70">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-bark-light leading-relaxed text-lg">{place.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-moss/10 text-moss-dark border border-moss/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          {place.gallery?.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {place.gallery.map((src, i) => (
                <img key={i} src={src} alt="" className="rounded-xl h-48 w-full object-cover" loading="lazy" />
              ))}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-2xl text-bark mb-6">More {place.category.toLowerCase()} trails</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}