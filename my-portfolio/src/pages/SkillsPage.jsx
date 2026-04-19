import {
  FaBolt,
  FaBrain,
  FaBug,
  FaCss3Alt,
  FaDatabase,
  FaFileLines,
  FaJava,
  FaLaptopCode,
  FaLayerGroup,
  FaLinux,
  FaMagnifyingGlass,
  FaMedal,
  FaMicrosoft,
  FaShieldHalved,
  FaTrophy,
  FaUserGroup,
  FaUsersGear,
  FaWindows,
} from 'react-icons/fa6'
import {
  SiCanva,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiOwasp,
  SiPostman,
  SiPython,
  SiReact,
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Software & Backend Engineering',
    summary: 'Application logic, APIs, databases, and delivery across web stacks.',
    badge: 'Backend Architecture',
    items: [
      { name: 'Java (Advanced OOP)', icon: FaJava, color: '#ff8f61', level: 'Core' },
      { name: 'Python', icon: SiPython, color: '#80b9ff', level: 'Core' },
      { name: 'SQL (MySQL)', icon: FaDatabase, color: '#5cc6ff', level: 'Core' },
      { name: 'C', icon: FaLaptopCode, color: '#9ec9ff', level: 'Core' },
      { name: 'Backend Architecture', icon: FaLayerGroup, color: '#8fd7ff', level: 'Learning' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#83d27a', level: 'Core' },
      { name: 'Express.js', icon: SiExpress, color: '#d5dde9', level: 'Core' },
      { name: 'MongoDB', icon: SiMongodb, color: '#75d06d', level: 'Core' },
      { name: 'RESTful APIs', icon: FaDatabase, color: '#90dcff', level: 'Core' },
      { name: 'Postman', icon: SiPostman, color: '#ff9a64', level: 'Core' },
    ],
  },
  {
    title: 'Cyber Security & Research',
    summary: 'Investigation, secure systems thinking, and applied ML for defense.',
    badge: 'CID Karnataka Internship',
    items: [
      { name: 'Digital Forensics', icon: FaMagnifyingGlass, color: '#ffb17e', level: 'Core' },
      { name: 'Deepfake Detection', icon: FaBrain, color: '#bc8dff', level: 'Core' },
      { name: 'Malware Analysis', icon: FaBug, color: '#ff9c71', level: 'Learning' },
      { name: 'Secure Coding', icon: FaShieldHalved, color: '#ffc16b', level: 'Core' },
      { name: 'OWASP Top 10', icon: SiOwasp, color: '#ffd177', level: 'Core' },
      { name: 'Network Security', icon: FaShieldHalved, color: '#ff8d8d', level: 'Core' },
      { name: 'Adversarial ML', icon: FaBrain, color: '#d39cff', level: 'Learning' },
      { name: 'Prompt Engineering / LLM Integration', icon: SiOpenai, color: '#8de7ff', level: 'Learning' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    summary: 'Automation, environments, workflow tooling, and technical communication.',
    badge: 'Automation',
    items: [
      { name: 'Microsoft Azure', icon: FaMicrosoft, color: '#6dc7ff', level: 'Learning' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#92a9ff', level: 'Learning' },
      { name: 'Docker', icon: SiDocker, color: '#6db7ff', level: 'Learning' },
      { name: 'Linux CLI', icon: FaLinux, color: '#ffd978', level: 'Learning' },
      { name: 'Git', icon: SiGit, color: '#f59d6f', level: 'Core' },
      { name: 'GitHub', icon: SiGithub, color: '#f0f3fa', level: 'Core' },
      { name: 'LaTeX', icon: SiLatex, color: '#8dc6ff', level: 'Core' },
      { name: 'Technical Documentation', icon: FaFileLines, color: '#8fd9ff', level: 'Core' },
      { name: 'Windows Environment', icon: FaWindows, color: '#7fc8ff', level: 'Core' },
    ],
  },
  {
    title: 'Frontend & Design',
    summary: 'Interfaces, interaction design, and responsive UI delivery.',
    badge: 'User Experience',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61dafb', level: 'Core' },
      { name: 'HTML5', icon: SiHtml5, color: '#ff7a3d', level: 'Core' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#3fa0ff', level: 'Core' },
      { name: 'JavaScript', icon: SiJavascript, color: '#ffd84a', level: 'Core' },
      { name: 'Figma', icon: SiFigma, color: '#f383ff', level: 'Learning' },
      { name: 'Canva', icon: SiCanva, color: '#75d8ff', level: 'Core' },
      { name: 'Community Management', icon: FaUserGroup, color: '#b8a0ff', level: 'Core' },
      { name: 'Community Leadership (Chess Club Admin)', icon: FaUsersGear, color: '#d3b0ff', level: 'Core' },
      { name: 'Rapid Learning & Problem Solving', icon: FaBolt, color: '#9ee9c9', level: 'Core' },
    ],
  },
]

const highlights = [
  {
    title: 'Published Book Chapter',
    detail: 'Research contribution on sustainable development',
    icon: FaMedal,
  },
  {
    title: 'CIDECODE Recognition',
    detail: 'Forensic AI project distinction',
    icon: FaTrophy,
  },
  {
    title: 'CID Karnataka Internship',
    detail: 'Hands-on digital forensics exposure',
    icon: FaShieldHalved,
  },
]

function SkillsPage() {
  return (
    <main className="skills-page">
      <section className="skills-hero">
        <h1>Technical Toolkit & Specializations</h1>
        <p>
          A focused snapshot of the tools, technologies, and research areas I
          use across software engineering, cyber security, and modern developer
          workflows.
        </p>
        <div className="skills-highlight-row" aria-label="Achievement highlights">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="skills-highlight-card">
                <Icon className="skills-highlight-icon" aria-hidden="true" />
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="skills-groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-category">
            <div className="skill-category-head">
              <div>
                <p className="skill-category-label">Functional Area</p>
                <h2>{group.title}</h2>
              </div>
              <span className="skill-count">{group.badge}</span>
            </div>
            <p className="skill-category-summary">{group.summary}</p>
            <div className="skill-tiles">
              {group.items.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="skill-tile"
                    style={{ '--skill-accent': skill.color }}
                  >
                    <span className="skill-logo-shell" aria-hidden="true">
                      <span className="skill-logo">
                        <Icon />
                      </span>
                    </span>
                    <span className="skill-copy">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-state">Ready for real project work</span>
                    </span>
                    <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                )
              })}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default SkillsPage
