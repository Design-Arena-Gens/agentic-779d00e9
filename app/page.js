import Link from "next/link";
import ScopeTabs from "@/components/ScopeTabs";

const projectOverview = [
  { label: "Client", value: "Aurora Logistics Holdings" },
  { label: "Sector", value: "Supply Chain & Distribution" },
  { label: "Timeline", value: "14 weeks" },
  { label: "Services", value: "Brand refresh, UX, Web build" }
];

const metrics = [
  { value: "38%", label: "Conversion uplift", detail: "Post-launch lead intake YoY" },
  { value: "4.9/5", label: "Stakeholder score", detail: "Average NPS from pilot cohort" },
  { value: "62 hrs", label: "Ops saved weekly", detail: "Automation of manual quoting" },
  { value: "3x", label: "Faster onboarding", detail: "Reduced touchpoints and handoffs" }
];

const timeline = [
  {
    phase: "Discovery Sprints",
    summary: "Immersion, stakeholder alignment, and quant/qual research.",
    notes: "Mapped regional distribution flows and uncovered hidden SLA friction."
  },
  {
    phase: "Experience Strategy",
    summary: "Crafted product vision, personas, and high-level service blueprint.",
    notes: "Reframed value proposition around reliability, transparency, and sustainability."
  },
  {
    phase: "Design & Build",
    summary: "Component-driven UI system, responsive layouts, and motion guidelines.",
    notes: "Engineered modular story-driven pages for rapid localisation."
  },
  {
    phase: "Launch & Measurement",
    summary: "Content orchestration, analytics instrumentation, and GTM support.",
    notes: "Deployed experimentation roadmap and uplift dashboards for leadership."
  }
];

const scopeItems = [
  {
    label: "Experience Design",
    title: "Human-centred journeys built for decisive logistics buyers.",
    description:
      "Mapping every operational conversation into one cohesive digital touchpoint. The revised flow reduces cognitive strain and keeps attention on the brand promise.",
    points: [
      "Service blueprints for five logistics archetypes",
      "High-fidelity prototypes tested across four regions",
      "Micro-interactions that reinforce time-to-value"
    ]
  },
  {
    label: "Brand Identity",
    title: "An identity rooted in velocity, trust, and clarity.",
    description:
      "A refreshed palette, typography, and motion system that borrows cues from air traffic control—signal-driven, precise, and calm even under pressure.",
    points: [
      "Updated mark and modular grid for responsive contexts",
      "Motion guidelines expressing directional momentum",
      "Content voicebook ensuring tone consistency"
    ]
  },
  {
    label: "Engineering",
    title: "A composable web stack deployed for global scale.",
    description:
      "Headless architecture with best-in-class performance and maintainability, enabling the marketing team to launch new initiatives in days, not weeks.",
    points: [
      "Next.js foundation with regionalised routing",
      "Reusable UI library documented in Storybook",
      "CI/CD pipelines with automated visual diffing"
    ]
  }
];

const highlights = [
  {
    title: "Narrative-first hero",
    copy: "A cinematic hero section blending rich storytelling, KPI proof, and immediate paths into core services."
  },
  {
    title: "Interactive capability grid",
    copy: "A dynamic view into Aurora’s service catalogue that scales from mobile to large mission control displays."
  },
  {
    title: "Operational dashboards",
    copy: "Leadership-ready dashboards visualising shipping health, customer sentiment, and financial resilience."
  }
];

export default function Page() {
  return (
    <main>
      <div className="aurora-grid-overlay" aria-hidden="true" />
      <header className="top-nav">
        <div className="brand">Aurora<span>Projects</span></div>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#scope">Scope</a>
          <a href="#timeline">Timeline</a>
          <a href="#insights">Insights</a>
        </nav>
        <Link href="#cta" className="nav-cta">
          Start a project
        </Link>
      </header>

      <section className="hero">
        <div className="hero-context">
          <p className="eyebrow">Case Study — Aurora Logistics Holdings</p>
          <h1>Reframing logistics as a strategic advantage.</h1>
          <p className="lede">
            Borrowing cues from aviation-grade clarity, we designed a digital experience that helps Aurora’s enterprise
            partners predict, adapt, and act with confidence.
          </p>
          <div className="chip-row">
            <span>Experience Strategy</span>
            <span>UX Systems</span>
            <span>Product Narrative</span>
            <span>Web Engineering</span>
          </div>
        </div>
        <div className="hero-pane">
          <div className="hero-pane__inner">
            <h2>Velocity Index</h2>
            <p>Live signal monitoring for Aurora’s route planners.</p>
            <div className="pulse">
              <span>On-time</span>
              <strong>97.4%</strong>
            </div>
            <div className="hero-chart">
              {[78, 42, 96, 66, 88, 54, 102].map((value, idx) => (
                <div key={value} style={{ height: `${value}%`, transitionDelay: `${idx * 60}ms` }} />
              ))}
            </div>
            <p className="hero-pane__footer">Updated 2 mins ago · Synchronized with Control Tower</p>
          </div>
        </div>
      </section>

      <section id="overview" className="section section-overview">
        <div className="section-heading">
          <span>Project Overview</span>
          <h2>Creating a precision-led digital presence.</h2>
        </div>
        <div className="overview-grid">
          <div className="overview-card">
            <p className="overview-card__title">Challenge</p>
            <p className="overview-card__body">
              Aurora’s legacy site presented logistics as a commodity. Stakeholders needed a narrative that positioned
              the brand as a mission-critical partner that thrives on complexity.
            </p>
          </div>
          <div className="overview-card">
            <p className="overview-card__title">Outcome</p>
            <p className="overview-card__body">
              We rebuilt the experience into a modular destination where data, storytelling, and trust signals merge to
              drive decisive action from enterprise buyers.
            </p>
          </div>
          <dl className="project-data">
            {projectOverview.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scope" className="section section-scope">
        <div className="section-heading">
          <span>Strategic Scope</span>
          <h2>An orbit of capabilities engineered for resilience.</h2>
        </div>
        <ScopeTabs items={scopeItems} />
      </section>

      <section id="timeline" className="section section-timeline">
        <div className="section-heading narrow">
          <span>Delivery Timeline</span>
          <h2>From insight to global launch in four decisive moves.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article key={item.phase} className="timeline-item">
              <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-content">
                <h3>{item.phase}</h3>
                <p>{item.summary}</p>
                <p className="timeline-notes">{item.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="section section-insights">
        <div className="section-heading narrow">
          <span>Design Highlights</span>
          <h2>Delivering quiet confidence through every interaction.</h2>
        </div>
        <div className="insight-grid">
          {highlights.map((item) => (
            <article key={item.title} className="insight-card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-testimonial">
        <div className="testimonial">
          <p>
            “The new experience transformed how partners perceive our operation. For the first time, the site tells the
            story of the discipline we live every day.”
          </p>
          <div>
            <span>Camille Reyes</span>
            <small>Chief Strategy Officer, Aurora Logistics Holdings</small>
          </div>
        </div>
        <div className="testimonial-support">
          <p className="testimonial-support__eyebrow">Signal Highlights</p>
          <ul>
            <li>65% longer dwell time across solution pages</li>
            <li>Integrated Mode analytics for real-time ops reporting</li>
            <li>Localized variants launched for 12 markets</li>
          </ul>
        </div>
      </section>

      <section id="cta" className="section section-cta">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Project Intake</p>
            <h2>Let’s architect your next transformation.</h2>
            <p>
              Tell us where the friction lives today, and we’ll translate it into a roadmap that de-risks delivery while
              keeping stakeholders aligned.
            </p>
          </div>
          <form className="cta-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Morgan James" required />
            </label>
            <label>
              Work Email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              Project Focus
              <select name="focus" defaultValue="experience">
                <option value="experience">Experience Reinvention</option>
                <option value="brand">Brand + Narrative</option>
                <option value="engineering">Engineering Acceleration</option>
                <option value="other">Something Else</option>
              </select>
            </label>
            <label>
              Tell us more
              <textarea name="message" rows="4" placeholder="Share goals, timelines, and success measures." />
            </label>
            <button type="submit">Submit brief</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">Aurora Projects</div>
        <div className="footer-links">
          <a href="#overview">Case Studies</a>
          <a href="#scope">Services</a>
          <a href="#cta">Start a Project</a>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Aurora Projects · Built for forward operators.</p>
      </footer>
    </main>
  );
}
