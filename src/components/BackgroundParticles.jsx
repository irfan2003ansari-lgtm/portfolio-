import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 19) % 100}%`,
  size: 3 + (index % 5),
  delay: (index % 7) * 0.35,
}));

export default function BackgroundParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-15%] top-[-20%] h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[130px]" />
      <div className="absolute bottom-[-25%] right-[-10%] h-[42rem] w-[42rem] rounded-full bg-fuchsia-500/20 blur-[150px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/50"
          style={{
            left: particle.left,
            top: particle.top,
            height: particle.size,
            width: particle.size,
          }}
          animate={{ opacity: [0.15, 0.8, 0.15], y: [-12, 18, -12] }}
          transition={{
            repeat: Infinity,
            duration: 5 + (particle.id % 5),
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
