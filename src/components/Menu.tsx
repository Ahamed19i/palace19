import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = [
  { id: 'libanais', name: 'Spécialités Libanaises' },
  { id: 'burgers', name: 'Burgers & Brunch' },
  { id: 'grillades', name: 'Grillades & Crustacés' },
  { id: 'chicha', name: 'Espace Chicha' },
];

const menuItems = [
  {
    id: 1,
    category: 'libanais',
    name: "Mezzé Libanais Royal",
    description: "Assortiment complet de houmous, moutabal, falafels, kebbé et labneh servi avec notre pain maison.",
    price: "12.000 FCFA",
    image: "/images/ima_nour11.avif",
  },
  {
    id: 2,
    category: 'libanais',
    name: "Chawarma Poulet",
    description: "Poulet mariné, crème d'ail, cornichons et frites maison.",
    price: "4.500 FCFA",
    image: "/images/ima_nour10.png",
  },
  {
    id: 3,
    category: 'burgers',
    name: "Swiss Palace Brunch",
    description: "Œuf au plat sur toast brioché, sauce hollandaise et accompagnements gourmands.",
    price: "7.500 FCFA",
    image: "public/images/ima_nour13.jpg",
  },
  
  {
    id: 4,
    category: 'grillades',
    name: "Plateau Royal de la Mer",
    description: "Langoustes grillées, poissons du jour, crevettes tigrées et frites maison.",
    price: "25.000 FCFA",
    image: "/images/ima_nour12.jpg",
  },
  {
    id: 10,
    category: 'grillades',
    name: "Plateau Royal de la Mer",
    description: "Langoustes grillées, poissons du jour, crevettes tigrées et frites maison.",
    price: "25.000 FCFA",
    image: "/images/ima_nour9.jpg",
  },
  {
    id: 6,
    category: 'libanais',
    name: "Taboulé Vert",
    description: "Persil frais, tomates, oignons et boulghour, le tout finement haché.",
    price: "3.500 FCFA",
    image: "/images/image_nouri_lib1.jpg",
  },
  {
    id: 7,
    category: 'libanais',
    name: "Salade de Chèvre Chaud",
    description: "Mélange de jeunes pousses, toasts au chèvre frais et herbes de Provence.",
    price: "6.000 FCFA",
    image: "/images/ima_nour8.jpg",
  },
  {
    id: 8,
    category: 'chicha',
    name: "Chicha Double Pomme",
    description: "Le classique indémodable pour une expérience authentique.",
    price: "5.000 FCFA",
    image: "/images/chicha2.jpg",
  },
  {
    id: 9,
    category: 'chicha',
    name: "Chicha Double Pomme",
    description: "Le classique indémodable pour une expérience authentique.",
    price: "5.000 FCFA",
    image: "/images/chicha3.jpg",
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('libanais');
  const whatsappNumber = "221338233333";

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const handleOrder = (itemName: string) => {
    const message = encodeURIComponent(`Bonjour Swiss Palace, je souhaite commander : ${itemName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4 text-white"
          >
            Notre <span className="text-brand-gold italic">Carte</span> Exclusive
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-[0.2em] text-sm font-bold">
            Une sélection raffinée par nos chefs
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 border",
                activeCategory === cat.id
                  ? "bg-brand-gold text-brand-black border-brand-gold shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-[2rem] overflow-hidden bg-gray-900/50 border border-white/5"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-brand-gold font-bold text-sm tracking-widest">{item.price}</span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleOrder(item.name)}
                      className="bg-brand-gold text-brand-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-colors"
                    >
                      <ShoppingCart size={18} />
                      Commander
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
