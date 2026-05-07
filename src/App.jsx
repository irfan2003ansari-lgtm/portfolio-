import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import ScrollProgress from "./components/ScrollProgress";
import Section from "./components/Section";
import Skills from "./components/Skills";
import { aboutCards, profile, projects } from "./data/portfolio";
import { AtSign, Briefcase, GitBranch, Mail, MapPin, Sparkles, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative grid place-items-center">
        <motion.div
          className="h-20 w-20 rounded-full border border-cyan-300/20 border-t-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
        <span className="absolute text-sm font-semibold tracking-[0.35em] text-cyan-100">
          IRFAN
        </span>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div data-theme={theme} className="portfolio-shell min-h-screen overflow-hidden">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <BackgroundParticles />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="About me"
          title="Electronics graduate building toward software engineering."
          description="I combine an engineering mindset with hands-on Java full-stack training, frontend practice, and a strong interest in software development."
        >
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              className="glass-card p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Sparkles size={16} />
                Interested in software projects and developer roles
              </div>
              <p className="text-lg leading-8 text-[var(--muted)]">
                Hi, I am {profile.name}, a full-stack developer with a B.Tech in
                Electronics and Communication. I am focused on software development
                and currently doing industrial training at QSpiders as a Java Full
                Stack Developer from August 2025.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {aboutCards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-3xl font-bold text-[var(--text)]">{card.value}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{card.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card space-y-5 p-6 sm:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)]">Education</h3>
                <p className="mt-2 text-[var(--muted)]">
                  B.Tech in Electronics and Communication with a strong interest in
                  programming, web applications, and practical software engineering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)]">Training</h3>
                <p className="mt-2 text-[var(--muted)]">
                  Industrial training at QSpiders from August 2025 as a Java Full
                  Stack Developer, working with Java, web development, databases,
                  and professional developer tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2 text-sm text-[var(--muted)]">
                <span className="pill"><MapPin size={15} /> {profile.location}</span>
                <a className="pill" href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
                <a className="pill" href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a>
                <a className="pill" href={profile.instagram} target="_blank" rel="noreferrer"><AtSign size={15} /> Instagram</a>
                <span className="pill"><Briefcase size={15} /> Java Full Stack</span>
              </div>
            </motion.div>
          </div>
        </Section>

        <Skills />

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work with practical polish."
          description="Each project card is ready for your screenshots, live links, and GitHub repositories."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass-card group overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  {project.image ? (
                    <button
                      className="h-full w-full cursor-zoom-in"
                      type="button"
                      onClick={() => setSelectedPhoto({ src: project.image, title: project.title })}
                      aria-label={`Open ${project.title} photo`}
                    >
                      <img
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={project.image}
                        alt={`${project.title} preview`}
                      />
                    </button>
                  ) : (
                    <>
                      <div className="absolute inset-6 rounded-2xl border border-white/20 bg-black/15 shadow-2xl backdrop-blur-md" />
                      <div className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                        Project preview
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.gallery && (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {project.gallery.map((image) => (
                        <button
                          key={image}
                          className="h-16 w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10"
                          type="button"
                          onClick={() => setSelectedPhoto({ src: image, title: project.title })}
                          aria-label={`Open ${project.title} gallery photo`}
                        >
                          <img
                            className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            src={image}
                            alt={`${project.title} gallery`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex gap-3">
                    <a
                      className="btn-primary flex-1 justify-center"
                      href={project.liveUrl || "#contact"}
                      target={project.liveUrl ? "_blank" : undefined}
                      rel={project.liveUrl ? "noreferrer" : undefined}
                    >
                      {project.liveUrl ? "Live demo" : "Discuss project"}
                    </a>
                    {project.githubUrl && (
                      <a
                        className="btn-secondary flex-1 justify-center"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitBranch size={17} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Resume />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[120] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPhoto.title} photo preview`}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur transition hover:bg-white hover:text-black"
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
              >
                <X size={22} />
              </button>
              <img
                className="max-h-[84vh] w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
                src={selectedPhoto.src}
                alt={`${selectedPhoto.title} enlarged preview`}
              />
              <p className="mt-3 text-center text-sm font-semibold text-white/85">{selectedPhoto.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
