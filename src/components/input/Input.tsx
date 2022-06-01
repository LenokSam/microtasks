import React, {ChangeEvent} from 'react';
type InputType ={
  value:string
  setText:(title:string)=>void
}

const Input = (props:InputType) => {
  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    props.setText(e.target.value)
  }

  return (
    <input value={props.value} onChange={onChangeInputHandler}/>
  );
};

export default Input;