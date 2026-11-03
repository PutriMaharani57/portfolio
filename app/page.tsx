"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const experiences = [
  {
    n: "01",
    type: "COMPUTER PROGRAM · COPYRIGHT REGISTRATION",
    title: "SIPAK (Sistem Penjadwalan Aplikasi Konstruksi)",
    subtitle: "Computer Program – Copyright Registration",
    date: "January 2026",
    desc: "SIPAK (Construction Application Scheduling System) is a computer program registered with Indonesia's Ministry of Law under the copyright registration system. The registration documents the software as an intellectual work in the field of computer programs, with PUSHAKI Universitas Kuningan as the copyright holder.",
    image: "/experiences1.jpg",
    imageAlt: "SIPAK computer program copyright registration certificate",
    evidenceLabel: "SIPAK COPYRIGHT CERTIFICATE",
  },
  {
    n: "02",
    type: "UI/UX DESIGN · FIGMA CAMP INDONESIA",
    title: "Figma Camp Batch 2",
    subtitle: "UI/UX Design with Figma",
    date: "February 20, 2025 – March 1, 2025",
    desc: "Successfully completed the UI/UX Design Training Program with Figma organized by Figma Camp Indonesia. Achieved a total assessment score of 93, demonstrating strong performance in productivity, weekly assessments, and weekly tasks, with all assessment criteria rated Very Good.",
    image: "/experiences2.jpg",
    imageAlt: "Figma Camp Batch 2 UI/UX Design certificate",
    evidenceLabel: "FIGMA CAMP CERTIFICATE",
  },
  {
    n: "03",
    type: "ANDROID MOBILE DEVELOPMENT · UI/UX DESIGN",
    title: "Kampus Merdeka Mandiri Batch 8 – Infinite Learning Indonesia",
    subtitle: "Android Mobile Development & UI/UX Design",
    date: "March 2025 – July 2025",
    desc: "Successfully completed the Kampus Merdeka Mandiri Batch 8 program at Infinite Learning Indonesia, focusing on Android Mobile Development and UI/UX Design. Gained practical experience in mobile application development and user interface and user experience design through an intensive learning program.",
    image: "/experiences3.jpg",
    imageAlt: "Kampus Merdeka Mandiri Batch 8 certificate from Infinite Learning Indonesia",
    evidenceLabel: "INFINITE LEARNING CERTIFICATE",
  },
];

const androidProjects = [
  {
    n: "01",
    title: "MATHLY",
    type: "ANDROID APPLICATION",
    image: "/project01.jpg",
    alt: "MATHLY Android application login screen",
    description:
      "An Android-based mathematics learning application developed as an undergraduate thesis project to help elementary school students strengthen multiplication and division skills through interactive quizzes.",
    technologies: ["Android", "Kotlin", "LCG Algorithm"],
  },
  {
    n: "02",
    title: "PELOR",
    type: "ANDROID APPLICATION",
    image: "/project02.jpg",
    alt: "PELOR Android application preview",
    description:
      "An Android application developed through the Infinite Learning program at PT Kinema Systrans Multimedia, providing practical experience in mobile application development.",
    technologies: ["Android", "Mobile Development"],
  },
];

const webProjects = [
  {
    n: "03",
    title: "MATHLY Teacher Portal",
    subtitle: "Web Application for Teachers",
    type: "WEB APPLICATION",
    description:
      "The web-based companion to MATHLY, arranged as a separate teacher-facing platform for supporting classroom learning activities and student quiz management.",
    technologies: ["Web Development", "Education Technology"],
    visual: "mathly",
    image: "/project03.jpg",
    liveUrl: "https://mathly-kappa.vercel.app/",
  },
  {
    n: "04",
    title: "SIPAK",
    subtitle: "Sistem Penjadwalan Aplikasi Konstruksi",
    type: "WEB APPLICATION",
    description:
      "A web-based construction application scheduling system designed to support the organization and management of construction-related schedules.",
    technologies: ["Web Development", "Scheduling System"],
    visual: "sipak",
    image: "/project04.jpg",
  },
  {
    n: "05",
    title: "Banana Leaf Disease Detection and Classification",
    subtitle: "AI-Based Plant Disease Recognition",
    type: "WEB APPLICATION · MACHINE LEARNING",
    description:
      "A web-based application that uses YOLO-based object detection and computer vision to identify and classify banana leaf diseases from images.",
    technologies: ["Python", "YOLO", "Machine Learning", "Computer Vision"],
    visual: "banana",
    image: "/project05.jpg",
  },
];

const certificates = [
  { n: "01", image: "/Certificate1.jpg", title: "UNIKU English Proficiency Test (UEPT)", issuer: "Language Center Universitas Kuningan", detail: "English proficiency test · Score 530" },
  { n: "02", image: "/Certificate2.jpg", title: "HTML and CSS", issuer: "Information Technology Specialist · Certiport", detail: "Certification awarded August 28, 2025" },
  { n: "03", image: "/Certificate3.jpg", title: "Junior Network Administrator", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", detail: "Network and Infrastructure · October 20, 2023" },
  { n: "04", image: "/Certificate4.jpg", title: "Junior Web Developer", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", detail: "Web Development · December 21, 2022" },
  { n: "05", image: "/Certificate5.jpg", title: "Outstanding Achievement – PELOR Project", issuer: "Infinite Learning Indonesia", detail: "Hipster (Mobile) · Kampus Merdeka Mandiri Batch 8 · March–July 2025" },
  { n: "06", image: "/Certificate6.jpg", title: "Beyond the Stars Award", issuer: "Infinite Learning Indonesia", detail: "Award of achievement · KKM Batch 8 closing event · 2025" },
  { n: "07", image: "/Certificate7.jpg", title: "ASEAN Data Science Explorers 2023 – SAP Analytics Cloud", issuer: "ASEAN Foundation · SAP", detail: "Enablement Session participation" },
  { n: "08", image: "/Certificate8.jpg", title: "Data Classification and Summarization Using IBM Granite", issuer: "IBM SkillsBuild", detail: "Course completion · MDL-565" },
  { n: "09", image: "/Certificate9.jpg", title: "Summarizing Data Using IBM Granite", issuer: "IBM SkillsBuild", detail: "Course completion · MDL-564" },
  { n: "10", image: "/Certificate10.jpg", title: "Classifying Data Using IBM Granite", issuer: "IBM SkillsBuild", detail: "Course completion · MDL-563" },
  { n: "11", image: "/Certificate11.jpg", title: "Public Speaking: Teknik dan Ilmu Dasar Public Speaking", issuer: "Trias Academy", detail: "Webinar completion · July 11, 2023" },
  { n: "12", image: "/Certificate12.jpg", title: "Selvo Talk – Designing Your Future", issuer: "Selvopment Space", detail: "Social Media Branding for Impactful Personal Branding · August 5, 2023" },
  { n: "13", image: "/Certificate13.jpg", title: "Kuliah Umum Berdampak – Dari Degradasi ke Regenerasi", issuer: "Universitas Kuningan", detail: "Leadership for the future of a better Earth" },
  { n: "14", image: "/Certificate14.jpg", title: "Public Speaking: The Key for Effective Presentation", issuer: "Youth Ranger Jakarta", detail: "Webinar participation" },
  { n: "15", image: "/Certificate15.jpg", title: "Kuliah Kerja Nyata (KKN) Universitas Kuningan", issuer: "LPPM Universitas Kuningan", detail: "Academic Year 2024/2025 · Passed with score 92.32 (A)" },
  { n: "16", image: "/Certificate16.jpg", title: "Memulai Karir Sebagai Software Developer", issuer: "Himpunan Mahasiswa Teknik Informatika · Universitas Kuningan", detail: "Webinar participation · December 22, 2022" },
];

const organizationGalleries = [
  { title: "Korps Protokoler Mahasiswa (KPM)", images: ["kpm1.jpeg", "kpm2.jpg", "kpm3.jpg"] },
  { title: "Badan Eksekutif Mahasiswa (BEM FKOM)", images: ["bem1.JPG", "bem2.JPG", "bem3.JPG"] },
  { title: "Paguyuban Barudak Komputer (PBK)", images: ["pbk1.JPG", "pbk2.jpg", "pbk3.jpg"] },
  { title: "KKN Desa Sukamaju, Cibingbin", images: ["kkn1.jpg", "kkn2.jpg", "kkn3.jpg"] },
];

const skillGroups = [
  { title: "HARD SKILLS", groups: [
    { label: "Programming & Web", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
    { label: "Mobile & Backend", items: ["Kotlin", "Firebase", "REST API", "MySQL"] },
    { label: "AI & Machine Learning", items: ["Python", "Machine Learning", "Computer Vision", "YOLO"] },
    { label: "Tools & Design", items: ["Figma", "UI/UX", "Git", "GitHub", "VS Code", "Microsoft Office"] },
  ]},
  { title: "SOFT SKILLS", groups: [
    { label: "Professional Skills", items: ["Communication", "Teamwork", "Time Management", "Problem Solving", "Adaptability", "Attention to Detail", "Discipline"] },
  ]},
  { title: "LANGUAGES", groups: [
    { label: "Language Proficiency", items: ["Bahasa Indonesia — Native", "English — Intermediate"] },
  ]},
];

type ProjectDocumentationProps = {
  projectId: string;
  onBack: () => void;
};

type SipakGalleryGroup = {
  title: string;
  images: { number: number; src: string }[];
  note?: string;
};

type ProjectDocumentationData = {
  title: string;
  category: string;
  description: string;
  images: string[];
  groups?: SipakGalleryGroup[];
  liveUrl?: string;
  liveLabel?: string;
};

const sipakImageNumbers = (folder: string, numbers: number[]) =>
  numbers.map((number) => ({
    number,
    // The %23 encoding is required because the original public filenames begin with #.
    src: `/sipak/${folder}/%23${number}.jpg`,
  }));

const projectDocumentation: Record<string, ProjectDocumentationData> = {
  "mathly-android": {
    title: "MATHLY",
    category: "ANDROID APPLICATION",
    description: "Application documentation and interface gallery for MATHLY.",
    images: Array.from({ length: 11 }, (_, index) => `/%23${index + 1}.jpg`),
    liveUrl: "https://drive.google.com/drive/folders/1rpUuPsaspQr1P0bfHtgiLgUzduslJ9N_",
    liveLabel: "MATHLY PROJECT",
  },
  pelor: {
    title: "PELOR",
    category: "ANDROID APPLICATION",
    description: "Application documentation and interface gallery for PELOR, developed through Infinite Learning at PT Kinema Systrans Multimedia.",
    images: Array.from({ length: 16 }, (_, index) => `/pelor/%23${index + 1}.jpg`),
    liveUrl: "https://drive.google.com/drive/folders/1K-lS2uzeAZpBXd6pHRJKJtPlojibra2N",
    liveLabel: "PROJECT MOBILE & AI",
  },
  "mathly-web": {
    title: "MATHLY Teacher Portal",
    category: "WEB APPLICATION",
    description: "Teacher-facing web platform for classroom learning activities and student quiz management.",
    images: Array.from({ length: 9 }, (_, index) => `/mathly_web_guru/%23${index + 1}.jpg`),
    liveUrl: "https://mathly-kappa.vercel.app/",
  },
  sipak: {
    title: "SIPAK",
    category: "WEB APPLICATION",
    description: "Application documentation and interface gallery for the construction scheduling system.",
    images: [],
    groups: [
      {
        title: "Tampilan Company Profile",
        // File #4 is not present in the supplied public ZIP; it is intentionally omitted to avoid a broken image.
        images: sipakImageNumbers("tampilan_companyprofile", [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]),
        note: "11 dari 12 gambar tersedia. File #4 belum ditemukan pada ZIP yang dikirim.",
      },
      {
        title: "Tampilan Pimpinan",
        images: sipakImageNumbers("tampilan_pimpinan", Array.from({ length: 9 }, (_, index) => index + 1)),
      },
      {
        title: "Tampilan Admin",
        images: sipakImageNumbers("tampilan_admin", Array.from({ length: 12 }, (_, index) => index + 1)),
      },
      {
        title: "Tampilan Pegawai",
        images: sipakImageNumbers("tampilan_pegawai", Array.from({ length: 5 }, (_, index) => index + 1)),
      },
    ],
  },
  banana: {
    title: "Banana Leaf Disease Detection and Classification",
    category: "WEB APPLICATION · MACHINE LEARNING · YOLO",
    description: "Application documentation and interface gallery for the YOLO-based banana leaf disease detection system.",
    images: Array.from({ length: 10 }, (_, index) => `/banana_object_detection/%23${index + 1}.jpg`),
    liveUrl: "https://drive.google.com/drive/folders/13o4im0slKWrbEyQVEqSdL9BROVLB52e-?usp=sharing",
    liveLabel: "CV PROJECT",
  },
};

function ProjectDocumentation({ projectId, onBack }: ProjectDocumentationProps) {
  const project = projectDocumentation[projectId];
  if (!project) return null;

  const totalImages = project.groups
    ? project.groups.reduce((total, group) => total + group.images.length, 0)
    : project.images.length;

  return (
    <section id="project-documentation" className={`project-documentation project-view-enter ${projectId === "sipak" ? "sipak-documentation" : projectId === "banana" ? "banana-documentation" : ""}`} aria-label={`${project.title} documentation`}>
      <div className="project-documentation-heading">
        <div>
          <span>APP DOCUMENTATION &amp; GALLERY</span>
          <h3>{project.title}</h3>
          <p>{project.category} · {project.description}</p>
        </div>
        <span className="project-documentation-count">{String(totalImages).padStart(2, "0")} IMAGES</span>
      </div>

      {project.groups ? (
        <div className="sipak-documentation-grid">
          {project.groups.map((group, groupIndex) => (
            <section className="sipak-gallery-group" key={group.title} aria-label={group.title}>
              <div className="sipak-gallery-heading">
                <div>
                  <span>{String(groupIndex + 1).padStart(2, "0")} / SIPAK GALLERY</span>
                  <h4>{group.title}</h4>
                </div>
                <span className="sipak-gallery-count">{String(group.images.length).padStart(2, "0")} IMAGES</span>
              </div>
              {group.note && <p className="sipak-gallery-note">{group.note}</p>}
              <div className="sipak-gallery-thumbnails">
                {group.images.map((image) => (
                  <a
                    className="sipak-gallery-image"
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    key={image.src}
                    aria-label={`Buka ${group.title} gambar nomor ${image.number} ukuran asli`}
                  >
                    <img
                      src={image.src}
                      alt={`${group.title} ${image.number}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.closest("a")?.classList.add("image-not-found");
                      }}
                    />
                    <span>#{image.number}</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className={`project-documentation-gallery ${project.category === "ANDROID APPLICATION" ? "android-documentation-gallery" : "web-documentation-gallery"}`}>
          {project.images.map((image, index) => {
            // PELOR image #16 is a landscape project banner, not a mobile screen.
            const isPelorLandscape = projectId === "pelor" && index === 15;
            const isAndroidPhone = project.category === "ANDROID APPLICATION" && !isPelorLandscape;
            return (
              <figure
                className={`project-documentation-image ${isAndroidPhone ? "android-documentation-phone-card" : ""} ${isPelorLandscape ? "pelor-landscape-card" : ""}`}
                key={image}
              >
                {isAndroidPhone ? (
                  <div className="android-documentation-phone">
                    <div className="android-documentation-screen">
                      <img
                        src={image}
                        alt={`${project.title} application screenshot ${index + 1}`}
                        loading="lazy"
                        onError={(event) => {
                          const img = event.currentTarget;
                          if (!img.dataset.doubleDotTried) {
                            img.dataset.doubleDotTried = "true";
                            img.src = image.replace(/\.jpg$/i, "..jpg");
                            return;
                          }
                          img.closest("figure")?.classList.add("image-not-found");
                        }}
                      />
                    </div>
                    <span className="android-documentation-notch" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={image}
                    className={project.category !== "ANDROID APPLICATION" ? "web-documentation-screenshot" : ""}
                    alt={`${project.title} ${isPelorLandscape ? "landscape project image" : "screenshot"} ${index + 1}`}
                    loading="lazy"
                    onError={(event) => {
                      const img = event.currentTarget;
                      if (projectId === "pelor" && !img.dataset.doubleDotTried) {
                        img.dataset.doubleDotTried = "true";
                        img.src = image.replace(/\.jpg$/i, "..jpg");
                        return;
                      }
                      img.closest("figure")?.classList.add("image-not-found");
                    }}
                  />
                )}
                <figcaption>#{index + 1}</figcaption>
              </figure>
            );
          })}
        </div>
      )}

      <div className="project-documentation-footer">
        <button type="button" className="project-back-link" onClick={onBack}>
          <span aria-hidden="true">↶</span> Back to details
        </button>
        {project.liveUrl && (
          <a className="project-try-link" href={project.liveUrl} target="_blank" rel="noreferrer">
            {project.liveLabel || "Try now"} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [activeProjectDocumentation, setActiveProjectDocumentation] = useState<string | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null);
  const [certificateLayout, setCertificateLayout] = useState<"stack" | "grid" | "list">("stack");
  const [activeCertificateIndex, setActiveCertificateIndex] = useState(0);
  const [selectedOrganizationImage, setSelectedOrganizationImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "main.portfolio-shell > section.section-wrap, main.portfolio-shell > section.contact-section, .organization-card, .portfolio-project-card, .skills-panel, .certificate-card"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      if (target.matches(".organization-card, .portfolio-project-card, .skills-panel, .certificate-card")) {
        target.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
      }
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeProjectDocumentation) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("project-documentation")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeProjectDocumentation]);

  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <nav className="navbar">
        <a href="#home" className="brand-mark">
          PM<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {[
            ["ABOUT ME", "about"],
            ["EDUCATION", "education"],
            ["EXPERIENCES", "experiences"],
            ["ORGANIZATIONS", "organizations"],
            ["PROJECTS", "projects"],
            ["CERTIFICATIONS", "certification"],
            ["SKILLS", "skills"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}

          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            LET&apos;S TALK ↗
          </a>
        </div>
      </nav>

      <section id="home" className="hero section-wrap">
        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>SOFTWARE ENGINEERING · DIGITAL SOLUTIONS</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> HELLO, I&apos;M PUTRI
            </p>

            <h1 className="hero-title">
              <span>Putri</span>
              <span>Maharani</span>
              <em>Portfolio</em>
            </h1>

            <p className="hero-description">
              Recent Cum Laude graduate in Informatics Engineering (GPA 3.67/4.00), passionate about Software Engineering, Mobile &amp; Web Development, and Artificial Intelligence.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#experiences">
                EXPLORE EXPERIENCES <span>↘</span>
              </a>
              <a className="text-link" href="#about">
                More about me <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              OPEN TO SOFTWARE &amp; PRODUCT OPPORTUNITIES
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-label">
                SOFTWARE ENGINEERING
                <br />
                DIGITAL SOLUTIONS
              </div>

              <Image
                src="/mahar.png"
                alt="Foto Putri Maharani"
                width={620}
                height={820}
                priority
                className="portrait-image"
              />

              <div className="portrait-sticker">
                PUTRI
                <br />
                <em>MAHARANI</em>
              </div>
            </div>

            <span className="visual-scribble">✳</span>
            <span className="visual-index">01 / INTRODUCTION</span>
          </div>
        </div>

        <div className="hero-bottomline">
          <span>MOBILE &amp; WEB DEVELOPMENT</span>
          <span>SCROLL TO DISCOVER ↓</span>
          <span>GPA 3.67/4.00 · CUM LAUDE</span>
        </div>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="section-kicker">
          <span>01 / ABOUT ME</span>
          <span>GET TO KNOW ME</span>
        </div>

        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo-frame">
              <Image
                src="/maharAboutme.jpg"
                alt="Putri Maharani"
                width={520}
                height={650}
                className="about-photo"
              />
            </div>
            <span className="about-orbit">✳</span>
          </div>

          <div className="about-copy">
            <h2>ABOUT <span>ME</span></h2>

            <p>
              I am a Cum Laude Informatics Engineering graduate with a GPA of 3.67/4.00,
              passionate about Software Engineering, mobile and web development, and
              Artificial Intelligence (AI). I have developed projects such as MATHLY, an
              Android application and website, SIPAK (Sistem Penjadwalan Aplikasi
              Konstruksi), and an AI-based plant detection system, gaining valuable
              experience in software development and problem-solving.
            </p>

            <p>
              To further strengthen my technical and creative skills, I completed Figma
              Camp Batch 2 and the Kampus Merdeka Mandiri Batch 8 program at Infinite
              Learning Indonesia, specializing in Android Mobile Development &amp; UI/UX
              Design.
            </p>

            <p>
              I am eager to explore new technologies, tackle challenging problems, and
              build innovative, user-centered digital solutions. I aspire to grow as a
              Software Engineer while continuously expanding my knowledge and technical
              expertise.
            </p>

            <div className="about-facts">
              <div>
                <strong>01</strong>
                <span>WEB DEVELOPMENT</span>
              </div>
              <div>
                <strong>02</strong>
                <span>MOBILE DEVELOPMENT</span>
              </div>
              <div>
                <strong>03</strong>
                <span>AI DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-wrap journey-section education-section">
        <div className="section-kicker">
          <span>02 / EDUCATION</span>
          <span>ACADEMIC BACKGROUND</span>
        </div>
        <div className="education-heading">
          <h2>Education<span>.</span></h2>
          <p>Academic background, achievements, and university experience.</p>
        </div>
        <div className="academic-profile">
          <div className="academic-details">
            <div className="university-heading">
              <span className="academic-icon">✳</span>
              <div>
                <h3>Universitas Kuningan</h3>
                <p>Bachelor of Informatics Engineering, Faculty of Computer Science</p>
              </div>
            </div>
            <div className="academic-stats">
              <div><span className="academic-label">GRADE / GPA</span><strong>GPA: 3.67</strong><p>With Honors (Cum Laude)</p></div>
              <div><span className="academic-label">STUDY PERIOD</span><strong>2022 – 2026</strong></div>
            </div>
            <div className="thesis-block">
              <span className="academic-label">UNDERGRADUATE THESIS</span>
              <p className="thesis-title">“Rancang Bangun Aplikasi &quot;Mathly&quot; Untuk Quiz Perkalian Dan Pembagian Berbasis Android Menggunakan Algoritma LCG (Studi Kasus : SDN 1 Cikeusik)”</p>
            </div>
            <div className="leadership-block">
              <div className="leadership-heading"><h4>LEADERSHIP &amp; ACTIVITIES</h4><span>2023 — 2025</span></div>
              <article className="activity-item"><div><h5>Master of Ceremonies (MC) &amp; Publication, Decoration, and Documentation (PDD)</h5><p>Korps Protokoler Mahasiswa (KPM), Universitas Kuningan</p></div><time>Sep 2024 – Sep 2025</time></article>
              <article className="activity-item"><div><h5>Secretary, Student Organization Development (POM) Division</h5><p>Student Executive Board (BEM FKOM), Faculty of Computer Science</p></div><time>Mar 2024 – Feb 2025</time></article>
              <article className="activity-item"><div><h5>Secretary, Internal Control Division</h5><p>Paguyuban Barudak Komputer (PBK)</p></div><time>Mar 2023 – Mar 2024</time></article>
              <article className="activity-item"><div><h5>Member</h5><p>KSR PMI, Universitas Kuningan</p></div><time>Jan 2023 – Jan 2024</time></article>
            </div>
          </div>
          <div className="academic-photo-card">
            <Image src="/education.jpg" alt="Academic portrait of Putri Maharani" width={600} height={900} className="academic-photo" />
            <div className="academic-photo-overlay"><span>ACADEMIC PROFILE</span><h3>Universitas Kuningan</h3></div>
          </div>
        </div>
      </section>


      <section id="experiences" className="section-wrap work-section experiences-section">
        <div className="section-kicker">
          <span>03 / EXPERIENCES</span>
          <span>LEARNING, BUILDING &amp; RECOGNITION</span>
        </div>

        <div className="section-heading-row">
          <h2>
            Experiences<em>.</em>
          </h2>
          <p>
            Selected programs, achievements, and learning experiences.
            <br />
            Each entry includes certificate evidence.
          </p>
        </div>

        <div className="experiences-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.n}>
              <div className="experience-copy">
                <span className="experience-index">{experience.n} / EXPERIENCE</span>
                <div className="project-meta">{experience.type}</div>
                <h3>{experience.title}</h3>
                <p className="experience-subtitle">{experience.subtitle}</p>
                <time className="experience-date">{experience.date}</time>
                <p className="experience-description">{experience.desc}</p>
              </div>
              <div className="experience-evidence">
                <div className="experience-evidence-placeholder" aria-hidden="true">
                  <span className="evidence-mark">PM.</span>
                  <strong>CERTIFICATE</strong>
                  <span>{experience.evidenceLabel}</span>
                </div>
                <img
                  src={experience.image}
                  alt={experience.imageAlt}
                  className="experience-certificate-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="organizations" className="section-wrap organization-section">
        <div className="section-kicker">
          <span>04 / CAMPUS LIFE</span>
          <span>COLLABORATION & COMMUNITY</span>
        </div>

        <div className="organization-heading">
          <h2>Campus Organizational <em>Activities.</em></h2>
          <p>Student leadership, teamwork, and community service experiences from my university years.</p>
        </div>

        <div className="organization-grid">
          <article className="organization-card">
            <div className="organization-photo">
              <button
                type="button"
                className="organization-image-trigger"
                onClick={() => setSelectedOrganizationImage({ src: "/Organizational1.jpg", alt: "Korps Protokoler Mahasiswa (KPM)" })}
                aria-label="Perbesar foto Korps Protokoler Mahasiswa (KPM)"
              >
                <Image src="/Organizational1.jpg" alt="Korps Protokoler Mahasiswa (KPM)" width={600} height={820} className="organization-image" />
              </button>
              <span className="organization-index">01</span>
              <div className="organization-overlay"><span>ORGANIZATION</span><h3>Korps Protokoler Mahasiswa <em>(KPM)</em></h3></div>
            </div>
            <p>Korps Protokoler Mahasiswa (KPM)</p>
          </article>

          <article className="organization-card">
            <div className="organization-photo">
              <button
                type="button"
                className="organization-image-trigger"
                onClick={() => setSelectedOrganizationImage({ src: "/Organizational2.jpg", alt: "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer (BEM FKOM)" })}
                aria-label="Perbesar foto Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer (BEM FKOM)"
              >
                <Image src="/Organizational2.jpg" alt="Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer (BEM FKOM)" width={600} height={820} className="organization-image" />
              </button>
              <span className="organization-index">02</span>
              <div className="organization-overlay"><span>ORGANIZATION</span><h3>Badan Eksekutif Mahasiswa <em>FKOM</em></h3></div>
            </div>
            <p>Badan Eksekutif Mahasiswa (BEM FKOM), Fakultas Ilmu Komputer</p>
          </article>

          <article className="organization-card">
            <div className="organization-photo">
              <button
                type="button"
                className="organization-image-trigger"
                onClick={() => setSelectedOrganizationImage({ src: "/Organizational3.jpg", alt: "Paguyuban Barudak Komputer (PBK)" })}
                aria-label="Perbesar foto Paguyuban Barudak Komputer (PBK)"
              >
                <Image src="/Organizational3.jpg" alt="Paguyuban Barudak Komputer (PBK)" width={600} height={820} className="organization-image" />
              </button>
              <span className="organization-index">03</span>
              <div className="organization-overlay"><span>ORGANIZATION</span><h3>Paguyuban Barudak <em>Komputer</em></h3></div>
            </div>
            <p>Paguyuban Barudak Komputer (PBK)</p>
          </article>

          <article className="organization-card">
            <div className="organization-photo">
              <button
                type="button"
                className="organization-image-trigger"
                onClick={() => setSelectedOrganizationImage({ src: "/Organizational4.jpg", alt: "KSR PMI Universitas Kuningan" })}
                aria-label="Perbesar foto KSR PMI Universitas Kuningan"
              >
                <Image src="/Organizational4.jpg" alt="KSR PMI Universitas Kuningan" width={600} height={820} className="organization-image" />
              </button>
              <span className="organization-index">04</span>
              <div className="organization-overlay"><span>ORGANIZATION</span><h3>KSR PMI <em>Universitas Kuningan</em></h3></div>
            </div>
            <p>KSR PMI Universitas Kuningan</p>
          </article>
        </div>

        <div className="organization-galleries">
          {organizationGalleries.map((group, groupIndex) => (
            <section className="organization-gallery" key={group.title} aria-label={`Galeri ${group.title}`}>
              <div className="organization-gallery-heading">
                <span>{String(groupIndex + 1).padStart(2, "0")} / PHOTO GALLERY</span>
                <h3>{group.title}</h3>
              </div>
              <div className="organization-gallery-track">
                {group.images.map((imageName) => (
                  <button
                    type="button"
                    className="organization-gallery-item"
                    key={imageName}
                    onClick={() => setSelectedOrganizationImage({
                      src: `/${imageName}`,
                      alt: `${group.title} - ${imageName.replace(/\.(jpg|jpeg)$/i, "")}`,
                    })}
                    aria-label={`Perbesar foto ${imageName.replace(/\.(jpg|jpeg)$/i, "")}`}
                  >
                    <img src={`/${imageName}`} alt={`${group.title} - ${imageName.replace(/\.(jpg|jpeg)$/i, "")}`} loading="lazy" />
                    <span>{imageName.replace(/\.(jpg|jpeg)$/i, "")}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-kicker">
          <span>05 / PROJECTS</span>
          <span>SELECTED DIGITAL WORK</span>
        </div>
        <div className="section-heading-row">
          <h2>Projects<em>.</em></h2>
          <p>A selection of Android and web applications I have worked on.</p>
        </div>

        {activeProjectDocumentation ? (
          <ProjectDocumentation
            projectId={activeProjectDocumentation}
            onBack={() => {
              const webReturnTargets: Record<string, string> = {
                "mathly-web": "web-project-mathly",
                sipak: "web-project-sipak",
                banana: "web-project-banana",
              };
              const returnTarget = webReturnTargets[activeProjectDocumentation];

              setActiveProjectDocumentation(null);

              // Wait for the project overview to render again before scrolling to its card.
              if (returnTarget) {
                window.requestAnimationFrame(() => {
                  window.requestAnimationFrame(() => {
                    document.getElementById(returnTarget)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  });
                });
              }
            }}
          />
        ) : (
          <div className="projects-overview project-view-enter">
            <div className="project-category-heading">
              <span>01 — MOBILE DEVELOPMENT</span>
              <h3>Android Applications<em>.</em></h3>
            </div>
            <div className="portfolio-project-grid android-project-grid">
              {androidProjects.map((project) => (
                <article className="portfolio-project-card android-project-card" key={project.n}>
                  <div className="android-project-visual">
                    <span className="portfolio-project-index">{project.n} / ANDROID</span>
                    <div className="android-device">
                      <div className="android-device-camera" />
                      <img src={project.image} alt={project.alt} loading="lazy" />
                    </div>
                  </div>
                  <div className="project-detail">
                    <span className="project-kind">{project.type}</span>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <button type="button" className="project-documentation-link" onClick={() => setActiveProjectDocumentation(project.title === "MATHLY" ? "mathly-android" : "pelor")}>
                      Read more for documentation <span aria-hidden="true">⌄</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-category-heading web-category-heading">
              <span>02 — WEB DEVELOPMENT</span>
              <h3>Web Applications<em>.</em></h3>
            </div>
            <div className="web-project-list">
              {webProjects.map((project) => (
                <article className="web-project-card" id={`web-project-${project.visual}`} key={project.n}>
                  <div className={`web-project-preview web-preview-${project.visual}`}>
                    <span className="portfolio-project-index">{project.n} / WEB PROJECT</span>
                    <div className="web-browser">
                      <div className="web-browser-bar">
                        <i /><i /><i />
                        <span>{project.visual === "sipak" ? "sipak — construction scheduling" : project.visual === "banana" ? "banana leaf analysis — detection system" : "mathly teacher portal"}</span>
                      </div>
                      <div className="web-preview-image-wrap">
                        <img
                          src={project.image}
                          alt={`${project.title} web application screenshot`}
                          className="web-preview-image"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="web-project-copy">
                    <span className="project-kind">{project.type}</span>
                    <h4>{project.title}</h4>
                    <h5>{project.subtitle}</h5>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <button type="button" className="project-documentation-link" onClick={() => setActiveProjectDocumentation(project.visual === "mathly" ? "mathly-web" : project.visual)}>
                      Read more for documentation <span aria-hidden="true">⌄</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section id="certification" className="section-wrap certificate-section">
        <div className="section-kicker">
          <span>06 / CERTIFICATIONS</span>
          <span>ACHIEVEMENTS & LEARNING</span>
        </div>

        <div className="section-heading-row certification-heading">
          <h2>Certifications</h2>
          <p>
            Certificates and learning milestones that reflect my technical growth.
            <br />
            Select a certificate to view it in full size.
          </p>
        </div>

        <div className="certificate-layout-switcher" role="group" aria-label="Certificate layout">
          <button type="button" className={certificateLayout === "stack" ? "active" : ""} onClick={() => setCertificateLayout("stack")} aria-pressed={certificateLayout === "stack"}>▱ <span>Stack</span></button>
          <button type="button" className={certificateLayout === "grid" ? "active" : ""} onClick={() => setCertificateLayout("grid")} aria-pressed={certificateLayout === "grid"}>▦ <span>Grid</span></button>
          <button type="button" className={certificateLayout === "list" ? "active" : ""} onClick={() => setCertificateLayout("list")} aria-pressed={certificateLayout === "list"}>☷ <span>List</span></button>
        </div>
        {certificateLayout === "stack" ? (
          <div className="certificate-stack-view">
            <div className="certificate-stack-stage">
              <div className="certificate-stack-shadow certificate-stack-shadow-three" />
              <div className="certificate-stack-shadow certificate-stack-shadow-two" />
              <div className="certificate-stack-shadow certificate-stack-shadow-one" />
              <button type="button" className="certificate-stack-card" onClick={() => setSelectedCertificate(certificates[activeCertificateIndex])} aria-label={`View ${certificates[activeCertificateIndex].title}`}>
                <div className="certificate-stack-image-wrap"><img src={certificates[activeCertificateIndex].image} alt={certificates[activeCertificateIndex].title} /></div>
                <div className="certificate-stack-copy">
                  <span className="certificate-stack-kicker">CERTIFICATE {certificates[activeCertificateIndex].n} / 16</span>
                  <h3>{certificates[activeCertificateIndex].title}</h3>
                  <p>{certificates[activeCertificateIndex].issuer}</p>
                  <small>{certificates[activeCertificateIndex].detail}</small>
                </div>
                <span className="certificate-stack-open">OPEN CERTIFICATE ↗</span>
              </button>
            </div>
            <div className="certificate-stack-controls">
              <button type="button" onClick={() => setActiveCertificateIndex((activeCertificateIndex + certificates.length - 1) % certificates.length)} aria-label="Previous certificate">←</button>
              <span>{String(activeCertificateIndex + 1).padStart(2, "0")} <i>/</i> 16</span>
              <button type="button" onClick={() => setActiveCertificateIndex((activeCertificateIndex + 1) % certificates.length)} aria-label="Next certificate">→</button>
            </div>
            <div className="certificate-stack-dots">
              {certificates.map((c, index) => <button type="button" key={c.n} className={index === activeCertificateIndex ? "active" : ""} onClick={() => setActiveCertificateIndex(index)} aria-label={`Show certificate ${c.n}`} />)}
            </div>
          </div>
        ) : certificateLayout === "grid" ? (
          <div className="certificate-grid">
            {certificates.map((c) => (
              <article className="certificate-card" key={c.n}>
                <button type="button" className="certificate-open" onClick={() => setSelectedCertificate(c)} aria-label={`View ${c.title}`}>
                  <div className="certificate-preview">
                    <div className="certificate-placeholder" aria-hidden="true"><span className="cert-stamp">PM</span><span className="cert-label">CERTIFICATE<br />OF ACHIEVEMENT</span><div className="cert-lines"><i /><i /><i /></div><span className="cert-seal">✳</span></div>
                    <img className="certificate-image" src={c.image} alt={c.title} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                    <span className="cert-preview-no">{c.n}</span>
                  </div>
                  <div className="certificate-info"><span>{c.issuer}</span><h3>{c.title}</h3><span className="certificate-view-label">VIEW CERTIFICATE ↗</span></div>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="certificate-list-view">
            {certificates.map((c) => (
              <button type="button" className="certificate-list-item" key={c.n} onClick={() => setSelectedCertificate(c)}>
                <span className="certificate-list-number">{c.n}</span><img src={c.image} alt="" loading="lazy" />
                <span className="certificate-list-text"><strong>{c.title}</strong><small>{c.issuer} · {c.detail}</small></span><span className="certificate-list-arrow">↗</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedCertificate && (
        <div className="certificate-modal-backdrop" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="certificate-modal-close" onClick={() => setSelectedCertificate(null)}>CLOSE ×</button>
            <div className="certificate-modal-image-wrap">
              <img src={selectedCertificate.image} alt={selectedCertificate.title} className="certificate-modal-image" />
            </div>
            <div className="certificate-modal-details">
              <h3 id="certificate-modal-title">{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer}</p>
              <span>{selectedCertificate.detail}</span>
            </div>
          </div>
        </div>
      )}

      {selectedOrganizationImage && (
        <div className="organization-lightbox-backdrop" role="presentation" onClick={() => setSelectedOrganizationImage(null)}>
          <div
            className="organization-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedOrganizationImage.alt}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="organization-lightbox-close" onClick={() => setSelectedOrganizationImage(null)}>
              CLOSE ×
            </button>
            <img src={selectedOrganizationImage.src} alt={selectedOrganizationImage.alt} />
            <p>{selectedOrganizationImage.alt}</p>
          </div>
        </div>
      )}

      <section id="skills" className="section-wrap skills-section">
        <div className="section-kicker">
          <span>07 / SKILLS</span>
          <span>TECHNICAL &amp; CREATIVE SKILLS</span>
        </div>

        <div className="skills-layout skills-layout-revised">
          <h2>Skills<span className="skills-period">.</span></h2>
          <div className="skills-panels">
            {skillGroups.map((panel) => (
              <article className={`skills-panel skills-panel-${panel.title.toLowerCase().replaceAll(" ", "-")}`} key={panel.title}>
                <h3>{panel.title}</h3>
                {panel.groups.map((group) => (
                  <div className="skills-panel-group" key={group.label}>
                    <h4>{group.label}</h4>
                    <div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">
            <span>08 / CONTACT</span>
            <span>YOUR NEXT COLLABORATOR?</span>
          </div>

          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>
            Let&apos;s build
            <br />
            <em>something meaningful.</em>
          </h2>

          <div className="contact-bottom">
            <p>
              I’m always excited to connect with people, contribute to meaningful projects, and turn ideas into thoughtful digital solutions. Let’s create something impactful together.
            </p>
            <a className="button-light" href="mailto:05putrimaharani@gmail.com">
              SAY HELLO ↗
            </a>
          </div>

          <div className="social-links" aria-label="Social media links">
            <a href="https://wa.me/6281214450177" target="_blank" rel="noreferrer" aria-label="WhatsApp" data-tooltip="WhatsApp · 0812 1445 0177">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.5l6-1.6A11.8 11.8 0 0 0 22.5 11a11.7 11.7 0 0 0-2-7.5ZM12 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.5.9.9-3.4-.2-.4A9.7 9.7 0 1 1 12 21Zm5.3-7.3c-.3-.1-1.6-.8-1.9-.9s-.5-.1-.7.2-.7.9-.9 1.1-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.3 1 2.7 1.2 2.9a11 11 0 0 0 4.3 3.8c.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3s.2-1.2.2-1.3-.2-.2-.5-.3Z"/></svg>
            </a>
            <a href="https://www.instagram.com/__.mhrrn?exln=OHMzNTZoMTZmbG95&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" data-tooltip="Instagram · @__.mhrrn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.6" r=".8" className="icon-fill"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/putri-maharani-b78257284" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn · Putri Maharani">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5H2V22h3V8.5ZM3.5 2A1.8 1.8 0 1 0 3.5 5.6 1.8 1.8 0 0 0 3.5 2ZM22 14.2c0-4.1-2.2-6-5.1-6a4.4 4.4 0 0 0-4 2.2V8.5H10V22h3v-7.5c0-2  .4-3.9 2.8-3.9s2.4 2.2 2.4 4V22H22v-7.8Z"/></svg>
            </a>
            <a href="https://github.com/PutriMaharani57" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub · PutriMaharani57">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8A11.2 11.2 0 0 0 8.5 22.6c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3.4c0 .4.2.7.8.6A11.2 11.2 0 0 0 12 .8Z"/></svg>
            </a>
            <a href="mailto:05putrimaharani@gmail.com" aria-label="Email" data-tooltip="05putrimaharani@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:05putrimaharani@gmail.com">05putrimaharani@gmail.com</a>
            <span>PUTRI MAHARANI · PORTFOLIO 2026</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 PUTRI MAHARANI</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span>DESIGNED WITH INTENTION</span>
      </footer>
    </main>
  );
}
