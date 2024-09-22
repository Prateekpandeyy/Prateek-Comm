import React from 'react';
import './button.scss';
const CustomButton = (props) => {
return(
    <button 
    className={props.className}
    onClick={props.onClick}>
    {props.children}
</button>
)
}
export default CustomButton;