import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A modern stack for fast, beautiful apps."
      description="Animated cards and progress bars showcase frontend, backend, and tool knowledge."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <group.icon size={22} />
              </span>
              <h3 className="text-xl font-semibold text-[var(--text)]">{group.title}</h3>
            </div>
            <div className="space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-[var(--text)]">{skill.name}</span>
                    <span className="text-[var(--muted)]">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
