import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';

import api from '../../Assets/Projects/api.png';
import quiz from '../../Assets/Projects/quiz.jpg';
import go from '../../Assets/Projects/go.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>
          My <strong className='purple'>Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
        Here are some projects I have been working on:
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={go}
              isBlog={false}
              title='ApiRest Golang'
              description='Simple REST API with connection to websockets and postgresql'
              link='https://github.com/acaldo/rest-websockets'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={go}
              isBlog={false}
              title='gRPC y protobuffer (unary | client streaming | server streaming | bi streaming)'
              link='https://github.com/acaldo/grpc'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={go}
              isBlog={false}
              title='CQRS y Arquitectura de eventos'
              description='Event architectures using CQRS indexed with ElasticSearch'
              link='https://github.com/acaldo/go-cqrs'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title='Api NestJS'
              description='APi skeleton trade in NestJS, Documentation in "/docs" with swagger and deploy in Heroku '
              link='https://github.com/acaldo/nest-store'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title='Api Rest Sequelize'
              description='Api Example for Ecommerce. Database docker/postgres created with ORM Sequelize and user management with Passport.Js and JWT. It is already configured for the deploy in heroku'
              link='https://github.com/acaldo/apiNode'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title='Api Chat con Websockets'
              description='API example for chat management, works with websocket to display messages in real time'
              link='https://github.com/acaldo/node_mongo_websok'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title='Quiz React'
              description='Simple Golang Quiz made in React'
              link='https://quiz-one-woad.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
