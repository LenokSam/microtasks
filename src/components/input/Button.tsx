import React from 'react';
import button from '../Button';
type ButtonType={
  name:string
  callBack:()=>void
}

const Button = (props:ButtonType) => {
  const onClickHandler =()=>{
    props.callBack()
  }

  return (
    <button onClick={onClickHandler}></button>
  );
};

export default Button;