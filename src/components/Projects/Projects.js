import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import api from '../../Assets/Projects/api.png';
import quiz from '../../Assets/Projects/quiz.jpg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Mis <strong className='purple'>Proyectos </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Aca se encuentran proyectos en los que estuve trabajando
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title='Api Rest Sequelize'
              description='Ejemplo de Api para Ecomerce. Base de datos docker/postgres creado con ORM Sequelize y gestion de usuario con Passport.Js y JWT. Ya esta configurado para el deploy en heroku'
              link='https://github.com/AgustinCaldart/apiNode'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title='Api Chat con Websockets'
              description='Ejemplo de Api para gestión de chat, trabaja con websocket para la visualizacion de los mensaje en tiempo real'
              link='https://github.com/AgustinCaldart/node_mongo_websok'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title='Quiz React'
              description='Simple Quiz de Golang hecho en React'
              link='https://quiz-one-woad.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
