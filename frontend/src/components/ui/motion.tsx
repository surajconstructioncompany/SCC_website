import { HTMLMotionProps, motion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  ...props
}: MotionWrapperProps & { yOffset?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideInLeft({
  children,
  className,
  delay = 0,
  duration = 0.6,
  xOffset = -50,
  ...props
}: MotionWrapperProps & { xOffset?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  ...props
}: MotionWrapperProps & { delayChildren?: number; staggerChildren?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  yOffset = 30,
  ...props
}: MotionWrapperProps & { yOffset?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
