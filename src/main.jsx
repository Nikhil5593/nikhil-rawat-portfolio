import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Code2, Database, Palette, ExternalLink, Menu, X, Sparkles
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "GeoJeevan.ai",
    date: "Nov 2025 — Dec 2025",
    description:
      "A location-based web experience that tells users about present health-related risks in an entered location using real-time weather data.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    accent: "cyan",
    icon: "🌍"
  },
  {
    title: "Café Billing System",
    date: "Aug 2025 — Sept 2025",
    description:
      "A responsive café billing platform focused on customizable dishes, menu information, and a user-friendly experience.",
    stack: ["HTML", "CSS", "JSON", "Clerk API", "Stripe API"],
    accent: "violet",
    icon: "☕"
  }
];

const skills = [
  { group: "Languages", icon: <Code2 />, items: ["C", "C++", "Python", "JavaScript"] },
  { group: "Technologies", icon: <Sparkles />, items: ["HTML", "CSS", "React JS"] },
  { group: "Databases & Tools", icon: <Database />, items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Figma"] },
  { group: "Soft Skills", icon: <Palette />, items: ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability"] }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="app">
      <div className="noise" />
      <header className={scrolled ? "header scrolled" : "header"}>
        <a className="logo" href="#home" onClick={close}>NR<span>.</span></a>
        <nav className={menu ? "nav open" : "nav"}>
          {["About", "Skills", "Projects", "Education", "Contact"].map(x =>
            <a key={x} href={`#${x.toLowerCase()}`} onClick={close}>{x}</a>
          )}
        </nav>
        <a className="header-btn" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> Available for opportunities</div>
            <h1>Hi, I'm <span>Nikhil</span><br />I build things<br /><em>for the web.</em></h1>
            <p className="hero-text">
              Computer Science & Engineering student at Lovely Professional University,
              building responsive web experiences with modern technologies.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View my work <ArrowUpRight size={18}/></a>
              <a className="ghost-btn" href="mailto:nikkunik0571@gmail.com">Contact me <Mail size={17}/></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> Punjab, India</span>
              <span>CGPA <b>9.20</b></span>
            </div>
          </div>
          <div className="hero-card">
            <div className="portrait-wrap">
              <div className="portrait-glow" />
              <img
                className="profile-photo"
                src="/profile.jpg"
                alt="Nikhil Rawat"
              />
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-heading">
            <h2>Curious mind.<br/><span>Builder mindset.</span></h2>
            <p>
              I'm a Computer Science & Engineering student who enjoys turning ideas
              into useful, responsive web experiences. I like solving problems,
              learning modern tools, and building projects that are simple to use.
            </p>
          </div>
          <div className="stats">
            <div><strong>9.20</strong><span>CGPA</span></div>
            <div><strong>2+</strong><span>Web Projects</span></div>
            <div><strong>3</strong><span>Certificates</span></div>
            <div><strong>∞</strong><span>Things to Learn</span></div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / SKILLS</div>
          <div className="section-heading compact">
            <h2>Tools I <span>work with.</span></h2>
          </div>
          <div className="skill-grid">
            {skills.map((s) => (
              <article className="skill-card" key={s.group}>
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.group}</h3>
                <div className="chips">{s.items.map(i => <span key={i}>{i}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / PROJECTS</div>
          <div className="section-heading">
            <h2>Selected <span>work.</span></h2>
            <p>A few projects from my journey of experimenting, building and learning.</p>
          </div>
          <div className="project-list">
            {projects.map((p, idx) => (
              <article className={`project-card ${p.accent}`} key={p.title}>
                <div className="project-number">0{idx + 1}</div>
                <div className="project-icon">{p.icon}</div>
                <div className="project-main">
                  <div className="project-title-row">
                    <div><h3>{p.title}</h3><span>{p.date}</span></div>
                    <div className="project-arrow"><ArrowUpRight /></div>
                  </div>
                  <p>{p.description}</p>
                  <div className="chips">{p.stack.map(i => <span key={i}>{i}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-label">04 / EDUCATION</div>
          <div className="section-heading compact">
            <h2>Learning <span>by doing.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-dot" />
              <div className="timeline-date">AUG 2025 — PRESENT</div>
              <h3>Bachelor of Technology — Computer Science & Engineering</h3>
              <p>Lovely Professional University · Phagwara, Punjab</p>
              <b>CGPA: 9.20</b>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">JUL 2022 — MAR 2024</div>
              <h3>Higher Secondary Education</h3>
              <p>Nirmal Ashram Deepmala Public School · Rishikesh, Uttarakhand</p>
              <b>80%</b>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">JUN 2021 — MAR 2022</div>
              <h3>Secondary Education</h3>
              <p>Nirmal Ashram Deepmala Public School · Rishikesh, Uttarakhand</p>
              <b>90.8%</b>
            </div>
          </div>
        </section>

        <section id="certificates" className="section certificates">
          <div className="section-label">05 / CERTIFICATES</div>
          <div className="section-heading">
            <h2>Proof of <span>learning.</span></h2>
            <p>Selected certificates and job simulations completed during my learning journey.</p>
          </div>
          <div className="certificate-grid">
            <article className="certificate-card">
              <div className="certificate-preview"><iframe src="/certificates/advanced-software-engineering.pdf#toolbar=0&navpanes=0" title="Advanced Software Engineering certificate" /></div>
              <div className="certificate-info"><div><span>Walmart Global Tech · Forage</span><h3>Advanced Software Engineering Job Simulation</h3><small>November 15, 2025</small></div><a href="/certificates/advanced-software-engineering.pdf" target="_blank" rel="noreferrer"><ExternalLink size={17}/></a></div>
            </article>
            <article className="certificate-card">
              <div className="certificate-preview"><iframe src="/certificates/cybersecurity-analyst.pdf#toolbar=0&navpanes=0" title="Cybersecurity Analyst certificate" /></div>
              <div className="certificate-info"><div><span>Tata · Forage</span><h3>Cybersecurity Analyst Job Simulation</h3><small>August 23, 2025</small></div><a href="/certificates/cybersecurity-analyst.pdf" target="_blank" rel="noreferrer"><ExternalLink size={17}/></a></div>
            </article>
            <article className="certificate-card">
              <div className="certificate-preview"><iframe src="/certificates/data-visualisation.pdf#toolbar=0&navpanes=0" title="Data Visualisation certificate" /></div>
              <div className="certificate-info"><div><span>Tata · Forage</span><h3>Data Visualisation: Empowering Business with Effective Insights</h3><small>August 21, 2025</small></div><a href="/certificates/data-visualisation.pdf" target="_blank" rel="noreferrer"><ExternalLink size={17}/></a></div>
            </article>
            <article className="certificate-card">
              <div className="certificate-preview"><iframe src="/certificates/ai-tools-workshop.pdf#toolbar=0&navpanes=0" title="AI Tools Workshop certificate" /></div>
              <div className="certificate-info"><div><span>BE10X</span><h3>AI Tools & ChatGPT Workshop</h3><small>September 6, 2025</small></div><a href="/certificates/ai-tools-workshop.pdf" target="_blank" rel="noreferrer"><ExternalLink size={17}/></a></div>
            </article>
          </div>
        </section>
        <section className="section extras">
          <div className="section-label">06 / MORE</div>
          <div className="two-col">
            <div>
              <h2>Achievements</h2>
              <ul className="clean-list">
                <li><span>01</span> Participated in university-level hackathons</li>
                <li><span>02</span> Developed multiple web development projects using modern technology</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-glow" />
          <div className="section-label">06 / CONTACT</div>
          <h2>Let's build something<br/><span>great together.</span></h2>
          <p>Have an idea, opportunity, or just want to connect? Drop me a message.</p>
          <a className="primary-btn large" href="mailto:nikkunik0571@gmail.com">nikkunik0571@gmail.com <ArrowUpRight size={20}/></a>
          <div className="socials">
            <a href="https://github.com/Nikhil5593" target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Nikhil Rawat</span>
        <span>Designed & built with React</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
