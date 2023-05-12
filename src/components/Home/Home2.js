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
              About Me <span className='purple'> A Brief Introduction </span>
            </h1>
            <p className='home-about-body'>
              Welcome to my personal website! a passionate learner with a strong interest in data engineering.
              I thrive on constantly expanding my knowledge and exploring new technologies.
              <br />
              <br />
              As an experienced programmer, I have a background in backend development, particularly in languages like Go and Python. However, my growing fascination with data engineering has led me to shift my focus towards this field. I am excited about the possibilities it offers and the potential to work with large datasets, building scalable and efficient data pipelines.
              <br />
              <br />
              My goal is to leverage my programming skills and delve deeper into the realm of data engineering, including areas such as data processing, ETL (Extract, Transform, Load) workflows, and cloud-based data infrastructure. I'm particularly eager to apply these skills to real-world scenarios and contribute to the development of intelligent systems.
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
            <h1>Find me</h1>
            <p>
              Talk with <span className='purple'>me </span>
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/acaldo'
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
