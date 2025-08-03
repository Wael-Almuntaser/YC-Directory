export default function About() {
  return (
    <div className="home-container">
      <section>
        <h1 className="home-title">
          ABOUT OUR<br />
          INNOVATION PLATFORM
        </h1>
        <p className="home-subtitle">
          We connect entrepreneurs, investors, and innovators to build the future together.
        </p>
      </section>

      <div className="about-content">
        <div className="about-section">
          <div className="about-card">
            <div className="about-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>To democratize access to startup funding and mentorship by creating a global platform where innovative ideas can thrive and connect with the right resources.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11C18.2091 11 20 9.20914 20 7C20 4.79086 18.2091 3 16 3C13.7909 3 12 4.79086 12 7C12 9.20914 13.7909 11 16 11Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>To become the world's leading platform for startup discovery, funding, and collaboration, empowering the next generation of entrepreneurs to build solutions that change the world.</p>
          </div>

          <div className="about-card">
            <div className="about-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Our Values</h3>
            <p>Innovation, transparency, collaboration, and impact. We believe in the power of diverse perspectives and the importance of building sustainable, scalable solutions.</p>
          </div>
        </div>

        <div className="stats-section">
          <h2>Platform Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Startups</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Investors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$10M+</div>
              <div className="stat-label">Funding Raised</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">SA</div>
              </div>
              <h4>Sarah Ahmed</h4>
              <p>CEO & Founder</p>
              <p className="member-bio">Former Silicon Valley executive with 15+ years in tech startups and venture capital.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">MJ</div>
              </div>
              <h4>Mohammed Jaber</h4>
              <p>CTO & Co-Founder</p>
              <p className="member-bio">Full-stack developer and AI expert with experience building scalable platforms.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">LA</div>
              </div>
              <h4>Layla Al-Zahra</h4>
              <p>Head of Operations</p>
              <p className="member-bio">Operations specialist with expertise in startup growth and community building.</p>
            </div>
          </div>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2023, YC Directory emerged from a simple observation: brilliant startup ideas often struggle to find the right audience and resources. 
              Our founders experienced this challenge firsthand while building their own startups.
            </p>
            <p>
              What started as a small community of entrepreneurs has grown into a global platform connecting innovators with investors, mentors, and collaborators. 
              We've facilitated hundreds of successful partnerships and helped startups raise millions in funding.
            </p>
            <p>
              Today, we continue to evolve our platform, leveraging cutting-edge technology to make startup discovery and funding more accessible than ever before. 
              Our commitment remains the same: to empower the next generation of entrepreneurs to build solutions that change the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 