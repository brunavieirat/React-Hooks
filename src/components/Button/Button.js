import React from 'react'
import './Button.css'

const Button = (props) => (
    <button onClick={props.click} className={props.classe}> {props.children} </button>
);

export default Button;
