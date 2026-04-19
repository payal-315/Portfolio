import aboutGirlSticker from '../assets/image2.jpeg'

function AboutPage() {
  return (
    <main className="about-page" id="about">
      <section className="about-shell">
        <aside className="about-visual" aria-hidden="true">
          <div className="about-visual-card">
            <h2>Security Research</h2>
            <p>Code. Investigate. Defend.</p>
            <div className="about-visual-copy">
              <div className="about-focus-list">
                <span>MERN Stack</span>
                <span>Digital Forensics</span>
                <span>Threat Detection</span>
                <span>Secure Coding</span>
                <span>Deepfake Analysis</span>
              </div>
            </div>
            <img 
              src={aboutGirlSticker} 
              alt="Security research visual" 
              className="about-visual-image" 
            />
          </div>
        </aside>

        <article className="about-content">
          <h1>Bridging the Gap Between Code and Security</h1>

          <div className="about-block">
            <h3>1. The Professional Journey</h3>
            <p>
              During my internship at the Crime Investigation Department (CID)
              Karnataka, I worked on the front lines of digital forensics. This
              experience sparked my interest in how AI can be both a weapon
              (Deepfakes) and a shield (Intrusion Detection).
            </p>
          </div>

          <div className="about-block">
            <h3>2. Technical Philosophy</h3>
            <p>
              I am currently focused on Adversarially Robust Self-Supervised
              Intrusion Detection. My goal is to develop systems that can
              identify zero-day network attacks before they cause damage. I
              enjoy the challenge of staying one step ahead of evolving cyber
              threats.
            </p>
          </div>

          <div className="about-block">
            <h3>3. Core Competencies</h3>
            <p>
              <b>Cyber Security:</b> Digital Forensics, Deepfake Detection,
              Network Security
            </p>
            <p>
              <b>Development:</b> MERN Stack (MongoDB, Express, React, Node.js),
              Java, C++, Python
            </p>
            <p>
              <b>Machine Learning:</b> CNNs, Adversarial Training, Data Analysis
            </p>
          </div>

          <div className="about-block">
            <h3>4. Beyond the Screen</h3>
            <p>
              When I'm not analyzing logs or writing code, I serve as the
              Admin for the Checkmate Chess Club. Managing a community of over
              100 members has taught me the importance of strategic
              thinking, both on the board and in network security.
            </p>
          </div>

          <section className="quick-stats" aria-label="Quick stats">
            <div className="stat-card">
              <span className="stat-icon">🎓</span>
              <p>
                <b>Education:</b> CSE (Cyber Security) @ SVCE, Bengaluru
              </p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📈</span>
              <p>
                <b>CGPA:</b> 9.2
              </p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🏆</span>
              <p>
                <b>Hackathon:</b> 3rd Prize CIDECODE (CID Karnataka)
              </p>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <p>
                <b>Published:</b> Book Chapter on Sustainable Development
              </p>
            </div>
          </section>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
