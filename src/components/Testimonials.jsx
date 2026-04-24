import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    event: 'Wedding',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    text: 'Absolutely magical! Anbu Events transformed our vision into reality. Every detail was perfect, from the romantic decorations to the seamless coordination. Our guests are still talking about it months later!',
  },
  {
    id: 2,
    name: 'David Chen',
    event: 'Corporate Gala',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'Professional, organized, and incredibly creative. They handled our 500-person corporate event flawlessly. The production quality was outstanding, and all our executives were impressed.',
  },
  {
    id: 3,
    name: 'The Johnson Family',
    event: 'Birthday Party',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'Best birthday ever! They created the most amazing celebration for our daughter\'s 10th. The theme was perfect, the activities kept kids engaged, and all the parents commented on how well organized it was.',
  },
  {
    id: 4,
    name: 'Emily & James',
    event: 'Wedding',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf028fdf2?w=150&q=80',
    text: 'From our first meeting, they understood exactly what we wanted. The wedding was beyond our dreams. The attention to detail was incredible, and they made sure we could just enjoy our day without worries.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-off-white relative overflow-hidden">
      <div className="container-custom mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gold"
                />
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} className="text-gold text-xl fill-current" />
                ))}
              </div>

              <FiMessageSquare className="text-gold/30 text-6xl mx-auto mb-4" />

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>

              <div>
                <h4 className="text-primary font-heading font-semibold text-lg">
                  {testimonials[current].name}
                </h4>
                <p className="text-gold text-sm">
                  {testimonials[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <FiChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-gold w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}