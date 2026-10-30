import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 — sekarang",
    role: "Full-Stack Development",
    projects: [
      ["Admin Panel", "Universal dashboard system"],
      ["Filament POS", "Point-of-sale system with Laravel Filament"],
      ["Church Profile Website", "Church management and profile system"],
      ["CRUD Applications", "Multiple Laravel and Kotlin applications"],
    ],
  },
  {
    period: "2025",
    role: "Game & AR Developer",
    projects: [
      ["AR Bangun Ruang", "Educational augmented-reality app with Unity C#"],
      ["Timburgan Chess", "Interactive chess game published on GitHub"],
      ["3D Experiences", "3D modeling and augmented-reality experiences"],
    ],
  },
  {
    period: "2024 — 2025",
    role: "TVRI Maluku Developer",
    projects: [
      ["TVRI Incoming Mail Web", "Document management system"],
      ["TVRI Archive System", "Digital archive platform"],
      ["Backend Systems", "PHP and MySQL development for a government institution"],
    ],
  },
  {
    period: "2024",
    role: "Healthcare & Education Tech",
    projects: [
      ["Sinara App", "Full-stack health management with PHP and Flutter"],
      ["Food Recipe API", "Nutrition API development"],
      ["University Collaboration", "Technology collaboration with Universitas Indonesia Maluku"],
    ],
  },
  {
    period: "Selected work",
    role: "Recent Projects",
    projects: [
      ["Web Monitoring KKN UKIM", "Monitoring kegiatan KKN"],
      ["Manyian DLS Dua Sabat Lama", "Digital application"],
      ["Machine Learning & IoT", "Machine-learning and IoT integration"],
      ["Aplikasi Penyiraman Tanaman", "Smart watering system for Desa Kilo, Pulau Seram"],
      ["GAS-IPAS", "Interactive web game for elementary students"],
      ["SD Negeri 12 Passo", "School information system"],
      ["SI Angkatan Muda Gereja", "Organization website"],
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const projectVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
};

const ExperienceTimeline = ({ countdown }) => (
  <div className="relative mt-2 pl-6 sm:pl-10">
    <motion.div
      initial={{ scaleY: 0, originY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-cyan-200/70 via-white/20 to-transparent sm:left-[15px]"
    />

    <div className="space-y-5 sm:space-y-7">
      {experiences.map((experience, index) => (
        <motion.article
          key={experience.role}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
          className="group relative rounded-2xl border border-white/15 bg-black/25 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6"
        >
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.25, type: "spring", stiffness: 260, damping: 18 }}
            className="absolute -left-[30px] top-6 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-300 shadow-[0_0_0_4px_rgba(103,232,249,0.14)] sm:-left-[38px]"
          />
          <div className="mb-4 flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{experience.role}</h2>
            <span className="w-fit rounded-full border border-cyan-200/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-200/80">
              {experience.period}
            </span>
          </div>
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {experience.projects.map(([title, description]) => (
              <motion.div
                key={title}
                variants={projectVariants}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors duration-200 group-hover:border-cyan-200/25 sm:p-4"
              >
                <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-300/80 sm:text-sm">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.article>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mt-8 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.04] p-4 sm:p-6"
    >
      <p className="text-sm font-medium text-cyan-100">Development journey</p>
      <p className="mt-1 text-xs leading-5 text-slate-300/80 sm:text-sm">
        Delivering backend solutions, mobile apps, and game development services with 18+ public repositories.
      </p>
      <div className="mt-3 text-sm font-semibold text-cyan-200">{countdown}</div>
    </motion.div>
  </div>
);

export default ExperienceTimeline;
