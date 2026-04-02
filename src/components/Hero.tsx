import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      {/* Background Pattern/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="public/images/image_int4.jpg"
          alt="Swiss Palace Night Ambiance"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white via-transparent to-brand-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-brand-red/10 text-brand-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            🏛️ Dakar Point E | Ouvert 24h/24 & 7j/7
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 tracking-tighter">
            L'Élégance <span className="text-brand-red italic">Culinaire</span> <br />
            & <span className="text-brand-gold italic">Lounge</span> <br />
            au <span className="underline decoration-brand-red underline-offset-8">Swiss Palace</span>.
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Une institution mythique au cœur du Point E. Découvrez une fusion parfaite entre gastronomie libanaise, saveurs internationales et soirées lounge inoubliables.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group shadow-xl hover:bg-brand-red transition-colors"
            >
              Voir la Carte
              <ShoppingBag size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold flex items-center gap-2 group shadow-xl hover:bg-white transition-colors"
            >
              Réserver une table
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="../public/images/ima_nour3.jpg"
              alt="Plateau Royal - Fruits de Mer"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-black rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <p className="text-brand-red font-serif font-bold text-xl italic">"Le Plateau Royal est divin !"</p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">— Client Satisfait</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
