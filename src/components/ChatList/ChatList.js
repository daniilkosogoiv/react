import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export function ChatList({  chatList }) {
  return (
    <List
    sx={{ width: '100%', maxWidth: 150, bgcolor: 'background.paper', position: "fixed", top:-1, left: 5, m: 0 }}
    >
      {chatList.map(({ id, name }) => (
        <ListItem key={id} button>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}