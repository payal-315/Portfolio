import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from 'react-icons/fa6'

const contactCards = [
  {
    title: 'Email',
    value: 'itsmepayal123@gmail.com',
    href: 'mailto:itsmepayal123@gmail.com',
    icon: FaEnvelope,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/payal315',
    href: 'https://www.linkedin.com/in/payal315',
    icon: FaLinkedin,
  },
  {
    title: 'GitHub',
    value: 'github.com/payal-315',
    href: 'https://github.com/payal-315',
    icon: FaGithub,
  },
]

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-eyebrow">Let&apos;s Connect</span>
        <h1>Contact</h1>
        <p>
          Open to software engineering, cyber security, and research
          opportunities.
        </p>
      </section>

      <section className="contact-grid" aria-label="Contact methods">
        {contactCards.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.title}
              className="contact-card"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-card-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="contact-card-label">{item.title}</span>
              <strong>{item.value}</strong>
            </a>
          )
        })}
      </section>

      <section className="contact-footer-card">
        <div className="contact-footer-copy">
          <span className="contact-footer-label">Location</span>
          <h2>
            <FaLocationDot aria-hidden="true" /> Bangalore, India
          </h2>
        </div>
        <a
          href="/Payal_Kumari_CV.pdf"
          download="Payal_Kumari_CV.pdf"
          className="contact-download-btn"
        >
          <FaDownload aria-hidden="true" />
          Download CV
        </a>
      </section>
    </main>
  )
}

export default ContactPage
