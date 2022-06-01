import React, {useState} from 'react';
import {FullInput} from './components/input/FullInput/FullInput';
import Button from './components/Button';
import Input from './components/input/Input';

export type Microtask2Type= {
  messages:Array<Message>
}

export type Message={
  message: string
}

const Microtask2 = () => {
  let [text, setText] = useState('')
  const [messages, setMessages]=useState<Array<Message>>([
    {message:'message1'},
    {message:'message2'},
    {message:'message3'}
  ])
  const addMessageForState = (text:string)=>{

    setMessages([{message: text},...messages ])
  }
const callBackHandler=()=>{
  addMessageForState(text)
  setText('')
}
  // const {messages}=props
  const renderMessages=messages.map(m=><div>{m.message}</div>)
  return (
    <div>
      {renderMessages}
      {/*<FullInput addMessage={addMessageForState}/>*/}
      <div>
        <Button name={'Add'} callBack={callBackHandler}/>
        <Input value={text} setText={setText}/>
      </div>
    </div>
  );
};
export default Microtask2