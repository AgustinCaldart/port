import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Resumecontent from './ResumeContent';

import pdf from '../../Assets/CaldartCV.pdf';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Jobs</h3>
            <Resumecontent
              title='Backend Dev [Chattigo]'
              date='June 2022 - March 2023'
              content={[
                'Microservices with Go.',
                'Creation/maintenance of stored procedures in Azure SQL.',
                'Event-driven architecture with Kafka.',
              ]}
            />
            <br />
            <Resumecontent
              title='Data Analyst [Municipality of Córdoba]'
              date='July 2021 - Present'
              content={[
                'PostgreSQL: DDL and DML - Stored Procedures, Triggers, Views, and Functions.',
                'Data analysis to add value to the organization.',
                'Data cleaning and manipulation using Python libraries: Pandas and Numpy.',
              ]}
            />
            <br />
            <Resumecontent
              title='Developer|Analyst [AARI]'
              date='October 2019 - July 2021'
              content={[
                'Software support for tax and financial management.',
                'User/staff training.',
                'Backend development using Yii2 [PHP framework] and NodeJS.',
                'Frontend development using HTML, Bootstrap, and Javascript.',
                'Lifecycle management of Amazon S3 buckets.',
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='Udemy'
              date='2021 - Present'
              content={['Certified courses on React and Go from Udemy']}
            />
            <br />
            <Resumecontent
              title='Platzi'
              date='2020 - Present'
              content={['Certified courses on Aws, Mern Stack, and Go from Platzi']}
            />
            <br />
            <Resumecontent
              title='Technical Degree in Programming [UTN-FRC]'
              date='2018 - 2020'
              content={[
                'Short-term program at the National Technological University, Córdoba branch.',
                'The curriculum focused mainly on related databases (SQL Server), Asp.Net, and Java.',
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download Cv
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
