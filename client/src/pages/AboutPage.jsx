import teamImage1 from '../assets/image 1.jpeg';
import teamImage2 from '../assets/image 2.jpeg';
import teamImage3 from '../assets/image 3.jpeg';
import teamImage4 from '../assets/image 4.jpeg';
import teamImage5 from '../assets/image 5.jpeg';
import teamImage6 from '../assets/image 6.jpeg';
import logoImage from '../assets/logo.jpg';

const teamMembers = [
  {
    name: 'Project Planning Team',
    role: 'Scheduling and coordination',
    image: teamImage1,
    alt: 'Project planning team photo'
  },
  {
    name: 'Waterproofing Specialists',
    role: 'Surface protection systems',
    image: teamImage2,
    alt: 'Waterproofing specialists photo'
  },
  {
    name: 'Execution Supervisors',
    role: 'On-site quality control',
    image: teamImage3,
    alt: 'Execution supervisors photo'
  },
  {
    name: 'Finishing And Handover Team',
    role: 'Final detailing and closeout',
    image: teamImage4,
    alt: 'Finishing and handover team photo'
  },
  {
    name: 'Roof Protection Team',
    role: 'Roof waterproofing',
    image: teamImage5,
    alt: 'Roof protection team photo'
  },
  {
    name: 'Institutional Delivery Team',
    role: 'Large-site coordination',
    image: teamImage6,
    alt: 'Institutional delivery team photo'
  }
];

const loopingTeamMembers = [...teamMembers, ...teamMembers];

function AboutPage() {
  return (
    <main className="section page-content">
      <section className="about-feature">
        <div className="about-feature-copy">
          <p className="eyebrow">About Us</p>
          <h2>We build. We protect. You relax.</h2>
          <p className="page-text">
           Established in 1988, <b>Supreme Aqua Seal Private Limited</b> is one of the most
trusted waterproofing brands in India. As one of the early movers in the
industry, we have leveraged our experience in creating reliable, effective,
and lasting waterproofing solutions across industries. From commercial
terraces with light and heavy traffic, to indoor areas with prolonged
wetness, our solutions are customizes to your specific needs, ensuring a
perfect fit for your puzzle.

          </p>
          <p className="page-text">
            Every assignment is approached with an emphasis on practical detail, accountability,
            and material performance so the final result is both functional and long-lasting.
          </p>
          <p className="page-text">
            During our 5 Decades of experience, we have been achieving huge
successes within the construction industry. As a Specialist Waterproofing
Company, Supreme Aqua Seal India Pvt. Ltd. has been the preferred
contractor for many of leading Architects, Structural Designers,
Corporates, Construction Companies, Hotels, Hospitals, etc. Our welltrained staff and effective execution have established us as one of the
Foremost Waterproofing Company in the country.
          </p>
          <p className="page-text">
            Whether the requirement is a focused waterproofing scope or a broader construction
            assignment, we approach each project with the same goal: create dependable spaces,
            prevent long-term failures, and deliver work that clients can trust well beyond
            handover.
          </p>
        </div>
        <div className="about-feature-media">
          <img
            src={logoImage}
            alt="ConstructPro logo"
            className="about-feature-image"
          />
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-team-copy">
          <p className="eyebrow">Our Team</p>
          <h2>A unified team of planners, supervisors, and execution experts.</h2>
          <p className="page-text">
            Our team brings together site engineers, waterproofing experts, project coordinators,
            and skilled execution crews who understand how to move from concept to delivery
            without losing control of quality.
          </p>
          <p className="page-text">
            We work collaboratively across every stage, keeping communication direct and site
            decisions aligned with the project&apos;s timeline, scope, and technical needs.
          </p>
        </div>
        <div className="team-slider-shell team-slider-full team-marquee-shell">
          <div className="team-slider-viewport">
            <div className="team-slider-track team-marquee-track">
              {loopingTeamMembers.map((member, index) => (
                <article className="team-card" key={`${member.name}-${index}`}>
                  <img className="team-card-image" src={member.image} alt={member.alt} />
                  <div className="team-card-copy">
                    <span>{member.role}</span>
                    <h3>{member.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-feature about-feature-text-only">
        <div className="about-feature-copy">
          <p className="eyebrow">Our Leadership</p>
          <h2>Founded by Mr.S.S LAL Gupta </h2>
          <p className="page-text">
            with a desire to set and raise quality standards in construction waterproofing.We have developed
            unique systems with our decades-rich experience, for your long-term peace of mind.
          </p>
          <p className="page-text">
            Over 3 generations, <b>Aseem Gupta and Arun Gupta</b> have followed the same Principles and High Standards established
            by him.We are known for our Professionalism, Dedications, Sincerity, Personalised attention
            to every detail and our Commitment towards all Projects.

            Our Team has grown significantly over the years,with trained foremen-each with 20 years worth
            experience, skilled engineers and trained labourers.We deep-dive and conduct extensive research 
            into your challenges, allowing us to create training modules that are constantly updated to keep
            the team at the forefront of innovation.Our workforce in entirely internal,ensuring personal 
            monitoring and constant support at every stage of the project and beyond pan-india.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
