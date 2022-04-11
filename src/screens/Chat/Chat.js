import { useEffect, useRef, useState } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/messageList/messageList";
import { AUTHORS } from "../../utils/constants";
import { Navigate, useNavigate, useParams } from "react-router";

const chatList= [
    { id: "chat1", name: 'Vera' },
    { id: "chat2", name: 'Sasha' },
    { id: "chat3", name: 'Masha' },
    { id: "chat4", name: 'Kate' },
];

const initMessage={
    chat1:[],
    chat2:[],
    chat3:[],
    chat4:[]
}

export function Chat() {
  const [messages, setMessages] = useState(initMessage);
  const {id} = useParams();
  
  const timeout = useRef;

  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1] 
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "This is a message from a robot",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    };


    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

    if (!messages[id]) {
    return <Navigate to="/chat" replace />
    };

  return (
    <div className='App'>
    {id &&(
        <div>
             <MessageList messages={messages[id]} />
            <Form onSubmit={sendMessage} />
        </div>
    )}
    </div>
  );
}
