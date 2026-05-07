import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, GitBranch, Send } from "lucide-react";
import { profile } from "../data/portfolio";

const roles = ["Java Full Stack Developer", "Software Developer", "React Developer", "Backend Learner"];

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = deleting ? 55 : 95;
    const timer = setTimeout(() => {
      if (!deleting && letterIndex === word.length) {
        setTimeout(() => setDeleting(true), 650);
        return;
      }
      if (deleting && letterIndex === 0) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }
      setLetterIndex((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, letterIndex, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

export default function Hero() {
  const typedRole = useTyping(roles);

  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-white/[0.06] px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur">
            Java full-stack developer portfolio
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Hi, I am {profile.shortName}.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              {typedRole}
              <span className="text-cyan-200">|</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I am a full-stack developer interested in building reliable software,
            clean web interfaces, and Java backend applications. I am currently
            sharpening my Java full-stack skills through industrial training at QSpiders.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects">
              <Send size={18} />
              View projects
            </a>
            <a className="btn-secondary" href={profile.resume} download>
              <Download size={18} />
              Download CV
            </a>
            <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[28rem]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 opacity-80 blur-2xl" />
          <div className="glass-card relative grid h-full place-items-center overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_34%)]" />
            <img
              className="relative h-full w-full object-cover"
              src={profile.image}
              alt={`${profile.name} profile portrait`}
            />
          </div>
          <motion.a
            className="absolute -bottom-5 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-cyan-100 backdrop-blur"
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.7 }}
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
