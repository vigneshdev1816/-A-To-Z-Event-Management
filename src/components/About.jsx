import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiUsers, FiStar } from 'react-icons/fi';

const stats = [
  { icon: FiAward, value: '10+', label: 'Years Experience' },
  { icon: FiHeart, value: '500+', label: 'Events Hosted' },
  { icon: FiUsers, value: '50+', label: 'Team Members' },
  { icon: FiStar, value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Creating Magical Moments Since 2015
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A to Z - Anbu Events has been at the forefront of premium event planning, 
              transforming ordinary gatherings into extraordinary experiences. Our passionate 
              team of event professionals brings creativity, precision, and dedication to every 
              celebration we create.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From intimate private gatherings to grand corporate galas, we believe every event 
              deserves the same level of attention and excellence. Our commitment to quality and 
              client satisfaction has earned us recognition as one of the leading event 
              planning companies in the region.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-off-white rounded-xl"
                >
                  <stat.icon className="text-gold text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-heading font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80"
                  alt="Wedding event"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80"
                  alt="Corporate event"
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80"
                  alt="Birthday party"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80"
                  alt="Private event"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            {/* Gold accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-gold rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}