import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiPenTool, FiCoffee, FiMusic, FiCamera, FiTrendingUp, FiTruck } from 'react-icons/fi';

const services = [
  {
    icon: FiCalendar,
    title: 'Event Planning & Coordination',
    description: 'Complete end-to-end planning including concept creation, budgeting, scheduling, and execution. Ensures all activities are organized and delivered on time.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f5507f5291?w=600&q=80',
  },
  {
    icon: FiMapPin,
    title: 'Venue Selection & Setup',
    description: 'Identifying and booking ideal venues. Includes stage setup, seating, lighting, and infrastructure preparation.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  },
  {
    icon: FiPenTool,
    title: 'Theme Decoration & Design',
    description: 'Designing visually appealing spaces with customized themes. Covers stage design, floral arrangements, entrance decor, and branding.',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80',
  },
  {
    icon: FiCoffee,
    title: 'Catering & Hospitality',
    description: 'High-quality food & beverage services. Includes buffet setup, serving staff, welcome drinks, and VIP hospitality.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70066?w=600&q=80',
  },
  {
    icon: FiMusic,
    title: 'Entertainment Services',
    description: 'Organizing DJs, live music, anchors, and performances. Ensures audience engagement and lively atmosphere.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
  },
  {
    icon: FiCamera,
    title: 'Photography & Videography',
    description: 'High-quality photos and videos. Includes candid photography, highlight videos, and professional editing.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244ccda?w=600&q=80',
  },
  {
    icon: FiTrendingUp,
    title: 'Event Marketing & Promotion',
    description: 'Promoting events through social media and campaigns. Increases visibility, reach, and ticket sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52b?w=600&q=80',
  },
  {
    icon: FiTruck,
    title: 'Logistics & On-Site Management',
    description: 'Handling transportation, vendor coordination, equipment setup, and real-time supervision.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
];

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-off-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Complete Event Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From planning to execution, we handle every aspect of your event with
            professional expertise and creative excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute top-4 right-4 bg-gold/90 p-2 rounded-full">
                  <service.icon className="text-primary text-xl" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}