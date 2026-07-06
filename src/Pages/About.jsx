import Header from '../Components/Header.jsx';
import { Leaf, Compass, Users } from 'lucide-react';

const values = [
  {
    icon: Compass,
    title: 'We walk it first',
    body: 'Nothing goes on Wildpath until someone on our team has hiked it, in the season most people will visit.',
  },
  {
    icon: Leaf,
    title: 'The land comes first',
    body: 'We link every listing to its local land steward or park authority, and flag closures the moment we hear of them.',
  },
  {
    icon: Users,
    title: 'Built with hikers',
    body: 'Reviews, corrections, and photos from the community shape every listing over time.',
  },
];

export default function About() {
  return (
    <>
      <Header
        eyebrow="Our story"
        title="A map made by people who actually went"
        description="Wildpath started as a shared notes document between three friends who kept sending each other coordinates. It still works the same way — just with better maps."
        image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon size={26} className="text-moss-dark" strokeWidth={1.6} />
              <h3 className="mt-4 font-display text-xl text-bark">{title}</h3>
              <p className="mt-2 text-sm text-bark-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-canopy text-mist rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-contour bg-[length:200px_200px opacity-40" />
          <p className="relative font-display text-2xl md:text-3xl leading-snug text-balance">
            "The goal was never to be the biggest trail database. It was to be
            the one you'd trust with your Saturday."
          </p>
          <p className="relative mt-6 text-sm font-mono text-mist/60">— The Wildpath founders</p>
        </div>
      </section>
    </>
  );
}