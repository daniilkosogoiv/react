
import { Outlet } from 'react-router-dom';
import {Form} from '../Form/Form'
import './stylesChat.css';
import { useDispatch } from 'react-redux';
import { ChatListField } from './ChatList.Field';
import { useEffect, useState } from 'react';
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';



export function ChatList({ }) {
  const [chats, setChats] = useState([]);

  //const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };
    //dispatch(addChat(newChat));
    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true });
  };

  const hadleRemoveChat = (id) => {
    //dispatch(deleteChat(id));
    remove(getChatRefById(id));
    set(getMsgsRefById(id), null);
    //dispatch(clearMessages(id));
  };

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);
  

  return (
    <>
      <ChatListField hadleRemoveChat={hadleRemoveChat} chats={chats}></ChatListField>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};