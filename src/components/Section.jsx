import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--text)] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
