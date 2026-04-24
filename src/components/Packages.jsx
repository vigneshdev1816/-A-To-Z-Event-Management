import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const packages = [
  {
    name: 'Starter',
    price: '₹50,000',
    description: 'Perfect for small events and gatherings',
    features: [
      'Event planning & coordination',
      'Vendor management',
      'Timeline creation',
      'Basic decoration',
      '1 month of planning support',
      'Guest list management',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹1,50,000',
    description: 'Ideal for mid-size events',
    features: [
      'Everything in Starter',
      'Full planning services',
      'Venue scouting & booking',
      'Theme decoration & design',
      'Photography & videography',
      'Catering coordination',
      '3 months of planning support',
      'Entertainment arrangement',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹3,00,000',
    description: 'Complete event solution for grand celebrations',
    features: [
      'Everything in Standard',
      'Premium decoration & styling',
      'Multiple entertainment options',
      'VIP hospitality',
      'Full-day event coordination team',
      '6 months of planning support',
      'Marketing & promotions',
      'Customized branding',
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2">
            Choose Your Package
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Choose the package that best fits your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:border-gold/50 ${
                pkg.popular ? 'border-gold md:-mt-4 md:mb-4' : 'border-white/10'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-heading font-bold text-gold">
                  {pkg.price}
                </div>
                <p className="text-white/60 text-sm mt-2">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <FiCheck className="text-gold mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919655058949?text=Hi%20Anbu%20Events%2C%20I'm%20interested%20in%20the%20${pkg.name}%20package%20(${pkg.price}).%20Please%20share%20more%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center ${
                  pkg.popular
                    ? 'bg-gold text-primary hover:bg-gold/90'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-primary'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}