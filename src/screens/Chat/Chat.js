import { useEffect, useMemo, useRef, useState} from "react";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/messageList/messageList";
import { Navigate, useParams } from "react-router";
import './Chat.style.css'
import { useDispatch } from "react-redux";
import { selectMessages, selectMessagesByChatId } from "../../store/messages/selector";
import { addMessage, addMessageWithReplay } from "../../store/messages/actions";
import { onValue, push, set } from "firebase/database";
import { auth, getMsgsListRefById, getMsgsRefById } from "../../services/firebase";

export function Chat() {
  const {id} = useParams()

  const [messages, setMessages] = useState([]);

  const getMessages = useMemo( () =>selectMessagesByChatId(id), [id] )
  //const messages = useSelector(getMessages);
  const dispatch = useDispatch();
  //const [messages, setMessages] = useState(initMessage);
  
  const sendMessage = (text) => {

    push(getMsgsListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
    //dispatch(
    //addMessageWithReplay({
    //  author: AUTHORS.human,
    //  text,
    //  id: `msg-${Date.now()}`,
    //},
    //id
    //)
    //)
  };
  
  
  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        setMessages(Object.values(val.MessageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);
  //useEffect(() => {
  //  const lastMessage = messages?.[messages?.length - 1] 
  //  if (lastMessage?.author === AUTHORS.human) {
  //    timeout.current = setTimeout(() => {
  //      dispatch(
  //      addMessage({
  //        author: AUTHORS.robot,
  //        text: "This is a message from a robot",
  //        id: `msg-${Date.now()}`,
  //      }, 
  //      id
  //      ));
  //    }, 1000);
  //  };


  //  return () => {
  //    clearTimeout(timeout.current);
  //  };
  //}, [messages]);

    if (!messages) {
    return <Navigate to="/chat" replace />
    };

  return (
    <div className='chat'>
    
        <div className='message-list'>
             <MessageList messages={messages} />
            <Form onSubmit={sendMessage} />
        </div>
    
    </div>
  );
}
