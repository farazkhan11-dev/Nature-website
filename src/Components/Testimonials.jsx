import { Quote } from 'lucide-react';
import { testimonials } from '../data/places.js';

export default function Testimonials() {
  return (
    <section className="bg-mist-dim py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-moss-dark">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-bark">What people found out there</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-white/70 rounded-2xl p-6 border border-bark/5 flex flex-col justify-between"
            >
              <Quote size={20} className="text-clay/60 mb-4" />
              <blockquote className="text-sm text-bark-light leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-bark/10">
                <div className="font-display text-base text-bark">{t.name}</div>
                <div className="text-xs font-mono text-bark-light/70">
                  {t.role} · {t.place}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}