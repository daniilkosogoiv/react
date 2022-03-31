
import './App.css';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import React, { useEffect, useState } from 'react';


const name="Me:"

const msgs=[]

function App() {
  const [messages, setMessages] = useState(msgs)


  const addMessages=(newText)=>{
    setMessages([...messages, { text: newText, author:name}])
  }

  useEffect(() => {

    const lastMessage = messages[messages.length - 1];

    if (lastMessage?.author === "Me:") { 
      setMessages([...messages, { text: "this is a message from Robot!", author: "Robot:" }]);
    }
  }, [messages]);
  
  return (
    <div className="App">
      {messages.map((msg)=>(
        <Message text={msg.text} author={msg.author}/>
      ))}
      <Form onSubmit={addMessages}/>
    </div>
  );
}

export default App;
