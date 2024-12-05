import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accentColor: string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  description,
  features,
  icon,
  accentColor,
}: ServiceModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                duration: 0.5,
                opacity: { duration: 0.2 },
              }}
              className="relative glass-card-modal w-full max-w-2xl pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                    style={{ background: `${accentColor}15` }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl rotate-45 transition-all duration-500"
                      style={{ background: `${accentColor}10` }}
                    ></div>
                    <div className="relative z-10 text-white">{icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{title}</h3>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{ background: `${accentColor}10` }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: accentColor }}
                        ></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
