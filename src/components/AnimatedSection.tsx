"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  viewport?: typeof viewportOptions;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  stagger = false,
  viewport = viewportOptions,
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger ? staggerContainer : fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}
