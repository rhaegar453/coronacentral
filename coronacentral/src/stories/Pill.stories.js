import React from 'react';
import Pill from '../Pill/Pill';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {title:"Pill"};


export const withText=()=>{
    return <Pill text="Shivaraj" onClick={()=>console.log("Hello World")} selected={false}/>
}


export const selectedPill=()=>{
    return <Pill text="Selected Pill" onClick={()=>console.log("This is the selected pill")} selected={true}/>
}
