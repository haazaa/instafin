"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { buttonHover, buttonTap } from "@/lib/animations";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function AnimatedButton({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
}: AnimatedButtonProps) {
  const shouldReduce = useReducedMotion();

  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonProps = {
    type,
    onClick,
    disabled,
    className: `${baseClasses} ${variantClasses[variant]} ${
      sizeClasses[size]
    } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`,
  };

  if (shouldReduce || disabled) {
    return <button {...buttonProps}>{children}</button>;
  }

  return (
    <motion.button
      {...buttonProps}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{
        scale: 0.97,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 20,
        },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
