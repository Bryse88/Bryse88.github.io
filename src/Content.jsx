/* ============================================
   Content Component
   --------------------------------------------
   This component defines the main sections 
   of the webpage, including Education, 
   Experience, Projects, and Programs/Awards.
   ============================================ */

import React from 'react';
import spinertia from './assets/spinertia.png'; // Spinertia project icon
import eye from './assets/nga.png'; // Geospatial project icon
import steelbroncorobotics from './assets/SteelBroncoRobotics.png'; // Robotics project icon
import epoch from './assets/lux.png'; // CUDA research project icon

export default function Content() {
  /* --------------------------------------------
     JSX Structure
     - This component is divided into four 
       main sections: Education, Experience, 
       Projects, and Programs/Awards.
     -------------------------------------------- */
  return (
    <div className="content">

      {/* ============================================
            Education Section
            ============================================ */}
      <div id="education" className="section">
        <p className="section-title">Education</p>
        <div className="school-item">
          <div className="school-item-intro">
            <h6>Present</h6> {/* Time period */}
          </div>
          <div className="school-item-details">
            <h4>University of Wisconsin-Madison</h4> {/* Institution name */}
            <h6>Computer Science, Data Science & Economics</h6>
            <p>
              Activities & Societies: Innovation to Market 24', Ramp 100 24',
              Capital Management Club, DLT, and The Daily Cardinal 23-24
            </p>
          </div>
        </div>
      </div>

      {/* ============================================
            Experience Section
            ============================================ */}
      <div id="experience" className="section">
        <p className="section-title">Experience</p>

        {/* Individual Experience Item */}
        <div className="experience-item">
          <div className="experience-item-intro">
            <h6>2024 - 2025</h6> {/* Time period */}
          </div>
          <div className="experience-item-details">
            <h4>Encite</h4>
            <h6>Founder</h6>
            <p>
              Built a mobile application to create optimized schedules based on preferences and external factors.
              Leveraged a Transformer Model, GCP, and Flutter. Part of UW-Madison D2P for Market Research and Google Cloud for Startups.
            </p>
            <div className="skills-container">
              <a className="skill-button">Transformer Model</a>
              <a className="skill-button">PyTorch</a>
              <a className="skill-button">Google Cloud Platform</a>
              <a className="skill-button">Market Research</a>
              <a className="skill-button">Docker</a>
              <a className="skill-button">Python</a>
              <a className="skill-button">Dart</a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-item-intro">
            <h6>2024</h6>
          </div>
          <div className="experience-item-details">
            <h4>SEO</h4>
            <h6>Software Engineering Intern</h6>
            <p>
              Completed 300+ hours of training in data structures, algorithms, full-stack web development, and neural networks.
            </p>
            <div className="skills-container">
              <a className="skill-button">PyTorch</a>
              <a className="skill-button">Python</a>
              <a className="skill-button">SQL</a>
              <a className="skill-button">HTML</a>
              <a className="skill-button">Linux</a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-item-intro">
            <h6>2024</h6>
          </div>
          <div className="experience-item-details">
            <h4>Yale School of Managment</h4>
            <h6>Research Assistant</h6>
            <p>
              Completed 300+ hours of training in data structures, algorithms, full-stack web development, and neural networks.
            </p>
            <div className="skills-container">
              <a className="skill-button">Data Coding</a>
              <a className="skill-button">Python</a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-item-intro">
            <h6>2024</h6>
          </div>
          <div className="experience-item-details">
            <h4>PwC</h4>
            <h6>Nonprofit Consulting Extern</h6>
            <p>
              Collaborated with PwC's team to provide strategic solutions for Kiva's ambassador program.
            </p>
            <div className="skills-container">
              <a className="skill-button">Excel</a>
              <a className="skill-button">PowerPoint</a>
              <a className="skill-button">MySQL</a>
              <a className="skill-button">Tableau</a>
              <a className="skill-button">Market Research</a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-item-intro">
            <h6>2024</h6>
          </div>
          <div className="experience-item-details">
            <h4>Cullen Construction Management</h4>
            <h6>Data Science Internship</h6>
            <p>
              Developed data governance and analysis solutions to optimize project workflows.
            </p>
            <div className="skills-container">
              <a className="skill-button">Excel</a>
              <a className="skill-button">PowerPoint</a>
              <a className="skill-button">Data Analysis</a>
              <a className="skill-button">Data Governance</a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
            Projects Section
            ============================================ */}
      <div id="projects" className="section">
        <p className="section-title">Projects</p>

        <div className="experience-item">
          <div className="icon-intro">
            <img src={spinertia} alt="Spinertia Project" />
          </div>
          <div className="project-details">
            <h4>FIDE & Google Efficient Chess AI Challenge</h4>
            <h6>Technical Lead</h6>
            <p>
              Participating in the Kaggle competition, focusing on building a chess AI model that balances accuracy with computational efficiency.
            </p>
            <div className="skills-container">
              <a className="skill-button">PyTorch</a>
              <a className="skill-button">Chess AI Algorithem</a>
              <a className="skill-button">Data Preprocessing</a>
              <a className="skill-button">Big Data Handling</a>
              <a className="skill-button">Python</a>
            </div>
          </div>
        </div>

        <div className="experience-item">
          <div className="icon-intro">
            <img src={spinertia} alt="Spinertia Project" />
          </div>
          <div className="project-details">
            <h4>SmartScheduler: AI-Powered Collaborative Calendar</h4>
            <h6>Software Engineer</h6>
            <p>
              Participating in the Kaggle competition, focusing on building a chess AI model that balances accuracy with computational efficiency.
            </p>
            <div className="skills-container">
              <a className="skill-button">PyTorch</a>
              <a className="skill-button">HTML/CSS</a>
              <a className="skill-button">JavaScript</a>
              <a className="skill-button">UI/UX</a>
              <a className="skill-button">Google Cloud Platform</a>
              <a className="skill-button">AI/ML</a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
            Programs & Awards Section
            ============================================ */}
      <div id="programs-awards" className="section">
        <p className="section-title">Programs & Awards</p>

        <div className="award-item">
          <div className="award-item-intro">
            <h6>2024</h6> {/* Time period */}
          </div>
          <div className="award-item-details">
            <h4>Goldman Sachs</h4>
            <h6>FICC and Equities Track</h6>
            <p>
              Selected for a competitive Goldman Sachs program, receiving mentorship and in-depth training in equities, fixed income, and derivatives.
            </p>
            {/* Skills Section */}
            <div className="skills-container">
              <a className="skill-button">Equities</a>
              <a className="skill-button">Fixed Income</a>
              <a className="skill-button">Derivatives</a>
              <a className="skill-button">Market Analysis</a>
              <a className="skill-button">Financial Modeling</a>
              <a className="skill-button">Risk Management</a>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-item-intro">
            <h6>2024</h6> {/* Time period */}
          </div>
          <div className="award-item-details">
            <h4>Goldman Sachs</h4>
            <h6>FICC and Equities Track</h6>
            <p>
              Selected for a competitive Goldman Sachs program, receiving mentorship and in-depth training in equities, fixed income, and derivatives.
            </p>
            {/* Skills Section */}
            <div className="skills-container">
              <a className="skill-button">Equities</a>
              <a className="skill-button">Fixed Income</a>
              <a className="skill-button">Derivatives</a>
              <a className="skill-button">Market Analysis</a>
              <a className="skill-button">Financial Modeling</a>
              <a className="skill-button">Risk Management</a>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-item-intro">
            <h6>2022 - 2023</h6> {/* Time period */}
          </div>
          <div className="award-item-details">
            <h4>Steel Broncos Robotics</h4>
            <h6>Founder & President</h6>
            <p>
              Founded and led a 501(c)(3) nonprofit robotics team, providing underprivileged students access to competitive robotics and STEM education. Successfully raised $15,000 in recurring sponsorships and expanded the program to serve over 30 students.
            </p>
            {/* Skills Section */}
            <div className="skills-container">
              <a className="skill-button">Leadership</a>
              <a className="skill-button">Fundraising</a>
              <a className="skill-button">STEM Outreach</a>
              <a className="skill-button">Team Management</a>
              <a className="skill-button">Robotics</a>
              <a className="skill-button">Strategic Planning</a>
            </div>
          </div>
        </div>

        <div className="award-item">
          <div className="award-item-intro">
            <h6>2024</h6> {/* Time period */}
          </div>
          <div className="award-item-details">
            <h4>The Trevor Project</h4>
            <h6>Crisis Counselor Volunteer</h6>
            <p>
              Provided critical support to LGBTQ+ youth as a volunteer crisis counselor. Delivered empathetic and professional assistance, ensuring the safety and well-being of individuals in crisis through active listening and tailored resources.
            </p>
            {/* Skills Section */}
            <div className="skills-container">
              <a className="skill-button">Crisis Management</a>
              <a className="skill-button">Active Listening</a>
              <a className="skill-button">Empathy</a>
              <a className="skill-button">Conflict Resolution</a>
              <a className="skill-button">Community Support</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
