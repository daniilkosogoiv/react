import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export const ChatListField = ({hadleRemoveChat, chats})=> {
    return (
          <div className="chat-list">
            {chats.map((chat) => (
    
              <div className="chat-item" key={chat.id}>
    
                <Link className="chat-link" to={`/chat/${chat.id}`} >
                  {chat.name}
                </Link>
                <CloseIcon className="chat-delete" onClick={() => hadleRemoveChat(chat.id)}></CloseIcon>
              </div>
            ))}
          </div>
    );
};
