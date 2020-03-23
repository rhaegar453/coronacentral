import React from 'react';
import './Pill.css';

const Pill = ({ text, onClick, selected }) => {
    const style = { backgroundColor:'#F46D6D', color:'white', transition:'0.3s'};
    return (
        <div className="pill" onClick={onClick} style={selected?style:{}}>
            {text}
        </div>
    );
}

export default Pill;