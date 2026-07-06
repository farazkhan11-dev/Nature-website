import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Send, ArrowRight } from 'lucide-react';

export default function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      toast.error('Enter a valid email to subscribe.');
      return;
    }
    toast.success('Subscribed. New trails land in your inbox monthly.');
    setEmail('');
  };

  return (
    <section className="relative bg-canopy-dark py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-contour bg-[length:200px_200px opacity-40" />
      <div className="relative max-w-2xl mx-auto text-center">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-clay-light">
          The dispatch
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-mist">
          One new trail, every month
        </h2>
        <p className="mt-3 text-mist/60 text-sm max-w-md mx-auto">
          No spam, no gear ads — just a single, well-scouted place worth visiting.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full sm:w-72 px-5 py-3 rounded-full bg-mist/10 border border-mist/20 text-mist placeholder:text-mist/40 focus:outline-none focus:ring-2 focus:ring-clay/60 transition"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-clay text-canopy-dark font-medium hover:bg-clay-light transition-colors"
          >
            Subscribe <Send size={16} />
          </button>
        </form>

        <Link
          to="/subscription"
          className="group mt-6 inline-flex items-center gap-1 text-sm text-mist/60 hover:text-mist transition-colors"
        >
          Or see full membership plans
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}