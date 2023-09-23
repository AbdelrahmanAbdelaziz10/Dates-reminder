import React from 'react';
import { Col, Row } from 'react-bootstrap';


const DateInfo = ({per}) => {
  return (
    <Row className='justify-content-center mt-3'>
        <Col className='' sm='8'>
        <div className='rectangle'>
        {per.length ? (per.map((item)=>{
            return         <div key={item.id} className='d-flex mx-3 py-1 border-bottom'>
            <img src={item.img} alt='profile' className='img-avatar me-2'  />
            <div className='px-3'>
                <p className='d-inline ps-6'>{item.name}</p>
                <p className='ps-9'> {item.date}</p>

            </div>
        </div>
    })):<h2 className='p-5 text-center fs-9'>ليس لديك مواعيد اليوم</h2>}

        

        </div>
        </Col>
    </Row>
  )
}

export default DateInfo;