import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              UNA BREVE <span className='purple'> INTRODUCCIÓN </span> SOBRE MÍ
            </h1>
            <p className='home-about-body'>
              Me gusta estar contastemente aprendiendo cosas nuevas. Por ese
              motivo soy Programador
              <br />
              <br />
              Soy un defensor de &nbsp;
              <i>
                <b className='purple'>Javascript y Golang. </b>
              </i>
              <br />
              <br />
              Estoy interesado en aprender &nbsp;
              <i>
                <b className='purple'>Inteligencia artificial </b>o temas
                relacionadas a estas{' '}
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>ENCUENTRAME</h1>
            <p>
              Sientase libre de <span className='purple'>contactarme </span>en
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/AgustinCaldart'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/acaldart/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
