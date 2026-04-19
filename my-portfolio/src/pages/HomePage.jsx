import girlImage from '../assets/image.png'
import speechCloudImage from '../assets/cloud-original-cutout.png'

function HomePage() {
  return (
    <header id="home" className="hero-section">
      <div className="scene">
        <div className="hero-illustration">
          <div className="laptop" aria-hidden="true">
            <div className="screen"></div>
            <div className="camera"></div>
            <div className="base"></div>
          </div>

          <div className="girl" aria-hidden="true">
            <img src={girlImage} className="girl-image" alt="" />
          </div>

          <div className="speech-cloud" role="status" aria-live="polite">
            <img
              src={speechCloudImage}
              className="speech-cloud-image"
              alt=""
              aria-hidden="true"
            />
            <div className="speech-cloud-copy">
              <p>
                <span className="line-a">
                  Hi, I&apos;m <b className="hero-name">Payal Kumari</b>...
                </span>
                <span className="line-b">
                  <b>Building, Securing, &amp; Optimizing.</b>
                </span>
                <span className="line-c">
                  From MERN Stack applications to
                  <br />
                  Adversarial Machine Learning.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="profile-box" aria-label="Professional summary">
          <h3 className="profile-title">Profile Snapshot</h3>
          <p className="profile-text">
            Pre-final year <span className="highlight">Computer Science &amp; Engineering (Cyber Security)</span>{' '}
            student at <span className="highlight">SVCE, Bangalore</span>. I am a{' '}
            <span className="highlight">Cyber Security Researcher</span> and{' '}
            <span className="highlight">Full Stack Developer</span> specializing
            in the intersection of <span className="highlight">Machine Learning</span>{' '}
            and <span className="highlight">Digital Forensics</span>.
            <br />
            <br />
            From engineering the <span className="highlight">EduMatrix-portal</span>{' '}
            to developing <span className="highlight">Adversarially Robust AI</span>,
            I bridge the gap between advanced security research{' '}
            <span className="highlight">(Zero-Day Detection &amp; Malware Analysis)</span>{' '}
            and scalable, practical software delivery.
          </p>
          <div className="hero-downloads">
            <a
              href="/Payal_Kumari_Resume.pdf"
              download="Payal_Kumari_Resume.pdf"
              className="download-btn"
            >
              Download Resume
            </a>
            <a
              href="/Payal_Kumari_CV.pdf"
              download="Payal_Kumari_CV.pdf"
              className="download-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomePage
