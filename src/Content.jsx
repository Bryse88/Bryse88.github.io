/* ============================================
   Content Component
   --------------------------------------------
   This component defines the main sections 
   of the webpage, including Education, 
   Experience, Projects, and Programs/Awards.
   ============================================ */

import steelbroncorobotics from './assets/SteelBroncoRobotics.png';
import kaggle from './assets/Kaggle Photo.png'
import seo from './assets/SEO.jpeg'


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
            <h6>2024</h6> {/* Time period */}
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
            <h6>2022</h6>
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
                  <img src={kaggle}/>
                </div>
                <div className="project-details">
                  <h4>FIDE & Google Efficient Chess AI Challenge</h4>
                  <h6>Technical Lead</h6>
                  <p>
                  Participating in the Kaggle competition, focusing on building a chess AI model that balances accuracy with computational efficiency.
                  </p>
                  <div className='link'>
                    <a href='https://www.kaggle.com/competitions/fide-google-efficiency-chess-ai-challenge'>Live↗</a>
                    <a href='https://github.com/Bryse88'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">UI/UX</a>
                    <a className="skill-button">HTML/CSS</a>
                    <a className="skill-button">JS</a>
                    <a className="skill-button">REACT</a>
                    <a className="skill-button">PYTHON</a>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={seo}/>
                </div>
                <div className="project-details">
                  <h4>SmartScheduler: AI-Powered Collaborative Calendar</h4>
                  <h6>Software Engineer</h6>
                  <p>
                  <p>
                    Designed and implemented an AI-powered collaborative calendar application, enabling real-time optimized scheduling for teams and individuals.
                  </p>

                  </p>
                  <div className='link'>
                    <a href='https://github.com/Bryse88'>Live↗</a>
                    <a href='https://github.com/Bryse88'>Github↗</a>
                  </div>
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

        
        <div className="experience-item">
                <div className="icon-intro">
                  <img src={steelbroncorobotics}/>
                </div>
                <div className="project-details">
                  <h4>Steel Bronco Robotics</h4>
                  <h6>Vice President and Software Lead</h6>
                  <p>
                    Steel Bronco Robotics is a 501(c)(3) nonprofit organization that gives underprivileged students access to competitive robotics at the highest level. Engineering programs are nonexistent in the local school system, a void that the organization fills. 
                    Served as software lead during the time autonomous movement, swerve drive, and vision were implemented. 
                  </p>
                  <div className='link'>
                    <a href='https://www.steelbroncorobotics.com/'>Live↗</a>
                    <a href='https://github.com/Bryse88/FRC_Swerve'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">AI/ML</a>
                    <a className="skill-button">IMAGE PROCESSING</a>
                    <a className="skill-button">DATA ANALYSIS</a>
                    <a className="skill-button">Java</a>
                  </div>
                </div>
              </div>
          </div>

    </div>
  )
}
