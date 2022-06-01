import React, {ChangeEvent, useState} from 'react';

type FullInputType={
  addMessage: (text:string)=>void
}
export const FullInput = (props:FullInputType) => {
  const {addMessage}=props

  let [title, setTitle] = useState('')
  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)
  const onClickHandler = (text:string)=>{
    addMessage(title)
    setTitle('')
  }
  return (
    <div>
      <input type="text" onChange={onChangeInputHandler} value={title}/>
      <button onClick={()=>onClickHandler(title)}> ADD</button>
    </div>
  );
};

