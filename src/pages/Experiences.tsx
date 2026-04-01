import { motion } from 'motion/react';
import { Leaf, Tractor, Utensils, Sunrise } from 'lucide-react';

const experiences = [
  {
    title: 'Morning Harvest',
    icon: <Sunrise className="w-8 h-8 text-earth" />,
    description: 'Join our farmers at sunrise to harvest fresh organic vegetables and collect eggs. Learn about sustainable agriculture practices.',
    image: 'harvesting'
  },
  {
    title: 'Farm-to-Table Cooking',
    icon: <Utensils className="w-8 h-8 text-earth" />,
    description: 'Use the ingredients you harvested to prepare a rustic, delicious meal under the guidance of our resident chef.',
    image: 'cooking'
  },
  {
    title: 'Nature Trails',
    icon: <Leaf className="w-8 h-8 text-earth" />,
    description: 'Explore miles of private trails through our protected woodlands. Perfect for bird watching and foraging.',
    image: 'trail'
  },
  {
    title: 'Farm Animal Encounters',
    icon: <Tractor className="w-8 h-8 text-earth" />,
    description: 'Meet our rescue animals, help with feeding time, and learn about the role animals play in a regenerative farm ecosystem.',
    image: 'animals'
  }
];

export default function Experiences() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-forest mb-6"
          >
            Farm Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Immerse yourself in the rhythm of farm life. Our curated experiences are designed to connect you with the land and the food you eat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${exp.image}/800/600`} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                  <div className="bg-cream p-3 rounded-full">
                    {exp.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-cream">{exp.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
