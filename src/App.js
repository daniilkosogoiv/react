
import './App.css';
import React from 'react';


import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom' 
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';

const Home = () => <h4>Home page</h4>;
const Profile =() => <h4>Profile page</h4>

function App(){
  return(
    <BrowserRouter>
    <ul>
      <li> 
        <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        > Home
        </NavLink>
      </li>
      <li> <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/chat"
          >
            Chat
          </NavLink>
        </li>
        <li> <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path="/chat" element={<ChatList/>}>
      <Route path=":id" element={<Chat/>}></Route>
      </Route>
      <Route path='*' element={<h4>404</h4>}></Route>
    </Routes>
    </BrowserRouter>
  )
}



export default App;
