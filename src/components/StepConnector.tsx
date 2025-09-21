"use client";

import { motion } from "framer-motion";
import { pathDraw } from "@/lib/animations";

interface StepConnectorProps {
  className?: string;
}

export default function StepConnector({ className = "" }: StepConnectorProps) {
  return (
    <motion.svg
      className={className}
      width="100"
      height="20"
      viewBox="0 0 100 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M10 10 L90 10"
        stroke="#E2E8F0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={pathDraw.transition}
      />
      <motion.circle
        cx="10"
        cy="10"
        r="3"
        fill="#3B82F6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.circle
        cx="50"
        cy="10"
        r="3"
        fill="#10B981"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
      <motion.circle
        cx="90"
        cy="10"
        r="3"
        fill="#8B5CF6"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />
    </motion.svg>
  );
}
