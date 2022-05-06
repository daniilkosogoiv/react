
import './App.css';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom' 
import { Chat } from './screens/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';
import { Profile } from './screens/profile/profile';
import {Articles} from './screens/Articles/Articles'
import { addChat, deleteChat } from './store/chats/actions';
import { selectChats } from './store/chats/selector';
import { selectMessages } from './store/messages/selector';
import { addMessage, clearMessages } from './store/messages/actions';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoure';
import { Home } from './screens/Home/Home';
import { PublicRoute } from './components/PublicRoute/PublicRoure';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';




function App(){
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true)
  };
  
  const handleLogout = () => {
    setAuthed(false);
  };

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user)=>{
      if ( user) {
        handleLogin();
      }else {
        handleLogout();
      }
    })

    return unsubscribe;
  }, []);

  return(
      <BrowserRouter>
      <div className='links'>
      <NavLink 
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue", marginLeft: 20,  textDecoration: 'none' })}
        > Home
        </NavLink>
      
      <NavLink 
            style={({ isActive }) => ({ color: isActive ? "green" : "blue", marginLeft: 20,  textDecoration: 'none'  })}
            to="/chat"
          >
            Chat
          </NavLink>
      
      <NavLink 
            style={({ isActive }) => ({ color: isActive ? "green" : "blue", marginLeft: 20,  textDecoration: 'none'  })}
            to="/profile"
          >
            Profile
      </NavLink>
      <NavLink 
            style={({ isActive }) => ({ color: isActive ? "green" : "blue", marginLeft: 20,  textDecoration: 'none'  })}
            to="/articles"
          >
            Articles
      </NavLink>
      </div>
    
    <Routes>
    <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route path="signup" element={<Home onAuth={handleLogin} isSignUp />}/>
      </Route>
    
      <Route path="/chat" element={<PrivateRoute authed={authed}/>}>
        <Route path="/chat" element={<ChatList/>}>
          <Route path=":id" element={<Chat />}></Route>
        </Route>
      </Route>
    
      <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
        <Route path='' element={<Profile onLogout={handleLogout}/>}/>
      </Route>
      <Route path='/articles' element={<Articles/>}></Route>
      <Route path='*' element={<h4>404</h4>}></Route>
    </Routes>
    </BrowserRouter>
  )
}



export default App;
