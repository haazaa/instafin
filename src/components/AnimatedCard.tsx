"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cardHover, fadeUp } from "@/lib/animations";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: AnimatedCardProps) {
  const shouldReduce = useReducedMotion();

  const baseClasses = "bg-white rounded-xl shadow-sm";
  const hoverClasses =
    hover && !shouldReduce
      ? "hover:shadow-md transition-shadow duration-300"
      : "";

  if (shouldReduce) {
    return (
      <div className={`${baseClasses} ${hoverClasses} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={delay ? { delay } : undefined}
      whileHover={
        hover
          ? {
              ...cardHover,
              transition: { ...cardHover.transition, ease: "easeInOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
