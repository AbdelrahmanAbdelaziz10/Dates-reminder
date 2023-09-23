import React from 'react';
import { Col, Row } from 'react-bootstrap';


export const DateControl = ({onDelete,onShowdata}) => {
  return (
    <Row className='justify-content-center my-3'>
        <Col className='d-flex justify-content-between' sm='8'>
        <button className='btn-style p-2' onClick={()=>{onDelete()}}>مسح الكل</button>
        <button className='btn-style p-2' onClick={()=>{onShowdata()}}>عرض البيانات</button>

        </Col>
    </Row>  )
}
