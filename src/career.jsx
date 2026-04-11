import Header from "./header"
import Footer from './copyright';
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';

const jobList = [
  {
    id: 1,
    role: "Frontend Developer",
    exp: "1–3 years",
    location: "Bangalore, India",
    qualification: "B.Tech / B.Sc in Computer Science",
    eligibilityCriteria: "Strong knowledge of React.js, JavaScript, HTML, CSS, and responsive design. Understanding of APIs and Git is preferred.",
    jobResponsibilities: "Develop and maintain user-facing web applications using React.js. Collaborate with backend developers, ensure UI/UX quality, optimize components for performance, and handle bug fixes.",
  },
  {
    id: 2,
    role: "UI/UX Designer",
    exp: "2–5 years",
    location: "Remote / Pune, India",
    qualification: "Bachelor’s degree in Design or related field",
    eligibilityCriteria: "Proficiency in Figma, Adobe XD, or Sketch. Knowledge of design systems, typography, and color theory.",
    jobResponsibilities: "Design intuitive user interfaces, conduct usability testing, collaborate with developers, and maintain consistent design standards across all products.",
  },
  {
    id: 3,
    role: "Backend Developer",
    exp: "3–6 years",
    location: "Hyderabad, India",
    qualification: "B.Tech in Computer Science or IT",
    eligibilityCriteria: "Experience in Node.js, Express, MongoDB, and REST APIs. Familiarity with cloud deployment and microservices architecture.",
    jobResponsibilities: "Build scalable APIs, integrate databases, ensure security and performance, and collaborate with frontend engineers to deliver high-quality features.",
  },
];

function Career() {

  return (
    <>
        <Header/>

        <section className="carPic">
          <h2>Are you a problem solver?</h2>
          <p>Join the T2B family, where we tackle real-world challenges with cutting-edge technology! Dive into a dynamic environment where innovation meets excellence and cost-efficiency, delivering top-notch results and exceptional value.</p>
          <button className='btn1'>Join Us</button>
        </section>

        <section className='career' id='career'>

          <h1 className='proHead'>We value our <span>people</span></h1>

          <div className="carContainer">

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <h3>Health Insurance</h3>
                <p>Health coverage for all T2B members, with family coverage if you qualify as a binary—because your well-being comes first</p>
              </div>
            </div>

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faCcAmex}/>
                </div>
                <h3>Flexibility</h3>
                <p>Flexible hours and WFH options with prior notice, balancing work and responsibility</p>
              </div>
            </div>

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <h3>Team Outing & Celeberation</h3>
                <p>Work hard, celebrate harder! We believe in fun as much as we believe in success</p>
              </div>
            </div>

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <h3>Awards & Recognition</h3>
                <p>Your hard work deserves recognition—enjoy monthly and annual accolades, along with performance bonuses for standout contributions</p>
              </div>
            </div>

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <h3>Continous Learning & Growth</h3>
                <p>Grow with us every day—face new challenges, learn, and thrive!</p>
              </div>
            </div>

            <div className="carBox">
              <div>
                <div className='carIcon'>
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <h3>Open Dress Code</h3>
                <p>Dress comfortably while remaining professional and ready for the workplace</p>
              </div>
            </div>

          </div>
  
        </section>

        <section className="opening">

          <h1 className="proHead">Current <span>Openings</span></h1>

          <div className="openContainer">

            {jobList.map((job) => {
                return (
                  <div className="openBox">

                    <h2>{job.role}</h2>

                    <div className="openDetails">
                      <h4>Experience : {job.exp}</h4>
                      <h4>Location : {job.location}</h4>
                    </div>
                    <div className="openRule">
                      <p><strong>Qualification: </strong> <br /> {job.qualification}</p>
                      <p><strong>Eligibility Criteria: </strong> <br /> {job.eligibilityCriteria}</p>
                      <p><strong>Job Responsibilities: </strong> <br />{job.jobResponsibilities}</p>
                    </div>
                    <div className="openButton">
                      <Link to="#" >Read More...</Link>
                      <button className="btn1">Apply</button>
                    </div>
                  </div>
                )
              })}

          </div>

        </section>

        <section className="other">
          <div className="otherDetails">
            <h1 className="proHead">Didn't find your role in current openings? <br /> Don’t worry!</h1>
            <p>Submit your details and we will reach out to you when a suitable opportunity opens up.</p>
            <button className="btn1">Share Details</button>
          </div>
        </section>

        <Footer/>
    </>
  )
}

export default Career
