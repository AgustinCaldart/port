import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CertCard from './CertCard';
import Particle from '../Particle';

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

function Certs() {
  return (
    <Container fluid className='project-section'>
      <Particle />
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
              description='Configuración WSL2'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={v8JS}
              title='V8 JS'
              description='Historia y lógica del motor v8'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={basicoJS}
              title='Básico JS'
              description='Conceptos básicos de JS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={ecmaJS}
              title='EcmaScript 6+'
              description='Historia de ecma y cambios en el tiempo'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={asincronismoJs}
              title='Asincronismo JavaScript'
              description='Manejo de asincronismo con Callback,Promise y Async-Await'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={fundamentoJS}
              title='Fundamentos de NodeJS'
              description='Fundamentos de Node'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={scopeJS}
              title='Scope JavaScript'
              description='Scope/Hoisting/Clousure'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={arrayJs}
              title='Array en JavaScript'
              description='Manejo de array en Javascript'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={npm}
              title='NPM'
              description='Manejo y conceptos de NPM'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={db}
              title='Fundamentos base de datos'
              description='Fundamentos de las base de datos relacionadas y no relacionadas (MySQL/Firebase)'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudAWS}
              title='Cloud Aws'
              description='Conceptos de programación en la nube'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={cloudComputingAWS}
              title='Computing Aws'
              description='Diferentes formas para hostear una aplicación en AWS'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={storageAWS}
              title='Storage AWS'
              description='Persistencia de datos con buckets'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={introBack}
              title='Introducción Backend'
              description='Conceptos generales del backend'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={go}
              title='Golang'
              description='Primer vistaso a Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={PooGO}
              title='Poo Golang'
              description='Programación orientada a objetos con Golang'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactRouterRedux}
              title='React Router/Redux'
              description='Routeo con React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={reactHook}
              title='React Hook'
              description='Manejo de los Hook en React'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiNode}
              title='Api en express'
              description='Creación de API con express'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiPost}
              title='Express con Postgress'
              description='ORM con Sequelize guardando los datos en Postgres'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={apiAuth}
              title='Autentificación con PassportJS y JWT'
              description='Capa de seguridad en la api para la gestion de usuarios'
            />
          </Col>
          <Col md={4} className='project-card'>
            <CertCard
              imgPath={mongoWebSocket}
              title='Mongo y Web Socket'
              description='Api de mensajes en tiempo real gracias a WebSocket y envio de archivo con multer'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Certs;
