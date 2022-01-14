import React, { Component, useState } from 'react'

export default function TogBoard() {
    const [array, setArray] = useState({});
    let [number, setNumber] = useState([1,2,3], [4,5,6], [7,8,9]);
    let [toggle, setToggle] = useState(false);
    const handleClick = (props) => {
        setToggle(!toggle)
        setNumber(1)
    }
    
    return (
        <div>
        {
            toggle === true ? <button type={'button'} onClick={handleClick} style={{border: '1px solid gray', width:'50px', height:'50px', textDecoration: 'none', backgroundColor: 'white', color: 'white', display:'block'}}></button>
            : <button type={'button'} onClick={handleClick} style={{border: 'none', width:'50px', height:'50px', textDecoration: 'none', backgroundColor: 'gray', color: 'black', display:'block'}}></button>
        }
        {
            toggle === true ? <button type={'button'} onClick={handleClick} style={{border: '1px solid gray', width:'50px', height:'50px', textDecoration: 'none', backgroundColor: 'white', color: 'white', display:'block'}}></button>
            : <button type={'button'} onClick={handleClick} style={{border: 'none', width:'50px', height:'50px', textDecoration: 'none', backgroundColor: 'gray', color: 'black', display:'block'}}></button>
        }
        
    </div>
    )
}
