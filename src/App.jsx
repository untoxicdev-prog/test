import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const projects = [
  {
    index: "01",
    title: "Obsidian Atrium",
    category: "BRAND IDENTITY",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-7",
    height: "h-[360px] lg:h-[440px]"
  },
  {
    index: "02",
    title: "Lumen Archive",
    category: "DIGITAL EXPERIENCE",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-5",
    height: "h-[320px] lg:h-[400px]"
  },
  {
    index: "03",
    title: "Brutal Forms",
    category: "SPATIAL DESIGN",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-5",
    height: "h-[320px] lg:h-[420px]"
  },
  {
    index: "04",
    title: "Crux Atelier",
    category: "BRAND SYSTEM",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1300&q=80",
    span: "lg:col-span-7",
    height: "h-[360px] lg:h-[440px]"
  },
  {
    index: "05",
    title: "Sable Grid",
    category: "MOTION DESIGN",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-7",
    height: "h-[360px] lg:h-[460px]"
  },
  {
    index: "06",
    title: "Vanta Catalog",
    category: "EDITORIAL",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-5",
    height: "h-[320px] lg:h-[400px]"
  },
  {
    index: "07",
    title: "Formline",
    category: "PRODUCT DESIGN",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-5",
    height: "h-[320px] lg:h-[420px]"
  },
  {
    index: "08",
    title: "Northern Measure",
    category: "STRATEGY",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-7",
    height: "h-[360px] lg:h-[440px]"
  }
];

const processSteps = [
  {
    number: "01",
    title: "DISCOVERY",
    range: "2019-2020",
    caption: "IMMERSION AND AUDIT",
    description:
      "We begin with cultural listening, stakeholder interviews, and competitive mapping to locate the pressure points where design can change behavior.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "02",
    title: "STRATEGY",
    range: "2020-2021",
    caption: "POSITIONING AND VOICE",
    description:
      "We translate findings into a clear system of choices: what to own, what to refuse, and how to remain coherent under pressure.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "03",
    title: "CRAFT",
    range: "2021-2024",
    caption: "DESIGN AS STRUCTURE",
    description:
      "We build identities, digital systems, and spatial language with a rigor that resists trend cycles and rewards repeat exposure.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "04",
    title: "LAUNCH",
    range: "2024-ONGOING",
    caption: "ACTIVATION AND STEWARDSHIP",
    description:
      "We deploy across touchpoints, training internal teams and refining details post-launch to keep the system alive and sharp.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
  }
];

const clients = [
  "ALPINE WORKS",
  "KERN LABS",
  "MERCURY ARCHIVE",
  "CIVIC ATLAS",
  "RADIUS STUDIO",
  "NOVA FORGE",
  "ECHO RELIC",
  "STONE & SON"
];

function CustomCursor() {
  const cursorRef = useRef(null);
  const ghostRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ghost = ghostRef.current;
    if (!cursor || !ghost) return undefined;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    const ghostPos = { x: target.x, y: target.y };

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const move = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    let raf = 0;
    const tick = () => {
      current.x = lerp(current.x, target.x, 0.2);
      current.y = lerp(current.y, target.y, 0.2);
      ghostPos.x = lerp(ghostPos.x, current.x, 0.15);
      ghostPos.y = lerp(ghostPos.y, current.y, 0.15);

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      ghost.style.transform = `translate3d(${ghostPos.x}px, ${ghostPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const activate = () => setActive(true);
    const deactivate = () => setActive(false);
    const targets = document.querySelectorAll("[data-cursor='project']");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", activate);
        el.removeEventListener("mouseleave", deactivate);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${active ? "active" : ""}`} />
      <div
        ref={ghostRef}
        className={`cursor-ghost ${active ? "active" : ""}`}
      />
    </>
  );
}

function MagneticButton({ children, className = "", ...props }) {
  const innerRef = useRef(null);

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const max = 8;
    if (innerRef.current) {
      innerRef.current.style.transform = `translate(${(x / rect.width) * max}px, ${(y / rect.height) * max}px)`;
    }
  };

  const onLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      {...props}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`btn-surface ${className}`}
    >
      <span ref={innerRef} className="inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="text-[13px] tracking-[0.4em] uppercase">
        VOID&reg;
      </div>
      <div className="flex items-center gap-4">
        {[
          { label: "Work", href: "#work" },
          { label: "Philosophy", href: "#philosophy" },
          { label: "Process", href: "#process" },
          { label: "Clients", href: "#clients" },
          { label: "Contact", href: "#contact" }
        ].map((item) => (
          <a key={item.label} className="nav-link" href={item.href}>
            <span>{item.label}</span>
          </a>
        ))}
        <span className="badge blink">[ OPEN FOR WORK ]</span>
      </div>
    </nav>
  );
}

export default function App() {
  const appRef = useRef(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    studio: "",
    budget: "",
    message: ""
  });
  const [touched, setTouched] = useState({});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let splitInstance;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%"
          }
        }
      );

      gsap.from(".ticker", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".ticker",
          start: "top 80%"
        }
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%"
        }
      });

      const quote = document.querySelector(".quote");
      if (quote) {
        splitInstance = new SplitText(quote, { type: "words" });
        gsap.from(splitInstance.words, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 80%"
          }
        });
      }

      gsap.from(".discipline-line", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".discipline-list",
          start: "top 80%"
        }
      });

      gsap.from(".process-row", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%"
        }
      });

      gsap.from(".client-logo", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".clients-strip",
          start: "top 80%"
        }
      });

      gsap.from(".contact-panel", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%"
        }
      });

      gsap.from(".footer-inner", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".footer-inner",
          start: "top 80%"
        }
      });
    }, appRef);

    return () => {
      if (splitInstance) {
        splitInstance.revert();
      }
      ctx.revert();
    };
  }, []);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const markTouched = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isInvalid = (field) =>
    Boolean(touched[field] && !form[field].trim());

  const onSubmit = (event) => {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      studio: true,
      budget: true,
      message: true
    });
  };

  const tickerLine = (
    <div className="ticker-line">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={`ticker-${index}`} className="flex items-center gap-6">
          <span>VOID STUDIO</span>
          <span aria-hidden="true">&#10022;</span>
        </span>
      ))}
    </div>
  );

  return (
    <div ref={appRef} className="relative">
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <Navbar />

      <main className="pt-[56px]">
        <section
          id="hero"
          className="hero-section grid lg:grid-cols-[60%_40%] min-h-[100dvh]"
        >
          <div className="px-6 lg:px-12 pb-16 flex flex-col justify-end">
            <div className="system-label">[ STUDIO &mdash; 2019 ]</div>
            <h1 className="font-display text-[clamp(96px,12vw,200px)] leading-[0.9] tracking-[-0.04em] mt-6">
              <span className="hero-line">We build things</span>
              <span className="hero-line">that</span>
              <span className="hero-line font-display italic text-vermillion">
                cannot be ignored.
              </span>
            </h1>
          </div>
          <div className="relative min-h-[60vh] lg:min-h-[100dvh] border-l border-ink">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80"
              alt="Black and white architecture"
              className="h-full w-full object-cover mix-blend-multiply grayscale"
            />
          </div>
        </section>

        <div className="divider" />

        <section className="ticker">
          <div className="ticker-track">
            {tickerLine}
            {tickerLine}
          </div>
        </section>

        <div className="divider" />

        <section id="work" className="px-6 lg:px-12 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="system-label">[ SELECTED WORK ]</div>
              <h2 className="font-display text-[clamp(40px,6vw,96px)] tracking-[-0.03em] mt-4">
                The Archive
              </h2>
            </div>
            <p className="text-[12px] text-ash uppercase tracking-[0.3em]">
              Eight engagements that refuse to blend in.
            </p>
          </div>
          <div className="work-grid grid grid-cols-12 gap-6">
            {projects.map((project) => (
              <article
                key={project.index}
                className={`project-card ${project.span} ${project.height}`}
                data-cursor="project"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="flex justify-between items-start text-[11px] uppercase tracking-[0.3em]">
                    <span className="project-index">{project.index}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <div className="project-meta">
                    <div className="project-title">{project.title}</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] mt-3">
                      {project.category} &mdash; {project.year}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section
          id="philosophy"
          className="bg-ink text-paper px-6 lg:px-12 py-20 philosophy-section"
        >
          <div className="divider light mb-12" />
          <div className="grid lg:grid-cols-[70%_30%] gap-12 items-end">
            <p className="quote font-accent italic text-[clamp(48px,8vw,120px)] leading-[1.05]">
              Design is not decoration. It is the architecture of attention.
            </p>
            <div className="discipline-list text-right text-[12px] uppercase tracking-[0.4em]">
              <span className="discipline-line">BRANDING</span>
              <span className="discipline-line">DIGITAL</span>
              <span className="discipline-line">SPATIAL</span>
              <span className="discipline-line">MOTION</span>
            </div>
          </div>
          <div className="divider light mt-12" />
        </section>

        <div className="divider" />

        <section
          id="process"
          className="bg-ink text-paper px-6 lg:px-12 py-20 process-section"
        >
          <div className="system-label">[ PROCESS ]</div>
          <div className="mt-12">
            {processSteps.map((step, index) => {
              const open = activeProcess === index;
              return (
                <div
                  key={step.number}
                  className={`process-row ${open ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="process-toggle w-full text-left flex flex-col lg:flex-row lg:items-center gap-6"
                    onClick={() =>
                      setActiveProcess(open ? -1 : index)
                    }
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-display text-[clamp(48px,6vw,80px)] tracking-[-0.02em]">
                        {step.number}
                      </span>
                      <div>
                        <div className="text-[12px] uppercase tracking-[0.4em]">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-ash uppercase tracking-[0.3em] mt-2">
                          {step.range}
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-ash uppercase tracking-[0.3em]">
                      {step.caption}
                    </div>
                  </button>
                  <div className={`process-body ${open ? "open" : ""}`}>
                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                      <p className="font-accent italic text-[clamp(20px,3vw,28px)] leading-[1.5]">
                        {step.description}
                      </p>
                      <img
                        src={step.image}
                        alt={`${step.title} detail`}
                        className="w-full h-[200px] object-cover border border-paper"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="divider" />

        <section
          id="clients"
          className="px-6 lg:px-12 py-16 clients-strip"
        >
          <div className="system-label">[ TRUSTED BY ]</div>
          <div className="mt-8 flex gap-10 overflow-x-auto pb-4">
            {clients.map((client) => (
              <div
                key={client}
                className="client-logo whitespace-nowrap text-[16px] uppercase tracking-[0.3em]"
              >
                {client}
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section
          id="contact"
          className="contact-section relative px-6 lg:px-12 py-20 min-h-screen grid lg:grid-cols-[60%_40%] gap-12"
        >
          <div className="orbital-degree" aria-hidden="true">
            &deg;
          </div>
          <div className="contact-panel flex flex-col justify-end">
            <h2 className="font-display text-[clamp(80px,12vw,180px)] leading-[0.9] tracking-[-0.04em]">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-md text-[14px] text-ash leading-[1.6]">
              Your next commission starts with a single line. We reply within 48
              hours with a clear plan and a firm point of view.
            </p>
          </div>
          <form
            className="contact-panel flex flex-col gap-8"
            onSubmit={onSubmit}
            noValidate
          >
            <div>
              <input
                className={`field ${isInvalid("name") ? "invalid" : ""}`}
                type="text"
                placeholder="NAME"
                value={form.name}
                onChange={updateField("name")}
                onBlur={markTouched("name")}
                required
              />
              {isInvalid("name") && (
                <div className="field-message">Required</div>
              )}
            </div>
            <div>
              <input
                className={`field ${isInvalid("email") ? "invalid" : ""}`}
                type="email"
                placeholder="EMAIL"
                value={form.email}
                onChange={updateField("email")}
                onBlur={markTouched("email")}
                required
              />
              {isInvalid("email") && (
                <div className="field-message">Required</div>
              )}
            </div>
            <div>
              <input
                className={`field ${isInvalid("studio") ? "invalid" : ""}`}
                type="text"
                placeholder="STUDIO / ORG"
                value={form.studio}
                onChange={updateField("studio")}
                onBlur={markTouched("studio")}
                required
              />
              {isInvalid("studio") && (
                <div className="field-message">Required</div>
              )}
            </div>
            <div>
              <input
                className={`field ${isInvalid("budget") ? "invalid" : ""}`}
                type="text"
                placeholder="BUDGET RANGE"
                value={form.budget}
                onChange={updateField("budget")}
                onBlur={markTouched("budget")}
                required
              />
              {isInvalid("budget") && (
                <div className="field-message">Required</div>
              )}
            </div>
            <div>
              <textarea
                className={`field ${isInvalid("message") ? "invalid" : ""}`}
                rows={4}
                placeholder="PROJECT BRIEF"
                value={form.message}
                onChange={updateField("message")}
                onBlur={markTouched("message")}
                required
              />
              {isInvalid("message") && (
                <div className="field-message">Required</div>
              )}
            </div>
            <MagneticButton
              type="submit"
              className="w-full py-4 text-[12px] uppercase tracking-[0.4em] flex items-center justify-center gap-2"
            >
              Submit request <ArrowUpRight size={16} />
            </MagneticButton>
          </form>
        </section>
      </main>

      <footer className="bg-ink text-paper">
        <div className="footer-inner px-6 lg:px-12 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[13px] tracking-[0.4em] uppercase">
              VOID&reg;
            </div>
            <p className="text-[12px] text-ash leading-[1.6] mt-4 max-w-xs">
              Boutique design studio forging identity systems for brands that
              demand a sharper edge.
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.3em] flex flex-col gap-3">
            <a href="#work">Work</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#process">Process</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="text-[11px] uppercase tracking-[0.3em] flex flex-col gap-3">
            <span>[ SYSTEM ONLINE ]</span>
            <span className="flex items-center gap-3 text-ash">
              <span className="pulse-dot" /> Live signal
            </span>
            <span className="text-ash">info@void.studio</span>
          </div>
        </div>
        <div className="border-t border-ash/40 px-6 lg:px-12 py-4 text-[10px] uppercase tracking-[0.3em] flex flex-wrap justify-between gap-4">
          <span>
            &copy; 2025 VOID STUDIO &mdash; ALL RIGHTS RESERVED &mdash; MADE WITH
            OBSESSION
          </span>
        </div>
      </footer>
    </div>
  );
}
