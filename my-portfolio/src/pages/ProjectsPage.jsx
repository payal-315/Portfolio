import { useEffect, useRef, useState } from 'react'

const liveProjects = [
  {
    key: 'edumatrix',
    title: 'EduMatrix Portal',
    hook: 'Bridging student activity with data-driven insights.',
    type: 'fullstack',
    status: 'Live',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/payal-315/-edumatrix-portal',
    live: 'https://edumatrix-portal.vercel.app/',
    details:
      'Built CRUD workflows for 100+ users with optimized queries for faster student analytics.',
    challenge:
      'Balancing fast search with consistent attendance/performance updates across multiple dashboard views.',
  },
  {
    key: 'tictactoe',
    title: 'Tic-Tac-Toe Arena',
    hook: 'Classic strategy game rebuilt with clean state logic.',
    type: 'fullstack',
    status: 'Completed',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/payal-315/Tic-Tac-Toe-Ultra',
    details:
      'Implemented reusable board logic, move history, and responsive gameplay interactions.',
    challenge:
      'Preventing stale state updates during rapid moves while preserving replay history.',
  },
  {
    key: 'deepfake-forensics',
    title: 'Deepfake Detection For Multimedia',
    hook: 'Protecting digital evidence and identity trust against deepfakes.',
    type: 'ai',
    status: 'Completed',
    stack: ['Python', 'CNNs', 'LSTM', 'FaceForensics++'],
    github: 'https://github.com/payal-315/Deepfake-Detection-System',
    details:
      'Built a deepfake detection pipeline using CNN + LSTM to catch spatial and temporal manipulation artifacts.',
    challenge:
      'Modeling subtle frame-to-frame flicker and unnatural motion patterns reliably across compressed forensic video samples, resulting in a practical investigation-oriented workflow that won 3rd Prize at CIDECODE Hackathon (CID Karnataka).',
  },
]

const researchProjects = [
  {
    key: 'zero-day',
    title: 'Zero-Day Defender',
    subtitle: 'Research & Development',
    hook: 'How do you stop an attack that has never been seen before?',
    type: 'ai',
    status: 'Researching',
    stack: ['Python', 'Self-Supervised Learning', 'Network Analysis', 'PyTorch'],
    details:
      'Designed self-supervised intrusion detection to flag zero-day anomalies without labeled attack data.',
    visual:
      'System Architecture: ingestion -> anomaly embedding -> alert scoring -> analyst validation.',
    challenge:
      'Reducing false positives while preserving sensitivity to unknown attack signatures.',
  },
  {
    key: 'sandbox',
    title: 'Malware Sandbox Analysis',
    subtitle: 'Ongoing',
    hook: 'Safely detonating threats to understand their DNA.',
    type: 'security',
    status: 'Researching',
    stack: ['Windows Sandbox', 'Process Monitor', 'Network Logs', 'Forensic Analysis'],
    details:
      'Analyzed execution flow, registry edits, and network callbacks in an isolated Windows sandbox.',
    visual:
      'Forensic Report Card: process tree, modified keys, outbound callbacks, and risk confidence.',
    challenge:
      'Correlating low-level host artifacts with network indicators for reliable triage.',
  },
]

function ProjectsPage() {
  const [flippedCard, setFlippedCard] = useState(null)
  const cardRefs = useRef({})

  useEffect(() => {
    const updateCardHeights = () => {
      Object.values(cardRefs.current).forEach((entry) => {
        if (!entry?.card || !entry?.front || !entry?.back) {
          return
        }

        const frontHeight = entry.front.scrollHeight
        const backHeight = entry.back.scrollHeight
        entry.card.style.setProperty('--project-card-height', `${Math.max(frontHeight, backHeight)}px`)
      })
    }

    updateCardHeights()
    window.addEventListener('resize', updateCardHeights)

    return () => {
      window.removeEventListener('resize', updateCardHeights)
    }
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      Object.values(cardRefs.current).forEach((entry) => {
        if (!entry?.card || !entry?.front || !entry?.back) {
          return
        }

        const frontHeight = entry.front.scrollHeight
        const backHeight = entry.back.scrollHeight
        entry.card.style.setProperty('--project-card-height', `${Math.max(frontHeight, backHeight)}px`)
      })
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [flippedCard])

  const registerCardPart = (key, part) => (node) => {
    if (!cardRefs.current[key]) {
      cardRefs.current[key] = {}
    }

    if (node) {
      cardRefs.current[key][part] = node
    }
  }

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1>Projects and Research Initiatives</h1>
        <p>
          Built with a research mindset: clear problem framing, measurable
          engineering tradeoffs, and security-first execution.
        </p>
      </section>

      <section className="project-grid" aria-label="Live projects">
        {liveProjects.map((project) => (
          <article
            key={project.key}
            className={`project-card project-${project.type} ${flippedCard === project.key ? 'is-flipped' : ''}`}
            aria-label={project.title}
            ref={registerCardPart(project.key, 'card')}
          >
            <div className="project-card-inner">
              <div className="project-front" ref={registerCardPart(project.key, 'front')}>
                <span className={`status-badge status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
                <h2>{project.title}</h2>
                <p className="project-hook">{project.hook}</p>
                <p className="project-desc">{project.details}</p>
                <div className="stack-pills">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.github && (
                    <a
                      className="details-btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      className="details-btn"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    className="details-btn"
                    onClick={() =>
                      setFlippedCard(flippedCard === project.key ? null : project.key)
                    }
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="project-back" ref={registerCardPart(project.key, 'back')}>
                <h3>Technical Challenge</h3>
                <p>{project.challenge}</p>
                <button className="details-btn" onClick={() => setFlippedCard(null)}>
                  Back
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="research-grid" aria-label="Research initiatives">
        {researchProjects.map((project) => (
          <article
            key={project.key}
            className={`project-card research-card-extended project-${project.type} ${flippedCard === project.key ? 'is-flipped' : ''}`}
            ref={registerCardPart(project.key, 'card')}
          >
            <div className="project-card-inner">
              <div className="project-front" ref={registerCardPart(project.key, 'front')}>
                <header>
                  <span className={`status-badge status-${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <h2>{project.title}</h2>
                  <p className="research-subtitle">{project.subtitle}</p>
                </header>
                <p className="project-hook">{project.hook}</p>
                <p className="project-desc">{project.details}</p>
                <div className="risk-badge">Risk Level: Medium-High</div>
                <div className="stack-pills">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.github && (
                    <a
                      className="details-btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  <button
                    className="details-btn"
                    onClick={() =>
                      setFlippedCard(flippedCard === project.key ? null : project.key)
                    }
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="project-back" ref={registerCardPart(project.key, 'back')}>
                <h3>Technical Challenge</h3>
                <p>{project.challenge}</p>
                <div className="visual-note">{project.visual}</div>
                <button className="details-btn" onClick={() => setFlippedCard(null)}>
                  Back
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

    </main>
  )
}

export default ProjectsPage
