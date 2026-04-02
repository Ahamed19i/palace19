import { motion } from 'motion/react';
import { Heart, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Heart, label: "Passion", value: "100%" },
  { icon: Users, label: "Clients", value: "5000+" },
  { icon: Clock, label: "Expérience", value: "15 Ans" },
  { icon: MapPin, label: "Dakar", value: "Local" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="images/image_int7.jpg"
                alt="Ambiance Swiss Palace"
                className="rounded-3xl shadow-lg transform translate-y-8"
                referrerPolicy="no-referrer"
              />
              <img
                src="/images/ima_mix1.jpg"
                alt="Célébrations au Swiss Palace"
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-red/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              L'Excellence <br />
              <span className="text-brand-red italic">au Cœur du Point E</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Le Swiss Palace est bien plus qu'un simple restaurant ; c'est une véritable institution dakaroise située sur l'Avenue Abdoulaye Fadiga, face au port. 
              </p>
              <p>
                Depuis des années, nous accueillons une clientèle cosmopolite dans un cadre prestigieux ouvert 24h/24 et 7j/7. Que vous veniez pour un petit-déjeuner d'affaires, un déjeuner libanais authentique, ou une soirée lounge avec nos meilleures chichas, nous vous offrons le meilleur de l'hospitalité sénégalaise alliée au raffinement international.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="bg-brand-red/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-brand-red" size={24} />
                  </div>
                  <p className="text-2xl font-serif font-bold">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
