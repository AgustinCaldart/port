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
              title='Backend Dev [Chattigo]'
              date='Junio 2022 - Presente'
              content={[
                'Microservicios con Go y Spring Boot.',
                'Creación/mantención de SP en AzureSQL.',
                'Arquitectura de eventos con Kafka.',
              ]}
            />
            <br />
            <Resumecontent
              title='Analista de Datos [Municipalidad de Córdoba]'
              date='Julio 2021 - Presente'
              content={[
                'PostgreSQL: DDL y DML - Stored Procedures, Triggers , Vistas, y Funciones.',
                'Análisis de datos para agregar valor a la empresa.',
                'Limpieza y manejo de datos con las librerías de Python: Pandas y Numpy. ',
              ]}
            />
            <br />
            <Resumecontent
              title='Desarrolador|Analista [AARI]'
              date='Octubre 2019 - Julio 2021'
              content={[
                'Soporte de software encargado de gestion tributaria y financiera.',
                'Capacitacion de usuarios/personal.',
                'Backend trabajado con Yii2 [Libreria PHP] y NodeJS.',
                'Frontend HTML,Bootstrap y Javascript.',
                'Ciclo de vida de los buckets de Amazon S3.',
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
