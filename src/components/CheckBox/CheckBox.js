import React from 'react';

const Checkbox = (props) => (
    <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> 
);


export default Checkbox;