import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import ProfileImg from '../assets/img/fotoprofili.png';

export const Banner = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const toRotate = ["App Developer", "Software Engineer", "Web Developer", "Cybersecurity Enthusiast"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const pinkStyle = {
        background: 'linear-gradient(90deg, #ff6ec4 0%, #ff9a9e 50%, #fad0c4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    const whiteStyle = {
        color: '#fff',
        background: 'none',
        WebkitTextFillColor: '#fff'
    };

    return (
        <section className="banner" id="home">
            <div ref={ref} className={`slide-in ${inView ? 'visible' : ''}`}></div>
            <Container className={`slide-in ${inView ? 'visible' : ''}`}>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            <span style={pinkStyle}>Hi! My name is Elisa.</span>
                            <br />
                            <span style={whiteStyle}>
                                I'm an <span className="txt-rotate"><span className="wrap" style={{borderRight: '0.1em solid #fff'}}>{text}</span></span>
                            </span>
                        </h1>
                        <p>👋 Welcome to my personal portfolio! I'm a passionate computer science enthusiast focused on cybersecurity. I enjoy protecting systems, exploring vulnerabilities, and building secure digital solutions in an ever-evolving tech world.</p>
                        <p>💻 I love designing reliable systems and understanding how data travels across the world. I specialize in React, JavaScript, Python, and various modern frameworks. Check out my projects and feel free to get in touch!</p>
                        <a href="#connect">
                            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={ProfileImg} alt="Elisa Resuli" style={{maxWidth: '100%', height: 'auto'}} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}