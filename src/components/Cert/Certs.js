import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CertCard from './CertCard';

import apiNode from '../../Assets/Cert/apiNodeJS.png';
import arrayJs from '../../Assets/Cert/arrayJs.png';
import asincronismoJs from '../../Assets/Cert/asincronismoJs.png';
import basicoJS from '../../Assets/Cert/basicoJS.png';
import cloudAWS from '../../Assets/Cert/cloudAWS.png';
import cloudComputingAWS from '../../Assets/Cert/cloudComputingAWS.png';
import db from '../../Assets/Cert/db.png';
import ecmaJS from '../../Assets/Cert/ecmaJS.png';
import fundamentoJS from '../../Assets/Cert/fundamentoJS.png';
import go from '../../Assets/Cert/go.png';
import npm from '../../Assets/Cert/npm.png';
import PooGO from '../../Assets/Cert/PooGO.png';
import prework from '../../Assets/Cert/prework.png';
import reactHook from '../../Assets/Cert/reactHook.png';
import reactRouterRedux from '../../Assets/Cert/reactRouterRedux.png';
import scopeJS from '../../Assets/Cert/scopeJS.png';
import storageAWS from '../../Assets/Cert/storageAWS.png';
import v8JS from '../../Assets/Cert/v8JS.png';
import apiPost from '../../Assets/Cert/apiPost.png';
import apiAuth from '../../Assets/Cert/apiAuth.png';
import introBack from '../../Assets/Cert/introBack.png';
import mongoWebSocket from '../../Assets/Cert/mongoWebSocket.png';
import backNest from '../../Assets/Cert/backNest.png';
import nestModular from '../../Assets/Cert/nestModular.png';
import goRest from '../../Assets/Cert/goRest.png';
import grpc from '../../Assets/Cert/grpc.png';
import cqrs from '../../Assets/Cert/cqrs.png';

function Certs() {
  return (
    <Container fluid className='project-section'>

      <Container>
        <h1 className='project-heading'>
          Mis <strong className='purple'>Certificados </strong>
        </h1>
        <p style={{ color: 'white' }}>Aca se encuentran mis certificaciones</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={prework}
              title='PreWork'
              description='WSL2 configuration'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={v8JS}
              title='V8 JS'
              description='History and logic of the V8 engine'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={basicoJS}
              title='Basic JS'
              description='Basic concepts of JS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={ecmaJS}
              title='EcmaScript 6+'
              description='History of Ecma and changes over time'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={asincronismoJs}
              title='JavaScript Asynchronism'
              description='Handling asynchronism with Callback, Promise, and Async-Await'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={fundamentoJS}
              title='NodeJS Fundamentals'
              description='Fundamentals of NodeJS'
            />
          </Col>

          <Col md={4} className='project-card'>
            <CertCard
              imgPath={scopeJS}
              title='JavaScript Scope'
              description='Scope/Hoisting/Closure'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={arrayJs}
              title='Arrays in JavaScript'
              description='Handling arrays in JavaScript'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={npm}
              title='NPM'
              description='Managing and concepts of NPM'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={db}
              title='Database Fundamentals'
              description='Fundamentals of related and non-related databases (MySQL/Firebase)'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudAWS}
              title='Cloud AWS'
              description='Cloud programming concepts'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudComputingAWS}
              title='Computing AWS'
              description='Different ways to host an application on AWS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={storageAWS}
              title='AWS Storage'
              description='Data persistence with buckets'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={introBack}
              title='Backend Introduction'
              description='General concepts of backend development'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={go}
              title='Golang'
              description='First look at Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={PooGO}
              title='Golang OOP'
              description='Object-oriented programming with Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactRouterRedux}
              title='React Router/Redux'
              description='Routing with React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactHook}
              title='React Hooks'
              description='Handling Hooks in React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiNode}
              title='Express API'
              description='Creating an API with Express'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiPost}
              title='Express with Postgres'
              description='ORM with Sequelize, storing data in Postgres'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiAuth}
              title='Authentication with PassportJS and JWT'
              description='Security layer for user management in the API'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={mongoWebSocket}
              title='MongoDB and Web Socket'
              description='Real-time messaging API using WebSocket and file uploading with Multer'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={backNest}
              title='Backend with Nest'
              description='API handling for commerce, controllers, services, DTOs, and parameter validation with class-validator'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={nestModular}
              title='Modular Programming in Nest'
              description='Continuation of the API, dependency injection, documentation with Swagger, and deployment on Heroku'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={goRest}
              title='REST API and Websocket with GO'
              description='REST API with GO utilizing CRUD operations. Creates an endpoint to fetch information of authenticated users and integration with WebSocket'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={grpc}
              title='Protobuffers and gRPC'
              description='High-performance microservices'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cqrs}
              title='Event Architecture and CQRS'
              description='Microservices using Event Architecture with CQRS indexed in Elasticsearch'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Certs;
