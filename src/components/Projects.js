import { Col, Container, Tab, Nav, Row } from 'react-bootstrap';
import { ProjectsCard } from './ProjectsCard';
import { useInView } from 'react-intersection-observer';

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const webProjects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React",
      imgUrl: require('../assets/img/web.jpeg'),
      url: "https://github.com/ElisaEl-prg"
    },
    {
      title: "Tripora Travel Agency",
      description: "Full-stack e-commerce website",
      imgUrl: require('../assets/img/trp1.jpeg'),
      url: "#"
    },
    {
      title: "Jewels Website",
      description: "Jewelry business website",
      imgUrl: require('../assets/img/jewels.jpg'),
      url: "#"
    },
  ];

  const mobileApps = [
    {
      title: "Health Scan Ai",
      description: "Custom application",
      imgUrl: require('../assets/img/app.jpeg'),
      url: "#"
    },
    {
      title: "Polis App",
      description: "Mobile application",
      imgUrl: require('../assets/img/polis.jpg'),
      url: "#"
    },
  ];

  const otherProjects = [
    {
      title: "Weather App",
      description: "Weather forecasting app",
      imgUrl: require('../assets/img/weather.jpeg'),
      url: "#"
    },
    {
      title: "EyeScape",
      description: "Virtual University Campus Simulation in VR",
      imgUrl: require('../assets/img/campus.jpeg'),
      url: "#"
    },
  ];

  return (
    <section className="project" id="projects">
      <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}></div>
      <Container className={`slide-in ${inView ? 'visible' : ''}`}>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>These are some of my latest projects showcasing my experience in web development, mobile apps, and innovative solutions.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Web Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Other Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {webProjects.map((project, index) => {
                      return (
                        <ProjectsCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                
                <Tab.Pane eventKey="second">
                  <Row>
                    {mobileApps.map((project, index) => {
                      return (
                        <ProjectsCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
                
                <Tab.Pane eventKey="third">
                  <Row>
                    {otherProjects.map((project, index) => {
                      return (
                        <ProjectsCard key={index} {...project} />
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}