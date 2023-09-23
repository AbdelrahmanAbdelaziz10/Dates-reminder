import React from 'react';
import { Col, Row } from 'react-bootstrap';


function DateNumber ({per}){
  return (
    <Row className='justify-content-center'>
        <Col className='' sm='8'>
        لديك {per.length} مواعيد اليوم
        </Col>
    </Row>  )
}

export default DateNumber;