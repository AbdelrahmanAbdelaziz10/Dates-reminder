import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {per} from './data';
import DateNumber from './DateNumber';
import DateInfo from './DateInfo';
import { DateControl } from './DateControl';
function  Reminder(){
    const[persondata,setPersondata]=useState(per);

    const onDelete=()=>{
        setPersondata([]);
    }

    const onShowdata=()=>{
        setPersondata(per);

    }
    useEffect(()=>{
        setPersondata([])
    },[])


  return (
    <div className='font color_body'>
    <Container className='py-4'>
    <DateNumber per={persondata}/>
    <DateInfo per={persondata}/>
    <DateControl onDelete={onDelete} onShowdata={onShowdata}/>

    </Container>
    </div>

  )
}

export default Reminder;