import { useEffect, useRef, useState } from "react";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/messageList/messageList";
import { AUTHORS } from "../../utils/constants";
import { Navigate, useParams } from "react-router";
import './Chat.style.css'
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selector";
import { addMessage } from "../../store/messages/actions";

export function Chat() {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  //const [messages, setMessages] = useState(initMessage);
  const {id} = useParams();
  
  const timeout = useRef;



  const sendMessage = (text) => {
    dispatch(
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    },
    id
    )
    )
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1] 
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        dispatch(
        addMessage({
          author: AUTHORS.robot,
          text: "This is a message from a robot",
          id: `msg-${Date.now()}`,
        }, 
        id
        ));
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
    <div className='chat'>
    {id &&(
        <div className='message-list'>
             <MessageList  messages={messages[id]} />
            <Form onSubmit={sendMessage} />
        </div>
    )}
    </div>
  );
}
