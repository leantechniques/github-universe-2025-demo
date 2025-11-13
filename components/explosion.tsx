"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";

interface ExplosionProps {
  x: number;
  y: number;
  id: string;
  onComplete: (id: string) => void;
}

export function Explosion({ x, y, id, onComplete }: ExplosionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(id);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  // Generate random particles - memoized to prevent re-generation on re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 360) / 12;
      // eslint-disable-next-line react-hooks/purity -- Random values are intentional for animation variety
      const distance = 50 + Math.random() * 50;
      const xOffset = Math.cos((angle * Math.PI) / 180) * distance;
      const yOffset = Math.sin((angle * Math.PI) / 180) * distance;
      
      return {
        id: i,
        xOffset,
        yOffset,
        // eslint-disable-next-line react-hooks/purity -- Random values are intentional for animation variety
        scale: 0.5 + Math.random() * 0.5,
        // eslint-disable-next-line react-hooks/purity -- Random values are intentional for animation variety
        duration: 0.6 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{ left: x, top: y }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
          initial={{
            x: 0,
            y: 0,
            scale: particle.scale,
            opacity: 1,
          }}
          animate={{
            x: particle.xOffset,
            y: particle.yOffset,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Center flash */}
      <motion.div
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
