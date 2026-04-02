import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'À Propos', href: '#a-propos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-brand-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#accueil" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-1 rounded-lg rotate-3 group-hover:rotate-0 transition-transform overflow-hidden w-12 h-12 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Swiss Palace Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('p-2');
                const icon = document.createElement('div');
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed text-white"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Z"/><path d="m18 8 4 4"/><path d="m2 2 8 8"/><path d="m21 2-5 5"/><path d="m22 21-5-5"/><path d="m2 22 5-5"/><path d="m12 12 5 5"/></svg>';
                e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
              }}
            />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
            Swiss <span className="text-brand-red">Palace</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-brand-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-red transition-all transform hover:-translate-y-0.5"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold hover:text-brand-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setIsOpen(false)}
              className="bg-brand-red text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Réserver Maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
