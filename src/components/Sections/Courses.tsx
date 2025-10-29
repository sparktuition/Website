import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      icon: "fa-school",
      title: "CBSE / ICSE (1st–12th)",
      description: "Comprehensive school curriculum coaching for CBSE and ICSE boards from Grade 1 through Grade 12. Curriculum-mapped lessons, revision plans and exam strategies."
    },
    {
      id: 2,
      icon: "fa-rocket",
      title: "JEE Coaching",
      description: "Targeted JEE coaching with structured modules, concept-first lessons, topic-wise practice and full-length mock tests for aspirants aiming for engineering entrance exams."
    },
    {
      id: 5,
      icon: "fa-heartbeat",
      title: "NEET Coaching",
      description: "NEET-focused coaching emphasising strong conceptual understanding in Biology, Chemistry and Physics, regular test series and doubt-clearing sessions for medical aspirants."
    },
    {
      id: 6,
      icon: "fa-chalkboard-teacher",
      title: "CET Coaching",
      description: "State CET preparation with curriculum-aligned modules, previous-year paper practice and time-management strategies to maximise scores in competitive state exams."
    },
    {
      id: 3,
      icon: "fa-cogs",
      title: "Engineering Subjects",
      description: "Subject coaching across engineering streams — Aerospace, Mechanical, AI and more. Focus on core concepts, problem solving and application-based learning."
    },
    {
      id: 4,
      icon: "fa-graduation-cap",
      title: "B.Sc Coaching",
      description: "B.Sc. level coaching in Mathematics, Physics and AI — designed for strong conceptual grounding and university exam readiness."
    }
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-title">
          <h2>Our Courses</h2>
          <p>We offer a wide range of subjects and levels to meet every student's needs</p>
        </div>
        
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <div className="course-icon">
                <i className={`fas ${course.icon}`}></i>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a href="#contact" className="btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="admission-info">
          <h3>Admissions Open Now!</h3>
          <p>Don't miss the opportunity to achieve your academic goals with Spark Learning Hub.</p>
          <a href="#contact" className="contact-button">Enquire & Book</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;