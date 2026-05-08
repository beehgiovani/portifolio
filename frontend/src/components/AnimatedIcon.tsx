import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type AnimationType = 'pulse' | 'spin' | 'float' | 'bounce';

export function AnimatedIcon({ icon: Icon, size = 24, color = "var(--primary-gold)", animation = "pulse" }: { icon: LucideIcon, size?: number, color?: string, animation?: AnimationType }) {
  const variants: Variants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    spin: {
      rotate: 360,
      transition: { duration: 8, repeat: Infinity, ease: "linear" }
    },
    float: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
      y: [0, -3, 0],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeOut" }
    }
  };

  return (
    <motion.div animate={animation} variants={variants} className="flex-center">
      <Icon size={size} color={color} strokeWidth={2.5} />
    </motion.div>
  );
}
