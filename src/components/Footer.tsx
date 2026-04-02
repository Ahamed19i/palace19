export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="bg-brand-red p-1 rounded-lg mb-4 w-16 h-16 flex items-center justify-center overflow-hidden">
            <img 
              src="../public/images/logo_palace.png" 
              alt="Swiss Palace Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const text = document.createElement('span');
                text.className = 'text-white font-bold text-xl';
                text.innerText = 'SP';
                e.currentTarget.parentElement?.appendChild(text);
              }}
            />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter">
            Swiss <span className="text-brand-red">Palace</span> — Dakar
          </span>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
            Restaurant, Lounge & Bar au Point E | Ouvert 24h/24
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://www.facebook.com/restaurantswisspalace/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Facebook</a>
        </div>

        <p className="text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Swiss Palace Dakar. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
