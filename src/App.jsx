import "./App.css";

function App() {
  const themes = [
    "Climate Change Adaptation, Mitigation, and Resilient Infrastructure",
    "Sustainable Urban Development and Smart Cities",
    "Green Building Design and Sustainable Architecture",
    "Innovative Building Technologies and Construction Management",
    "Water Resources Management and Environmental Security",
    "Circular Economy, Waste Management, and Resource Efficiency",
    "Geoinformatics, Remote Sensing, and Spatial Data Infrastructure",
    "Housing Affordability, Property Development, and Estate Management",
    "Construction Economics, Quantity Surveying, and Cost Management",
    "Environmental Health, Pollution Control, and Urban Ecology",
    "Disaster Risk Reduction and Emergency Management Infrastructure",
    "Environmental Policy, Governance, and Planning Law",
    "Sustainable Agriculture, Food Systems, and Rural–Urban Linkages",
    "Green Technology, Innovation, and Digital Transformation",
    "Environmental Economics, Finance, and Sustainable Development",
    "Youth Engagement, Capacity Building, and Environmental Entrepreneurship",
  ];

  const dates = [
    ["Abstract Submission", "16 February – 26 March, 2026"],
    ["Notification of Abstract Acceptance", "31 March, 2026"],
    ["Full Paper Submission Deadline", "30 April, 2026"],
    ["Notification of Full Paper Acceptance", "8 May, 2026"],
    ["Re-submission of Revised Paper", "22 May, 2026"],
    ["Conference Dates", "21 – 23 July, 2026"],
  ];

  const fees = [
    ["Local Participants", "Early: ₦50,000", "Late: ₦60,000"],
    ["Foreign Participants", "Early: $250", "Late: $300"],
    ["Postgraduate Students", "Early: ₦50,000", "Late: ₦60,000"],
    ["Undergraduates", "₦20,000", ""],
    ["Corporate Bodies & Exhibitors", "₦20,000", ""],
  ];

  return (
    <div className="site">
      <header className="hero">
        <nav className="navbar">
          <div>
            <p className="school">School of Environmental Technology</p>
            <h1>Federal University of Technology, Minna</h1>
          </div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#themes">Themes</a>
            <a href="#dates">Dates</a>
            <a href="#registration">Register</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">6th SETIC 2026</span>
            <h2>School of Environmental Technology International Conference</h2>
            <p>
              Building Sustainable Futures, Environmental Stewardship, and
              Climate Action for Resilient Communities in Africa and Beyond.
            </p>

            <div className="hero-buttons">
              <a className="btn primary" href="mailto:setic@futminna.edu.ng">
                Submit Abstract
              </a>
              <a className="btn secondary" href="#themes">
                View Sub-Themes
              </a>
            </div>
          </div>

          <div className="info-box">
            <div>
              <strong>Date</strong>
              <p>21st – 23rd July, 2026</p>
            </div>
            <div>
              <strong>Venue</strong>
              <p>SET Lecture Theater, FUT Minna, Niger State, Nigeria</p>
            </div>
            <div>
              <strong>Conference Mode</strong>
              <p>Hybrid: Physical and Virtual</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>setic@futminna.edu.ng</p>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section about-grid">
        <div className="card">
          <h3>Chief Host</h3>
          <h4>Prof. Faruk Adamu Kuta</h4>
          <p>Vice-Chancellor, Federal University of Technology, Minna</p>
        </div>

        <div className="card">
          <h3>Host</h3>
          <h4>Prof. Olurotimi Adebowale Kemiki</h4>
          <p>Dean, School of Environmental Technology</p>
        </div>

        <div className="card">
          <h3>Conference Focus</h3>
          <h4>Sustainability, Resilience and Climate Action</h4>
          <p>
            Interdisciplinary solutions for Africa’s environmental and
            development challenges.
          </p>
        </div>
      </section>

      <section id="themes" className="section dark-section">
        <p className="small-heading">Call for Papers</p>
        <h2>Sub-Thematic Areas</h2>

        <div className="themes-grid">
          {themes.map((theme, index) => (
            <div className="theme-card" key={index}>
              <span>{index + 1}</span>
              <p>{theme}</p>
            </div>
          ))}
        </div>

        <div className="special-focus">
          <h3>Special Focus Areas for African Context</h3>
          <p>
            Gender, Social Inclusion and Environmental Justice; Regional
            Integration and Cross-Border Infrastructure Development; Rapid
            Urbanization Challenges and Opportunities in Africa.
          </p>
        </div>
      </section>

      <section id="dates" className="section">
        <p className="small-heading blue">Important Dates</p>
        <h2>Plan Your Submission</h2>
        <p className="intro">
          Authors are invited to submit abstracts and full papers for
          presentation and publication in the SETIC 2026 Conference Proceedings.
        </p>

        <div className="dates-grid">
          {dates.map((item, index) => (
            <div className="date-card" key={index}>
              <strong>{item[0]}</strong>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="registration" className="section light-section">
        <p className="small-heading blue">Conference Registration Fees</p>
        <h2>Registration Categories</h2>

        <div className="fees-grid">
          {fees.map((fee, index) => (
            <div className="fee-card" key={index}>
              <h3>{fee[0]}</h3>
              <p>{fee[1]}</p>
              {fee[2] && <small>{fee[2]}</small>}
            </div>
          ))}
        </div>

        <div className="contact-box">
          <div>
            <strong>Email</strong>
            <p>setic@futminna.edu.ng</p>
          </div>
          <div>
            <strong>Website</strong>
            <p>www.setic.futminna.edu.ng</p>
          </div>
          <div>
            <strong>Enquiry</strong>
            <p>+234 806 328 6122</p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          © 2026 School of Environmental Technology, Federal University of
          Technology, Minna. SETIC 2026.
        </p>
      </footer>
    </div>
  );
}

export default App;