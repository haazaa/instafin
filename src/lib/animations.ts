import { Variants } from "framer-motion";

// Animation Design Tokens
export const animationTokens = {
  duration: {
    fast: 0.3,
    normal: 0.55,
    slow: 0.8,
    verySlow: 1.2,
  },
  easing: {
    easeOut: "easeOut",
    easeInOut: "easeInOut",
    spring: "spring",
  },
  spring: {
    stiffness: 300,
    damping: 20,
  },
  stagger: {
    children: 0.09,
    delay: 0.1,
  },
} as const;

// Base Animation Variants
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationTokens.duration.normal,
      ease: animationTokens.easing.easeOut,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: animationTokens.duration.normal,
      ease: animationTokens.easing.easeOut,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animationTokens.duration.normal,
      ease: animationTokens.easing.easeOut,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: animationTokens.duration.normal,
      ease: animationTokens.easing.easeOut,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: animationTokens.duration.normal,
      ease: animationTokens.easing.easeOut,
    },
  },
};

// Container Variants for Staggered Animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationTokens.stagger.children,
      delayChildren: animationTokens.stagger.delay,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Micro-interactions
export const hoverScale = {
  scale: 1.03,
  transition: {
    type: "spring" as const,
    stiffness: animationTokens.spring.stiffness,
    damping: animationTokens.spring.damping,
  },
};

export const tapScale = {
  scale: 0.98,
  transition: {
    type: "spring" as const,
    stiffness: animationTokens.spring.stiffness,
    damping: animationTokens.spring.damping,
  },
};

// Floating Animation
export const float = {
  y: [0, -6, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "linear" as const,
  },
};

// Pulse Animation
export const pulse = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: 2,
    ease: "easeInOut",
  },
};

// SVG Path Draw Animation
export const pathDraw = {
  pathLength: [0, 1],
  transition: {
    duration: 0.9,
    ease: "easeOut" as const,
  },
};

// Page Transition Variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Card Hover Effects
export const cardHover = {
  y: -5,
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

// Button Animations
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(13, 75, 163, 0.12)",
  transition: {
    type: "spring",
    stiffness: animationTokens.spring.stiffness,
    damping: animationTokens.spring.damping,
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    type: "spring",
    stiffness: animationTokens.spring.stiffness,
    damping: animationTokens.spring.damping,
  },
};

// Form Field Animations
export const fieldFocus = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const fieldError = {
  x: [0, -6, 6, -6, 0],
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

// Success Check Animation
export const checkMark = {
  pathLength: [0, 1],
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
};

// Timeline Animation
export const timelineItem = (direction: "left" | "right") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -30 : 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

// Number Count Animation
export const countUp = {
  from: 0,
  duration: 2,
  ease: "easeOut",
};

// Viewport Options for Scroll Animations
export const viewportOptions = {
  once: true,
  amount: 0.2,
  margin: "-100px",
};

export const viewportOptionsStrict = {
  once: true,
  amount: 0.5,
  margin: "-50px",
};
