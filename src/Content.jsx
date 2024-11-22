/* ============================================
   Content Component
   --------------------------------------------
   This component defines the main sections 
   of the webpage, including Education, 
   Experience, and Projects.
   ============================================ */

   import React from 'react';
   import spinertia from './assets/spinertia.png'; // Spinertia project icon
   import eye from './assets/nga.png'; // Geospatial project icon
   import steelbroncorobotics from './assets/SteelBroncoRobotics.png'; // Robotics project icon
   import epoch from './assets/lux.png'; // CUDA research project icon
   
   export default function Content() {
     /* --------------------------------------------
        JSX Structure
        - This component is divided into three 
          main sections: Education, Experience, 
          and Projects.
        -------------------------------------------- */
     return (
       <>
         <div className="content">
           {/* ============================================
              Education Section
              --------------------------------------------
              Displays details about the individual's 
              educational background.
              ============================================ */}
           <div id="education" className="education">
             <p className="title">Education</p>
             <div className="school-item">
               <div className="school-item-intro">
                 <h6>Present</h6> {/* Time period */}
               </div>
               <div className="school-item-details">
                 <h4>University of Wisconsin-Madison</h4> {/* Institution name */}
                 <h6>Computer Science, Data Science & Data Science</h6>
                 <p>
                   Activities & Societies: Innovation to Market 24', Ramp 100 24'
                   Capital Management Club, DLT, and The Daily Cardinal 23-24
                 </p>
               </div>
             </div>
           </div>
   
           {/* ============================================
              Experience Section
              --------------------------------------------
              Highlights professional experience in 
              reverse chronological order.
              ============================================ */}
           <div id="experience" className="experience">
             <div className="experience-path">
               <p className="title">Experience</p>
   
               {/* Individual Experience Item */}
               <div className="experience-item">
                 <div className="experience-item-intro">
                   <h6>2024 - 2025</h6> {/* Time period */}
                 </div>

             <div className="experience-item">
                 <div className="experience-item-intro">
                   <h6>2024</h6>
                 </div>
                 <div className="experience-item-details">
                   <h4>Encite</h4>
                   <h6>Founder</h6>
                   <p>
                    Solo building a mobile application that individuals or groups can use to create optimized schedules based on personal preferences and external factors. Part of UW-Madison D2P for Market Research and Google Cloud for Startups. Utilizing a Transformer Model, and a combination of gcp and flutter to build something that people would use.
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

                 {/* Additional Experience Items */}
                 <div className="experience-item-details">
                   <h4>Yale School of Managment</h4> {/* Company name */}
                   <h6>Research Assistant</h6> {/* Role */}
                   <p>
                     Data Coding and analysis for Professor Jihae Shin's lab in behavioral psychology
                   </p>
                   {/* Skills Used */}
                   <div className="skills-container">
                     <a className="skill-button">Data Coding</a>
                     <a className="skill-button">Qualtrics Design</a>
                   </div>
                 </div>
               </div>
   
               {/* Additional Experience Items */}
               <div className="experience-item">
                 <div className="experience-item-intro">
                   <h6>2024</h6>
                 </div>
                 <div className="experience-item-details">
                   <h4>SEO</h4>
                   <h6>Software Engineering Intern</h6>
                   <p>
                   Completed 300+ hours of software engineering training with a focus on data structures, algorithms, full-stack web development, and nueral networks.
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
             </div>

             {/* Additional Experience Items */}
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
                     <a className="skill-button">Powerpoint</a>
                     <a className="skill-button">MySQL</a>
                     <a className="skill-button">Tableau</a>
                     <a className="skill-button">Market Research</a>
                   </div>
                 </div>
               </div>
             </div>

             {/* Additional Experience Items */}
             <div className="experience-item">
                 <div className="experience-item-intro">
                   <h6>2022</h6>
                 </div>
                 <div className="experience-item-details">
                   <h4>Cullen Construction Mangement</h4>
                   <h6>Data Science Intern</h6>
                   <p>
                   Developed data governance and analysis solutions to optimize project workflows.
                   </p>
                   <div className="skills-container">
                     <a className="skill-button">Excel</a>
                     <a className="skill-button">Powerpoint</a>
                   </div>
                 </div>
               </div>
           </div>
   
           {/* ============================================
              Projects Section
              --------------------------------------------
              Lists significant personal and collaborative 
              projects, including details about roles, 
              technologies used, and outcomes.
              ============================================ */}
           <div id="projects" className="projects">
             <p className="title2">Projects</p>
   
             {/* Individual Project Item */}
             <div className="experience-item">
               <div className="icon-intro">
                 <img src={spinertia} alt="Spinertia Project" /> {/* Project icon */}
               </div>
               <div className="project-details">
                 <h4>Spinertia</h4> {/* Project name */}
                 <h6>Technical Lead</h6>
                 <p>
                   Cofounded a venture-backed biotech wearable startup. Developed a sensor 
                   array and AI modeling techniques for spinal deviation detection. 
                   Participated in SHI Venture Development and TSAI City Launchpad Accelerator programs.
                 </p>
                 {/* Links */}
                 <div className="link">
                   <a href="https://www.spinertia.org/" target="_blank" rel="noopener noreferrer">
                     Live↗
                   </a>
                   <a href="https://github.com/braedencu/" target="_blank" rel="noopener noreferrer">
                     GitHub↗
                   </a>
                 </div>
                 {/* Skills Used */}
                 <div className="skills-container">
                   <a className="skill-button">UI/UX</a>
                   <a className="skill-button">HTML/CSS</a>
                   <a className="skill-button">JavaScript</a>
                   <a className="skill-button">React</a>
                   <a className="skill-button">Python</a>
                 </div>
               </div>
             </div>
   
             {/* Additional Project Items */}
             <div className="experience-item">
               <div className="icon-intro">
                 <img src={eye} alt="Geospatial Intelligence Project" />
               </div>
               <div className="project-details">
                 <h4>Geospatial Intelligence</h4>
                 <h6>Data Scientist</h6>
                 <p>
                   Analyzed the impact of Russian intervention in Ukraine using Python and R. 
                   Conducted geospatial analysis with tools like GeoPandas and created regression 
                   models to understand socio-economic effects.
                 </p>
                 <div className="link">
                   <a href="https://www.tearline.mil/" target="_blank" rel="noopener noreferrer">
                     Live↗
                   </a>
                   <a href="https://github.com/braedencu/" target="_blank" rel="noopener noreferrer">
                     GitHub↗
                   </a>
                 </div>
                 <div className="skills-container">
                   <a className="skill-button">Python</a>
                   <a className="skill-button">Big Data</a>
                   <a className="skill-button">AI/ML</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </>
     );
   }
   