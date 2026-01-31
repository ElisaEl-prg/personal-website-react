import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyCarousel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='skill' id='skills'>
      <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}></div>
      <Container>
        <div className={`slide-in ${inView ? 'visible' : ''}`}>
          <div className='skill-bx'>
            <h2>MY SKILLS</h2>
            <hr />
            <p>
             With a solid background in computer development principles and practices, I present below my technical skills and core competencies.
            </p>
            <span className='skill-desc'>MY SKILLS INCLUDE:</span>
            <hr />
            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt='Web Development' />
                <h5>Web Development</h5>
                <h6>TypeScript • HTML • CSS • JavaScript • React</h6>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/2920/2920277.png' alt='Mobile Development' />
                <h5>Mobile Development</h5>
                <h6>React Native</h6>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png' alt='Programming' />
                <h5>Programming Languages</h5>
                <h6>HTML • CSS • JavaScript • Python • Java</h6>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/2906/2906206.png' alt='Backend' />
                <h5>Backend Development</h5>
                <h6>Node.js</h6>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/2772/2772128.png' alt='Database' />
                <h5>Database</h5>
                <h6>MySQL • Access</h6>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='Version Control' />
                <h5>Styling & UI</h5>
                <h6>Tailwind CSS</h6>
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyCarousel;