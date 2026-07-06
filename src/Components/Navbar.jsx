import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/places', label: 'Places' },
  { to: '/about', label: 'About Us' },
  { to: '/subscription', label: 'Subscription' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canopy-dark/90 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-mist" onClick={() => setOpen(false)}>
          <Mountain size={22} className="text-clay" strokeWidth={2.2} />
          <span className="font-display text-xl tracking-tight">Wildpath</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 transition-colors ${
                    isActive ? 'text-clay-light' : 'text-mist/80 hover:text-mist'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px bg-clay rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-mist"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-canopy-dark/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 font-body text-mist">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'text-clay-light' : 'text-mist/80')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}