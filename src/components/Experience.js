import React from "react";
import { useInView } from 'react-intersection-observer';
import { Container } from "react-bootstrap";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container className="py-5">
      <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}>
        <span className="experience">EXPERIENCE</span>
        <hr />
        <ul className="timeline-2 text-white">
          <li className="event" data-date="Jun 2023 - Dec 2023">
            <h4 className="mb-3 pt-3">Hospital Data Manager OpenERP</h4>
            <p>Managed and maintained hospital patient data systems, ensuring data integrity and compliance with privacy standards.
            </p>
          </li>
          <li className="event" data-date="Jan 2024 - Jun 2024">
            <h4 className="mb-3 pt-3">Full Stack Developer</h4>
            <p>
              Engineered scalable full-stack applications leveraging React, Node.js to deliver seamless user experiences.
            </p>
          </li>
          <li className="event" data-date="Jul 2024 - Present">
            <h4 className="mb-3 pt-3">Front/Backend Developer Intern</h4>
            <p className="mb-0">
              Designed and implemented responsive web interfaces with React.js and contemporary CSS frameworks.
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Experience;