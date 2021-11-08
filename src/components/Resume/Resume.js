import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';

import pdf from '../../Assets/CaldartCV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experiencia</h3>
            <Resumecontent
              title='Calidad de Datos y gestión masiva de deuda [Municipalidad de Córdoba]'
              date='Julio 2021 - Presente'
              content={[
                'Analisis de datos para campañas politicas',
                'Manejo de datos con PostgreSQL.',
                'Analisis de datos con Acl analityc y PowerBi ',
              ]}
            />
            <br />
            <Resumecontent
              title='Desarrolador|Analista [AARI]'
              date='Octubre 2019 - Julio 2021'
              content={[
                'Soporte de software encargado de gestion tributaria y financiera.',
                'Capacitacion de usuarios/personal.',
                'Backend trabajado con Yii2 [Libreria PHP].',
                'Frontend HTML,Bootstrap y Javascript.',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Educación</h3>
            <Resumecontent
              title='Udemy'
              date='2021 - Presente'
              content={['Cursos certificados en Udemy de React y Go']}
            />
            <br />
            <Resumecontent
              title='Platzi'
              date='2020 - Presente'
              content={[
                'Cursos certificados en Platzi, mayormente orientados a Aws,Mern Stack y Go',
              ]}
            />
            <br />
            <Resumecontent
              title='Tecnicatura en programación [UTN-FRC]'
              date='2018 - 2020'
              content={[
                'Carrera corta en la Universidad Técnologica Nacional sede Córdoba Capital.',
                'En la carrera mayormente se ve bases de datos relacionadas (SQL Server), Asp.Net y Java.',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Descargar Cv
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
