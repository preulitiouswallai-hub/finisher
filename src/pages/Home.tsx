import { motion } from 'motion/react';
import { ArrowRight, CloudSun, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [weather, setWeather] = useState({ temp: 72, condition: 'Sunny' });

  // Simulate weather fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setWeather({ temp: 68, condition: 'Partly Cloudy' });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/farm/1920/1080"
            alt="Green Leaf Farm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Escape to Nature's Embrace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 font-light"
          >
            Experience authentic farm-to-table living in our eco-friendly luxury cottages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/booking"
              className="bg-earth hover:bg-earth-light text-cream px-8 py-4 rounded-full font-medium text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Live Weather Widget */}
        <div className="absolute bottom-8 right-8 bg-cream/90 backdrop-blur-sm text-forest p-4 rounded-2xl shadow-lg flex items-center space-x-4">
          <CloudSun className="w-8 h-8 text-earth" />
          <div>
            <p className="text-sm font-medium uppercase tracking-wider">Current Weather</p>
            <p className="text-2xl font-serif">{weather.temp}&deg;F <span className="text-sm font-sans text-forest-light">{weather.condition}</span></p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-forest mb-6">A Farm-to-Table Experience Like No Other</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nestled in the heart of the countryside, Green Leaf Farm offers a sanctuary for those seeking to reconnect with nature. Our sustainable practices ensure that every aspect of your stay is in harmony with the earth.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Wake up to the sound of roosters, harvest your own organic vegetables for breakfast, and unwind in our thoughtfully designed, eco-friendly cottages.
            </p>
            <Link to="/experiences" className="text-earth font-medium hover:text-earth-light inline-flex items-center space-x-2">
              <span>Discover our experiences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://picsum.photos/seed/harvest/600/800" alt="Harvesting" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/cottage/600/800" alt="Cottage" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Featured Cottages */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-forest mb-4">Our Cottages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Thoughtfully designed spaces that blend rustic charm with modern comfort.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'The Willow Suite', image: 'willow', guests: 2, price: 250 },
              { name: 'Garden View Cabin', image: 'garden', guests: 4, price: 350 },
              { name: 'The Orchard House', image: 'orchard', guests: 6, price: 500 },
            ].map((cottage, index) => (
              <motion.div
                key={cottage.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <img src={`https://picsum.photos/seed/${cottage.image}/800/600`} alt={cottage.name} className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-forest mb-2">{cottage.name}</h3>
                  <div className="flex items-center text-gray-500 mb-4 space-x-4">
                    <span className="flex items-center"><Star className="w-4 h-4 mr-1 text-earth" /> {cottage.guests} Guests</span>
                    <span>${cottage.price} / night</span>
                  </div>
                  <Link to="/cottages" className="text-forest font-medium hover:text-forest-light">View Details &rarr;</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
