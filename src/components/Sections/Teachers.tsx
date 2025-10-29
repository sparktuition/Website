import './Teachers.css';

const Teachers = () => {
  return (
    <section className="teachers-section" id="teachers">
      <div className="container">
        {/* Section Header */}
        <header className="section-header">
          <h2>Our Expert Educators</h2>
          <p>Meet our highly experienced mentors. Detailed profiles help you find the perfect match for your academic goals.</p>
        </header>

        {/* Teachers Grid */}
        <div className="teachers-grid">
          
          {/* Card 1: Capt Sahana Sundar (Retd.) - Highlighted Profile */}
          <article className="teacher-card highlight" aria-labelledby="teacher-sahana">
            <div className="card-content-wrapper">
              <header className="card-intro">
                <div className="avatar primary-bg" aria-hidden="true">SS</div>
                <div>
                  <h3 id="teacher-sahana">Capt Sahana Sundar (Retd.)</h3>
                  <p className="role">Spoken English Specialist & Educator (Grades 1–12, CBSE & ICSE)</p>
                  <span className="location">Bengaluru, India</span>
                </div>
              </header>
              <div className="card-details">
                <h4 className="subhead">Professional Summary 🧭</h4>
                <p className="summary">With over 32 years of disciplined service in the National Cadet Corps (NCC) and vast administrative experience across schools, Capt Sundar brings leadership, discipline, and deep educational insight. She specializes in Spoken English and offers comprehensive tutoring for Grades 1–12 (CBSE & ICSE).</p>
                <h4 className="subhead">Key Competencies & Education 📚</h4>
                <ul className="list competence-list">
                  <li>Mastery of English language (academic & conversational) and exam-preparation skills.</li>
                  <li>Full-spectrum teaching: primary to senior secondary (Grades 1–12).</li>
                  <li>In-depth familiarity with CBSE & ICSE frameworks and assessment styles.</li>
                  <li>Advanced credentials: B.Sc., B.Ed., M.A. (English), MBA (IGNOU).</li>
                </ul>
                <h4 className="subhead">Specialist Offerings 🗣️</h4>
                <ul className="list competence-list">
                  <li>Spoken English Workshops: Group or one-to-one, focused on accent clarity, pronunciation, and fluency.</li>
                  <li>Interview & Public Speaking Coaching for young adults and professionals.</li>
                  <li>Comprehensive curriculum tutoring for Grades 1–12.</li>
                  <li>Behavioural Mentoring and customised learner-progress tracking.</li>
                </ul>
              </div>
            </div>
            <footer className="card-footer">
              <div className="meta-item">
                <strong>Contact:</strong>
                <span>8050023212</span>
              </div>
              <div className="meta-item">
                <strong>Email:</strong>
                <span>sundar.sahana@gmail.com</span>
              </div>
            </footer>
          </article>
          
          {/* Card 2: SURAJ.S - Science Educator */}
          <article className="teacher-card" aria-labelledby="teacher-suraj">
            <div className="card-content-wrapper">
              <header className="card-intro">
                <div className="avatar alt-bg" aria-hidden="true">SS</div>
                <div>
                  <h3 id="teacher-suraj">SURAJ.S</h3>
                  <p className="role">Science Educator & Life Science Specialist</p>
                  <span className="location">Bengaluru, India</span>
                </div>
              </header>
              <div className="card-details">
                <h4 className="subhead">Professional Summary 🧬</h4>
                <p className="summary">Passionate Life Science graduate with experience across multiple curricula (CBSE, ICSE, IGCSE). Excels at simplifying complex scientific concepts for students in Grades 6–10 and maintaining productive learning environments.</p>
                <h4 className="subhead">Core Expertise & Experience 🔬</h4>
                <ul className="list competence-list">
                  <li>Curriculum Focus: Grades 6–10 in core sciences (Physics, Chemistry, Biology).</li>
                  <li>B.Sc. in Life Science (75.05%) from The Oxford College of Science.</li>
                  <li>Experience as Assistant Teacher and full-time Academic Tutor (since 2021).</li>
                  <li>Creative & cognitive achievements (e.g., UCMAS, Abacus competitions).</li>
                </ul>
                <h4 className="subhead">Key Offerings ✅</h4>
                <ul className="list competence-list">
                  <li>In-depth Science tutoring (6th–10th) across major boards.</li>
                  <li>Effective student mentoring, discipline, and rapport-building.</li>
                  <li>Regular assessment, paper correction, and actionable feedback.</li>
                </ul>
              </div>
            </div>
            <footer className="card-footer">
              <div className="meta-item">
                <strong>Contact:</strong>
                <span>8217095980</span>
              </div>
              <div className="meta-item">
                <strong>Email:</strong>
                <span>suraj1295shivakumar@gmail.com</span>
              </div>
            </footer>
          </article>

          {/* Card 3: R. Vignesh - Aerospace Specialist */}
          <article className="teacher-card" aria-labelledby="teacher-vignesh">
            <div className="card-content-wrapper">
              <header className="card-intro">
                <div className="avatar tertiary-bg" aria-hidden="true">RV</div>
                <div>
                  <h3 id="teacher-vignesh">R. Vignesh</h3>
                  <p className="role">Aerospace Design & Analysis Specialist</p>
                  <span className="location">Bengaluru, India</span>
                </div>
              </header>
              <div className="card-details">
                <h4 className="subhead">Professional Summary 🚀</h4>
                <p className="summary">Aerospace Engineer with 3+ years of industrial experience at HAL, LTTS, and Safran. Specializes in Computational Analysis (FEA/CFD) and design for UAVs, aero-engines, and commercial aircraft structures.</p>
                <h4 className="subhead">Technical Expertise 💻</h4>
                <ul className="list competence-list">
                  <li>Computational Analysis (FEA/CAE): Nastran/Patran, Abaqus, Mechanical APDL.</li>
                  <li>Fluid Dynamics (CFD): ANSYS FLUENT/CFX, OpenFOAM, turbulence modeling.</li>
                  <li>Aero-Engine Performance: cycle calculations, component matching (MATLAB/Excel).</li>
                  <li>Design & Modeling: UG-NX, CATIA V5.</li>
                </ul>
                <h4 className="subhead">Career Highlights ✨</h4>
                <ul className="list competence-list">
                  <li>Led non-linear Riks-buckling checks for UAVs (Safran).</li>
                  <li>Contributed to Chandrayaan-3 mission activities (LEOS-ISRO).</li>
                  <li>Worked on turbojet design/matching at HAL Aero Engine R&D Centre.</li>
                  <li>Mentorship & Teaching for Math, Physics, Fluid Mechanics up to JEE Advanced level.</li>
                </ul>
              </div>
            </div>
            <footer className="card-footer">
              <div className="meta-item">
                <strong>Contact:</strong>
                <span>7975372608</span>
              </div>
              <div className="meta-item">
                <strong>Email:</strong>
                <span>vikivignesh1416@gmail.com</span>
              </div>
            </footer>
          </article>

        </div>

        {/* CTA Section */}
        <div className="teachers-cta-box">
          <h3>Ready to Get Started?</h3>
          <p>Book a trial class or explore partnership opportunities with our highly-qualified team.</p>
          <a href="#contact" className="btn primary-btn">Request a Trial Class</a>
        </div>
      </div>
    </section>
  );
};

export default Teachers;