import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 text-white">
              Venez nous <span className="text-brand-red italic">voir</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Situé au cœur de Dakar, nous vous accueillons dans un cadre chaleureux et moderne.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Adresse</p>
                  <p className="text-gray-400">Avenue Abdoulaye Fadiga, Plateau, Dakar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Téléphone</p>
                  <p className="text-gray-400">+221 33 823 33 33</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">Horaires</p>
                  <p className="text-brand-red font-bold">Ouvert 24h/24</p>
                  <p className="text-gray-400">Tous les jours, sans interruption</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.facebook.com/restaurantswisspalace/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-brand-red transition-colors flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/restaurantswisspalace/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-brand-red transition-colors flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.223456789!2d-17.4600196!3d14.6977725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec17293b1672939%3A0x2e10e117309d03e0!2sRestaurant+Swiss+Palace!5e0!3m2!1sfr!2ssn!4v1711982439000!5m2!1sfr!2ssn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
