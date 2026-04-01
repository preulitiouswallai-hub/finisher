import { motion } from 'motion/react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-forest mb-6"
          >
            Our Commitment to the Earth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Sustainability isn't just a buzzword for us; it's the foundation of everything we do. From solar power to regenerative agriculture, we strive to leave the land better than we found it.
          </motion.p>
        </div>

        {/* Interactive Map Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-24"
        >
          <h2 className="text-3xl font-serif text-forest text-center mb-12">Farm Eco-Map</h2>
          <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto bg-cream-dark rounded-2xl overflow-hidden border-2 border-forest-light/20">
            {/* Custom SVG Map */}
            <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {/* Background/Terrain */}
              <rect width="800" height="450" fill="#E8F0E4" />
              <path d="M0,200 Q200,150 400,250 T800,200 L800,450 L0,450 Z" fill="#D4E4CE" />
              
              {/* River */}
              <path d="M-50,350 Q200,400 400,300 T850,350" fill="none" stroke="#A8DADC" strokeWidth="20" strokeLinecap="round" />
              
              {/* Solar Panels Area */}
              <rect x="100" y="80" width="120" height="60" rx="4" fill="#457B9D" opacity="0.8" />
              <text x="160" y="115" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">Solar Array</text>
              
              {/* Cottages */}
              <g transform="translate(450, 150)">
                <rect x="0" y="0" width="40" height="30" fill="#8B5A2B" />
                <polygon points="-5,0 20,-20 45,0" fill="#A67B51" />
                <text x="20" y="45" fill="#2D5A27" fontSize="12" textAnchor="middle">Cottages</text>
              </g>

              {/* Organic Gardens */}
              <g transform="translate(250, 250)">
                <rect x="0" y="0" width="100" height="80" fill="#8B5A2B" opacity="0.6" />
                <line x1="10" y1="20" x2="90" y2="20" stroke="#2D5A27" strokeWidth="4" strokeDasharray="4,4" />
                <line x1="10" y1="40" x2="90" y2="40" stroke="#2D5A27" strokeWidth="4" strokeDasharray="4,4" />
                <line x1="10" y1="60" x2="90" y2="60" stroke="#2D5A27" strokeWidth="4" strokeDasharray="4,4" />
                <text x="50" y="100" fill="#2D5A27" fontSize="12" textAnchor="middle">Organic Gardens</text>
              </g>

              {/* Wind Turbine */}
              <g transform="translate(650, 100)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#718096" strokeWidth="4" />
                <circle cx="0" cy="0" r="4" fill="#4A5568" />
                <path d="M0,0 L-20,-30 L0,-5 Z" fill="#A0AEC0" />
                <path d="M0,0 L30,-10 L5,-5 Z" fill="#A0AEC0" />
                <path d="M0,0 L-10,30 L-5,5 Z" fill="#A0AEC0" />
                <text x="0" y="100" fill="#2D5A27" fontSize="12" textAnchor="middle">Wind Power</text>
              </g>

              {/* Rainwater Harvesting */}
              <g transform="translate(520, 160)">
                <rect x="0" y="0" width="20" height="30" rx="2" fill="#A8DADC" />
                <text x="10" y="45" fill="#2D5A27" fontSize="10" textAnchor="middle">Rainwater</text>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Sun className="w-10 h-10 text-earth" />, title: '100% Renewable', desc: 'Powered entirely by our on-site solar array and wind turbine.' },
            { icon: <Droplets className="w-10 h-10 text-earth" />, title: 'Water Conservation', desc: 'Rainwater harvesting and greywater recycling systems.' },
            { icon: <Leaf className="w-10 h-10 text-earth" />, title: 'Regenerative Ag', desc: 'Building soil health and biodiversity without synthetic chemicals.' },
            { icon: <Wind className="w-10 h-10 text-earth" />, title: 'Zero Waste', desc: 'Comprehensive composting and strict plastic-free policies.' }
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream-dark p-8 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-serif text-forest mb-4">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
