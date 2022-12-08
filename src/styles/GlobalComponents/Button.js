import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <a href='https://www.linkedin.com/in/sofiya-mathew'>
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
  </a>
);

export default Button
