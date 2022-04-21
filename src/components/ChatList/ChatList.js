
import { Link, Outlet } from 'react-router-dom';
import {Form} from '../Form/Form'
import './stylesChat.css';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selector';
import { addChat, deleteChat } from '../../store/chats/actions';
import { clearMessages } from '../../store/messages/actions';



export function ChatList() {

  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };
    dispatch(addChat(newChat));
  };

  const hadleRemovaChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id))
  }


  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (

          <div className="chat-item" key={chat.id}>

            <Link className="chat-link" to={`/chat/${chat.id}`} >
              {chat.name}
            </Link>
            <CloseIcon className="chat-delete" onClick={() => hadleRemovaChat(chat.id)}>Х</CloseIcon>
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};