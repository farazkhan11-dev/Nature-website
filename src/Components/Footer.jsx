import { NavLink } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { FaSquareFacebook, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-canopy-dark text-mist/80 border-t border-mist/10">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-mist mb-3">
            <Mountain size={20} className="text-clay" />
            <span className="font-display text-lg">Wildpath</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            A field guide to trails, forests, and coastlines worth the walk in.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-moss-light mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/places" className="hover:text-mist transition-colors">All places</NavLink></li>
            <li><NavLink to="/subscription" className="hover:text-mist transition-colors">Subscription</NavLink></li>
            <li><NavLink to="/about" className="hover:text-mist transition-colors">About Wildpath</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-moss-light mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/contact" className="hover:text-mist transition-colors">Contact us</NavLink></li>
            <li><a href="#" className="hover:text-mist transition-colors">Trail safety</a></li>
            <li><a href="#" className="hover:text-mist transition-colors">Report an issue</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase text-moss-light mb-4">Follow</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-clay-light transition-colors"><FaSquareFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-clay-light transition-colors"><FaSquareInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-clay-light transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-mist/10 py-5 px-6 text-center text-xs font-mono text-mist/50">
        © {new Date().getFullYear()} Wildpath. Built by FarazAhmad
      </div>
    </footer>
  );
}