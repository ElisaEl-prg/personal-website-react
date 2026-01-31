import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

// Import fotot e certifikatave (ndrysho emrat sipas fotove që ke)
// Nëse nuk ke foto ende, komento këto dhe përdor online images më poshtë
// import cert1 from '../assets/img/cert1.jpg';
// import cert2 from '../assets/img/cert2.jpg';
// import cert3 from '../assets/img/cert3.png';

export const Certeficates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Cisco Networking Academy",
      date: "January 2024",
      imgUrl: require('../assets/img/cisco.jpg'),
      // imgUrl: cert1  // ← Përdor këtë kur të kesh foto lokale
    },
    {
      title: "Full Stack Development",
      issuer: "CIT Academy",
      date: "June 2024",
      imgUrl: require('../assets/img/full.jpeg'),
      // imgUrl: cert2
    },
    {
      title: "Girls In ICT Hackathon",
      issuer: "freeCodeCamp",
      date: "May 2024",
      imgUrl: require('../assets/img/girls.jpeg'),
      // imgUrl: cert3
    },
    {
      title: "Digital Pioneers in the Transformation Era",
      issuer: "Polis University",
      date: "January 2023",
      imgUrl: require('../assets/img/digital.jpeg'),
    },
    {
      title: "Learn A-Thon",
      issuer: "ICT",
      date: "April 2025",
      imgUrl: require('../assets/img/cert.jpg'),
    },
  ];

  return (
    <section className="certificates" id="certifications">
      <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}></div>
      <Container className={`slide-in ${inView ? 'visible' : ''}`}>
        <Row>
          <Col>
            <h2>Certifications & Achievements</h2>
            <p>Professional certifications and courses I've completed to enhance my skills</p>
            
            <Row style={{marginTop: '40px'}}>
              {certificates.map((cert, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <Card className="cert-card h-100">
                    <div className="cert-img-wrapper">
                      <Card.Img 
                        variant="top" 
                        src={cert.imgUrl} 
                        alt={cert.title}
                        className="cert-image"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="cert-title">{cert.title}</Card.Title>
                      <Card.Subtitle className="cert-issuer mb-2">{cert.issuer}</Card.Subtitle>
                      <Card.Text className="cert-date">{cert.date}</Card.Text>
                      <Card.Text className="cert-description">{cert.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};