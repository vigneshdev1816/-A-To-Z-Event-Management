import { motion } from 'framer-motion';
import { FiMessageCircle, FiPhone } from 'react-icons/fi';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:+919655058949"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-primary shadow-lg hover:shadow-xl"
        aria-label="Call now"
      >
        <FiPhone className="text-xl" />
      </motion.a>

      <motion.a
        href="https://wa.me/919655058949?text=Hi%20Anbu%20Events%2C%20I%20would%20like%20to%20book%20an%20event.%20Please%20help%20me%20with%20the%20details."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl animate-soft-pulse"
        aria-label="WhatsApp"
      >
        <FiMessageCircle className="text-xl" />
      </motion.a>
    </div>
  );
}