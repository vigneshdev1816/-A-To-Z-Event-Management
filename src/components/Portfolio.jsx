import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const defaultEvents = [
  { id: 1, title: 'Sarah & Michael Wedding', category: 'wedding', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80' },
  { id: 2, title: 'Corporate Gala 2024', category: 'corporate', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { id: 3, title: 'Emma\'s 10th Birthday', category: 'birthday', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80' },
  { id: 4, title: 'Beach Wedding', category: 'wedding', image: 'https://images.unsplash.com/photo-1507504030504-289e018d3e86?w=800&q=80' },
  { id: 5, title: 'Tech Conference', category: 'corporate', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80' },
  { id: 6, title: 'Golden Jubilee', category: 'birthday', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80' },
  { id: 7, title: 'Garden Wedding', category: 'wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80' },
  { id: 8, title: 'Product Launch', category: 'corporate', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80' },
  { id: 9, title: 'Kids Adventure Party', category: 'birthday', image: 'https://images.unsplash.com/photo-1532712938310-34cb3958fb5d?w=800&q=80' },
];

const categories = ['all', 'wedding', 'corporate', 'birthday'];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [events, setEvents] = useState(defaultEvents);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setEvents(prev => [...data, ...prev]);
        }
      })
      .catch(() => {});
  }, []);

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter);

  const currentIndex = selectedImage 
    ? filteredEvents.findIndex(e => e.id === selectedImage.id) 
    : -1;

  const openLightbox = (event) => setSelectedImage(event);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (currentIndex < filteredEvents.length - 1) {
      setSelectedImage(filteredEvents[currentIndex + 1]);
    } else {
      setSelectedImage(filteredEvents[0]);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredEvents[currentIndex - 1]);
    } else {
      setSelectedImage(filteredEvents[filteredEvents.length - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
            Portfolio
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
Explore our collection of breathtaking events we've had the privilege to create.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                filter === cat
                  ? 'bg-gold text-primary'
                  : 'bg-primary/10 text-primary hover:bg-gold hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
                onClick={() => openLightbox(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-sm uppercase tracking-wider">
                    {event.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold mt-1">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl p-2"
              >
                <FiX />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 text-white/60 hover:text-white text-3xl p-2"
              >
                <FiChevronLeft />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 text-white/60 hover:text-white text-3xl p-2"
              >
                <FiChevronRight />
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl max-h-[80vh] mx-16"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <span className="text-gold text-sm uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/60 mt-1">
                    {currentIndex + 1} / {filteredEvents.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}