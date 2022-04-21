
import { Outlet } from 'react-router-dom';
import {Form} from '../Form/Form'
import './stylesChat.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selector';
import { addChat, deleteChat } from '../../store/chats/actions';
import { clearMessages } from '../../store/messages/actions';
import { ChatListField } from './ChatList.Field';



export function ChatList({ }) {

  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };
    dispatch(addChat(newChat));
  };

  const hadleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id));
  }


  return (
    <>
      <ChatListField hadleRemoveChat={hadleRemoveChat} chats={chats}></ChatListField>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};