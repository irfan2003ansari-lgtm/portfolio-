import { motion } from "framer-motion";
import { Briefcase, Download } from "lucide-react";
import Section from "./Section";
import { profile, timeline } from "../data/portfolio";

export default function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Training, education, and full-stack growth."
      description="A quick CV preview covering my Java full-stack training, engineering background, and software development practice."
    >
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          className="glass-card flex flex-col justify-between p-6 sm:p-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <Briefcase className="text-cyan-300" size={34} />
            <h3 className="mt-5 text-2xl font-semibold text-[var(--text)]">Download my CV</h3>
            <p className="mt-3 text-[var(--muted)]">
              My resume PDF is available here with my education, skills, and
              Java full-stack development training details.
            </p>
          </div>
          <a className="btn-primary mt-8 justify-center" href={profile.resume} download>
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <div className="glass-card p-6 sm:p-8">
          <div className="relative space-y-8 border-l border-cyan-300/25 pl-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
                <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
