import { motion } from 'framer-motion';

/**
 * Reusable page banner used on interior pages (Places, Gallery, About, Contact).
 * `eyebrow` is a short mono label, `title` is the display headline.
 */
export default function Header({ eyebrow, title, description, image }) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-canopy text-mist">
      <div className="absolute inset-0 bg-contour bg-[length:200px_200px opacity-60" />
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to- from-canopy via-canopy/80 to-canopy/40" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-3xl mx-auto text-center"
      >
        {eyebrow && (
          <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-clay-light mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-medium text-balance">{title}</h1>
        {description && (
          <p className="mt-4 text-mist/70 leading-relaxed max-w-xl mx-auto">{description}</p>
        )}
      </motion.div>
    </section>
  );
}