import spinertia from './assets/spinertia.png';
import eye from './assets/nga.png';
import steelbroncorobotics from './assets/SteelBroncoRobotics.png';
import epoch from './assets/lux.png';

export default function Content() {
  return (
    <>
      <div className="content">

        {/* Education Section */}
        <div id="education" className="education">
           <p className='title'>Education</p>
            <div className="school-item">
              <div className="school-item-intro">
                <h6>Present</h6>
              </div>
              <div className="school-item-details">
                <h4>Yale University</h4>
                <h6>Computer Science & Electrical Engineering, Mathematics & Philosophy</h6>
                <p>Activities & Societies: Yale Undergraduate Aerospace Association, Y/CS, Yale Daily News, Yale Foreign Policy Institute, Yale Entrepreneurial Society</p>
              </div>
            </div>
          </div>

        {/* Experience Section */}
        <div id="experience" className="experience">
          <div className="experience-path">
          <p className='title'>Experience</p>

          <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2024 - 2025</h6>
              </div>
              <div className="experience-item-details">
                <h4>Anagram</h4>
                <h6>Quantitative Developer Intern</h6>
                <p>
                  Contributed to the in-house development of Glider, a cross-chain, multi-asset strategy creation and trading platform designed to allow users to build self-hedging ETFs based on real-time market conditions. Engineered low-latency, high-efficiency systems in C++ for executing automated arbitrage across blockchains. Enhanced platform capabilities by developing wallet tracking, PnL calculation, and backtesting functionalities, with a strong emphasis on creating and transforming data pipelines to support complex financial operations.
                </p>
                <div className="skills-container">
                  <a className="skill-button">C++</a>
                  <a className="skill-button">DOCKER</a>
                  <a className="skill-button">LINUX</a>
                  <a className="skill-button">HIGH PERFORMANCE COMPUTING</a>
                  <a className="skill-button">PYTHON</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2024 - 2024</h6>
              </div>
              <div className="experience-item-details">
                <h4>Elevance Health</h4>
                <h6>Data Scientist Intern</h6>
                <p>
                  Developed Snowflake analytical tools using Python and SQL for 14+ million Medicaid beneficiaries nationwide. Leveraged Snowflake’s data sharing capabilities to enable secure, real-time data sharing across multiple organizations, enhancing collaboration and data-driven decision-making. Created a suite of analysis tools released as a desktop application that cut time on healthcare pricing validations by 250%. Designed and implemented robust ETL pipelines to streamline data ingestion, transformation, and storage processes of sensitive healthcare data while maintaining HIPAA compliance. Utilized SQL queries to display national Medicaid records. Presented deliverables to upper management and stakeholders, providing insights into the Medicaid population and healthcare pricing trends.
                </p>
                <div className="skills-container">
                  <a className="skill-button">SNOWFLAKE</a>
                  <a className="skill-button">TABLEAU</a>
                  <a className="skill-button">TENSORFLOW</a>
                  <a className="skill-button">SQL</a>
                  <a className="skill-button">PYTHON</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2023 — 2024</h6>
              </div>
              <div className="experience-item-details">
                <h4>National Geospatial-Intelligence Agency, Yale Foreign Policy Institute</h4>
                <h6>Software Engineer</h6>
                <p>Apply advanced data analysis to identify foreign intervention in regions of high interest to United States national security. Leveraged geospatial analysis techniques with a heavy emphasis on ML-based solutions. Working closely with the Department of Defense and the National Geospatial-Intelligence Agency to investigate Russian activity in Africa. Pioneered the usage of advanced data analytics and geospatial analysis to scrutinize foreign intervention in Northern Africa. Formulated statistical analysis packages in R to locate the sites of Russian-owned oil rig developments in North Africa. Identified and exposed 10 instances of Wagner group (a Russian proxy group) exploitation in Libya using satellite imagery processing.</p>
                <div className="skills-container">
                  <a className="skill-button">R</a>
                  <a className="skill-button">GEE</a>
                  <a className="skill-button">LANDSAT</a>
                  <a className="skill-button">SQL</a>
                </div>
              </div>
            </div>
                        
            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2022 — 2023</h6>
              </div>
              <div className="experience-item-details">
                <h4>University of Chicago, Scientific & High Performance Computing Group </h4>
                <h6>Software Engineering Intern</h6>
                <p>Developed Accelerate (formerly Moment), a site for connecting artificial intelligence researchers in academia to passionate collaborators to improve academic turnover through crowd-sourced collaboration, funded by the National Science Foundation. Created Foundry-ML, a Python package and API used by over 20,000 monthly users, simplifying access to ML-ready datasets in materials science and chemistry. Developed API features for easy data loading in local or cloud environments and facilitated dataset publishing for community use. The package enhances the repeatability of cutting-edge machine learning models from academic papers and includes features for seamless deployment of published ML models.</p>
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
              <div className="experience-item-intro">
                <h6>2022 — 2022</h6>
              </div>
              <div className="experience-item-details">
                <h4>Argonne National Laboratory, Globus Labs</h4>
                <h6>Artificial Intelligence Research Intern</h6>
                <p>Spearheaded the processing of global climate radar data to identify regional vulnerabilities, developing a stacked SRCNN-based model that enhanced climate radar data usability for analysis. Developed and implemented a convolutional neural network (CNN) to classify and segment high-resolution satellite images, reducing manual annotation time by 50%. Implemented ML downscaling techniques, achieving a 16x improvement in radar data resolution.</p>
                <div className="skills-container">
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">TENSORFLOW</a>
                  <a className="skill-button">KERAS</a>
                  <a className="skill-button">HADOOP</a>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-item-intro">
                <h6>2021 — 2022</h6>
              </div>
              <div className="experience-item-details">
                <h4>CVM Lab@IIT & UMich Ann Arbor</h4>
                <h6>Computational Neuroscience Research Intern</h6>
                <p>Developed computational techniques to analyze brain scans, identifying patterns across divergent datasets. Led the collection and processing of mouse brain scans at a research facility. Engineered a comprehensive data pipeline to convert high-resolution scans into manageable formats for deeper analysis. Presented research findings at national conferences. </p>
                <div className="skills-container">
                  <a className="skill-button">PYTHON</a>
                  <a className="skill-button">C++</a>
                  <a className="skill-button">BIG DATA</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="projects">
          <div id="experience" className="journey">
            <div className="learning-path">
           <p className='title2'>Projects</p>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={spinertia}/>
                </div>
                <div className="project-details">
                  <h4>Spinertia</h4>
                  <h6>Technical Lead</h6>
                  <p>
                    Cofounded a venture-backed Yale-based biotech wearable start-up using artificial intelligence to create alternative modeling techniques for 
                    spinal deviation using a sensor array. Provisionally patented on the proprietary AI model along with the design of the device. 
                    SHI Venture Development Program Fall 2024 Cohort. TSAI City Launchpad Startup Accelerator Fall 2024 Cohort.
                  </p>
                  <div className='link'>
                    <a href='https://www.spinertia.org/'>Live↗</a>
                    <a href='https://github.com/braedencu/'>Github↗</a>
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
                  <img src={eye}/>
                </div>
                <div className="project-details">
                  <h4>Geospatial Intelligence</h4>
                  <h6>Data Scientist</h6>
                  <p>
                    As a member of a team of post-graduate researchers at Yale University, I analyzed the impact of Russian intervention in Ukrainian territories using Python and R. We utilized Python libraries (Pandas, NumPy, Matplotlib, Seaborn) and R packages (ggplot2, dplyr, tidyr) for data manipulation, visualization, and statistical analysis. Our methods included regression, time series analysis, and machine learning for pattern identification, complemented by geospatial analysis with tools like GeoPandas. We emphasized data validation, cleaning, and used Jupyter Notebooks and R Markdown for an integrated, reproducible research environment, providing comprehensive insights into the socio-economic and political effects of the intervention.
                  </p>
                  <div className='link'>
                    <a href='https://www.tearline.mil/'>Live↗</a>
                    <a href='https://github.com/braedencu/'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">PYTHON</a>
                    <a className="skill-button">BIG DATA</a>
                    <a className="skill-button">AI/ML</a>
                  </div>
                </div>
              </div>
              
              
              <div className="experience-item">
                <div className="icon-intro">
                  <img src={epoch}/>
                </div>
                <div className="project-details">
                  <h4>Yale University School of Engineering & Applied Science</h4>
                  <h6>Research Assistant</h6>
                  <p> 
                    Piloted the development of a CUDA-enabled high-performance computing cluster, integrating provisioning automation to streamline resource allocation and deployment using the SLURM job scheduler. Advised by Prof. Brian Scassellati, working on developing SEAN3.2 (Social Environment for Autonomous Navigation), a high fidelity, extensible, and open source simulation platform designed for the evaluation of social navigation algorithms within ROS.
                  </p>
                  <div className='link'>
                    <a href='https://scazlab.yale.edu/'>Live↗</a>
                    <a href='https://github.com/IMSAai'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">HTML/CSS</a>
                    <a className="skill-button">ROS</a>
                    <a className="skill-button">C/C++</a>
                    <a className="skill-button">CUDA</a>
                    <a className="skill-button">AWS</a>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="icon-intro">
                  <img src={steelbroncorobotics}/>
                </div>
                <div className="project-details">
                  <h4>Steel Bronco Robotics</h4>
                  <h6>President</h6>
                  <p>
                    Steel Bronco Robotics is a 501(c)(3) nonprofit organization that gives underprivileged students access to competitive robotics at the highest level. Engineering programs are nonexistent in the local school system, a void that the organization fills. 
                    Founded the organization and raised $15000 in recurring sponsorship.
                  </p>
                  <div className='link'>
                    <a href='https://www.steelbroncorobotics.com/'>Live↗</a>
                    <a href='https://github.com/BraedenCu/JetsonCodeFRC2020'>Github↗</a>
                  </div>
                  <div className="skills-container">
                    <a className="skill-button">AI/ML</a>
                    <a className="skill-button">IMAGE PROCESSING</a>
                    <a className="skill-button">DATA ANALYSIS</a>
                    <a className="skill-button">PYTHON</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
