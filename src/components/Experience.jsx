import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience & Leadership</h2>
        <div className="experience-content">

          {/* Leadership Roles */}
          <div className="experience-item">
            <h3 className="experience-title">Leadership Roles</h3>
            <div className="experience-details">
              <ul>
                <li>Director, Human Resources, BRAC University Response Team (BURT), Jan 2025 – Sep 2025</li>
                <li>Director, Finance, BRAC University Response Team (BURT), Sep 2025 – Present</li>
                <li>Director, Blood Donation Campaign, BRAC University Response Team (BURT)</li>
                <li>Director, Project Hashimukh, BRAC University Response Team (BURT)</li>
                <li>Event Organizer, “Ekattor Obinashi Shotta”, Viqarunnisa Noon School and College, April 2019</li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="experience-item">
            <h3 className="experience-title">Achievements</h3>
            <div className="experience-details">
              <ul>
                <li>Ranked 13th, BRACU Intra University Girls Programming Contest, June 2023</li>
                <li>Merit-Based Scholarship, Awarded 10% tuition fee waiver at BRAC University</li>
              </ul>
            </div>
          </div>

          {/* Participation */}
          <div className="experience-item">
            <h3 className="experience-title">Participation</h3>
            <div className="experience-details">
              <ul>
                <li>Participant, HULT Prize Summer Challenge, 2023</li>
                <li>Volunteer, 16th Convocation, BRAC University, February 2025</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
