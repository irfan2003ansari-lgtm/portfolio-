import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"
      style={{ scaleX }}
    />
  );
}
