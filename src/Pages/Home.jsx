import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Leaf, Map } from 'lucide-react';
import PlaceCard from '../Components/PlaceCard.jsx';
import Testimonials from '../Components/Testimonials.jsx';
import Subscription from '../Components/Subscription.jsx';
import { places } from '../Data/places.js';

const stats = [
  { label: 'Trails logged', value: '640+' },
  { label: 'Countries', value: '38' },
  { label: 'Avg. rating', value: '4.7' },
];

export default function Home() {
  const featured = places.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-canopy text-mist">
        <div className="absolute inset-0 bg-contour bg-[length:220px_220px opacity-50" />
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to- from-canopy via-canopy/70 to-canopy-dark/40" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-clay-light mb-5"
          >
            A field guide to wild places
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-medium leading-[1.05] max-w-3xl text-balance"
          >
            Find the trail before you find the trailhead.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-mist/70 max-w-xl leading-relaxed"
          >
            Wildpath is a hand-scouted map of forests, ridgelines, waterfalls, and
            coastlines — with the honest details that matter: real elevation,
            real difficulty, and what the weather actually does up there.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/places"
              className="group flex items-center gap-2 bg-clay text-canopy-dark font-medium px-6 py-3 rounded-full hover:bg-clay-light transition-colors"
            >
              Browse trails
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-full border border-mist/25 text-mist/90 hover:border-mist/50 transition-colors"
            >
              Why Wildpath
            </Link>
          </motion.div>

          <div className="mt-16 grid grid-cols-3 max-w-md gap-6 font-mono">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl text-clay-light">{s.value}</div>
                <div className="text-xs text-mist/50 uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wildpath */}
      <section className="py-24 px-6 bg-mist">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Compass,
              title: 'Scouted, not scraped',
              body: 'Every listing is walked and verified by someone on our team before it goes live.',
            },
            {
              icon: Map,
              title: 'Honest difficulty',
              body: 'No inflated ratings. If a trail is exposed, steep, or tide-dependent, we say so plainly.',
            },
            {
              icon: Leaf,
              title: 'Leave no trace',
              body: 'We link each listing to the local land steward and pack-out guidance where it applies.',
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon size={26} className="text-moss-dark" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl text-bark">{title}</h3>
              <p className="mt-2 text-sm text-bark-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured places */}
      <section className="py-8 pb-24 px-6 bg-mist">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-moss-dark">
                Recently scouted
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-bark">
                Where to go this month
              </h2>
            </div>
            <Link to="/places" className="hidden sm:flex items-center gap-1 text-sm text-moss-dark hover:text-bark transition-colors">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Subscription />
    </>
  );
}