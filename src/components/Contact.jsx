import { motion } from "framer-motion";
import { AtSign, GitBranch, Mail } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/portfolio";

export default function Contact() {
  const emailLink = `mailto:${profile.email}?subject=Portfolio%20Contact%20-%20Java%20Full%20Stack%20Opportunity&body=Hi%20Irfan%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A`;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let us connect for software opportunities."
      description="Reach out for Java full-stack roles, internships, collaborations, or project discussions."
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[var(--text)]">Contact details</h3>
          <p className="mt-3 text-[var(--muted)]">
            I am open to learning-focused opportunities and practical software
            development work.
          </p>
          <div className="mt-8 space-y-4">
            <a className="contact-link" href={emailLink}>
              <Mail size={19} />
              {profile.email}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={19} />
              github.com/irfan2003ansari-lgtm
            </a>
            <a className="contact-link" href={profile.instagram} target="_blank" rel="noreferrer">
              <AtSign size={19} />
              instagram.com/irfan_141_
            </a>
          </div>
        </motion.div>

        <motion.div
          className="glass-card flex flex-col justify-between p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-[var(--text)]">Prefer email?</h3>
            <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
              You can contact me directly through email for Java full-stack roles,
              internships, collaborations, or project discussions.
            </p>
          </div>
          <a className="btn-primary mt-8 justify-center" href={emailLink}>
            <Mail size={18} />
            Email me
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
