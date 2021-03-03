import  { useEffect, useState } from 'react';



function randomColor(){
   var arrColor = ['red','pink','green','orange','blue','yellow'];
   var numberRandom = Math.trunc(Math.random() * 6);
   return arrColor[numberRandom];
}

function UserColor(props) {
    const [color,setColor] = useState('black');
   useEffect (() =>{
      const colorInterval = setInterval(() =>{
        const color = randomColor();
        setColor(color);
      },1000);
      return () =>{
          clearInterval(colorInterval);
      } 
   },[color]);
   return color;
}

export default UserColor;