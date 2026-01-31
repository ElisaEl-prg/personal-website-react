import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from 'react-bootstrap';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}>
      <Container>
        <span className="education">EDUCATION</span>
        <hr />
        <ul className="timeline-1 text-white">
          <li className="event" data-date="2019 - 2023">
            <h4 className="mb-3">High School Diploma</h4>
            <p>
              Graduated with honors from "Janaq Kilica".
            </p>
          </li>
          <li className="event" data-date="2023 - 2027">
            <h4 className="mb-3 pt-3">Bachelor of Computer Science</h4>
            <p>
              Currently pursuing a degree in Computer Science at POLIS University.
              Focus on Cybersecurity, Networking IoT, and Web Development.
            </p>
          </li>
          <li className="event" data-date="2024 - Present">
            <h4 className="mb-3 pt-3">Online Certifications</h4>
            <p>
              Continuous learning through platforms like Cisco ,edX & EarSketch.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Education;