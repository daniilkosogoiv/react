import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';

const chatList = ([
  { id: "chat1", name: 'Vera' },
  { id: "chat2", name: 'Sasha' },
  { id: "chat3", name: 'Masha' },
  { id: "chat4", name: 'Kate' },
]);

export function ChatList() {
  return (
  <>
    <List
    sx={{ width: '100%', maxWidth: 150, bgcolor: 'background.paper', position: "fixed", top:100, left: 20, m: 0 }}
    >
      {chatList.map(({ id, name }) => (
        <Link key={id} to={`/chat/${id}`}>
          <ListItemText primary={name} />
        </Link>
      ))}
    </List>
    <Outlet></Outlet>
  </>
  );
}