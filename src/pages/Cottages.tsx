import { motion } from 'motion/react';
import { Star, Users, Wifi, Coffee, Wind, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const cottages = [
  {
    id: 'willow',
    name: 'The Willow Suite',
    description: 'A cozy, intimate space perfect for couples. Features a private deck overlooking the willow pond and a wood-burning stove.',
    price: 250,
    guests: 2,
    amenities: ['King Bed', 'Private Deck', 'Wood Stove', 'Kitchenette'],
    images: ['willow1', 'willow2', 'willow3']
  },
  {
    id: 'garden',
    name: 'Garden View Cabin',
    description: 'Spacious cabin with panoramic views of our organic gardens. Ideal for small families or a friends getaway.',
    price: 350,
    guests: 4,
    amenities: ['2 Queen Beds', 'Full Kitchen', 'Fire Pit', 'Garden Access'],
    images: ['garden1', 'garden2', 'garden3']
  },
  {
    id: 'orchard',
    name: 'The Orchard House',
    description: 'Our largest accommodation, set amidst the apple orchard. Features a large dining area perfect for farm-to-table meals.',
    price: 500,
    guests: 6,
    amenities: ['3 Bedrooms', 'Chef\'s Kitchen', 'Large Patio', 'Orchard Views'],
    images: ['orchard1', 'orchard2', 'orchard3']
  }
];

export default function Cottages() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-forest mb-6"
          >
            Our Cottages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Each of our eco-friendly cottages is uniquely designed to provide a luxurious yet sustainable stay. Built with reclaimed materials and powered by renewable energy.
          </motion.p>
        </div>

        <div className="space-y-24">
          {cottages.map((cottage, index) => (
            <motion.div 
              key={cottage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image Gallery */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src={`https://picsum.photos/seed/${cottage.images[0]}/800/800`} 
                  alt={cottage.name} 
                  className="col-span-2 w-full h-80 object-cover rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={`https://picsum.photos/seed/${cottage.images[1]}/400/400`} 
                  alt={`${cottage.name} interior`} 
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={`https://picsum.photos/seed/${cottage.images[2]}/400/400`} 
                  alt={`${cottage.name} detail`} 
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-serif text-forest">{cottage.name}</h2>
                <div className="flex items-center space-x-6 text-gray-600">
                  <span className="flex items-center"><Users className="w-5 h-5 mr-2 text-earth" /> {cottage.guests} Guests</span>
                  <span className="flex items-center"><Star className="w-5 h-5 mr-2 text-earth" /> From ${cottage.price}/night</span>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {cottage.description}
                </p>
                
                <div>
                  <h3 className="text-xl font-serif text-forest mb-4">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {cottage.amenities.map(amenity => (
                      <li key={amenity} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-earth rounded-full mr-3"></div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link 
                    to={`/booking?cottage=${cottage.id}`}
                    className="bg-forest hover:bg-forest-light text-cream px-8 py-4 rounded-full font-medium text-lg transition-colors inline-block"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
