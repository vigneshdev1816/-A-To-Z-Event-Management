import { motion } from 'framer-motion';
import { FiMessageSquare, FiCalendar, FiCheckCircle, FiGift } from 'react-icons/fi';

const steps = [
  {
    icon: FiMessageSquare,
    title: 'Consultation',
    description: 'We meet to discuss your vision, preferences, and requirements for the perfect event.',
  },
  {
    icon: FiCalendar,
    title: 'Planning',
    description: 'We create a detailed timeline, select vendors, and design every aspect of your event.',
  },
  {
    icon: FiCheckCircle,
    title: 'Execution',
    description: 'We coordinate all activities, manage vendors, and ensure everything runs smoothly.',
  },
  {
    icon: FiGift,
    title: 'Delivery',
    description: 'You enjoy your perfect event while we handle all the behind-the-scenes details.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-off-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Our Process
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A proven methodology that ensures your event is executed to perfection
          </p>
        </motion.div>

        {/* Desktop: Timeline view */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold to-gold" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center relative z-10">
                  <step.icon className="text-primary text-xl" />
                </div>
                <span className="inline-block w-8 h-8 -mt-12 mb-4 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical view */}
        <div className="md:hidden">
          <div className="relative pl-12">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute left-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <step.icon className="text-primary" />
                </div>
                <span className="absolute left-3 -top-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}