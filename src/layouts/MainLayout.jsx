import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

/**
 * Signature element: a "trail" progress line pinned to the right edge on
 * larger screens. As the person scrolls down a page, a marker travels down
 * the line — a small nod to following a path, rather than a generic
 * scroll-to-top button.
 */
function TrailProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 h-64 w-6 flex-col items-center">
      <div className="relative h-full w-px bg-bark/15">
        <div
          className="absolute top-0 left-0 w-px bg-clay transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-clay border-2 border-mist shadow-sm transition-[top] duration-150"
          style={{ top: `calc(${progress * 100}% - 6px)` }}
        />
      </div>
    </div>
  );
}

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-mist">
      <Toaster position="bottom-center" toastOptions={{ style: { fontFamily: 'Inter, sans-serif' } }} />
      <Navbar />
      <TrailProgress />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}