import React from 'react';
import UserColor from '../../hooks/useColor';
import './style.scss';



function MagicColor(props) {
    const color = UserColor();
    console.log(color);
    return (
        <div className="color-box" style={{backgroundColor: color}}>
           ColorBox
        </div> 
    );
}

export default MagicColor;