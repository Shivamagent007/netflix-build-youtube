import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector, useDispatch} from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {   
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, []);
  
  
  return (
    <Router>
      <div className="app">
        {!user ?(
          <LoginScreen />
        ):(
          
          <Switch>
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" exact component={HomeScreen} />
          </Switch>
        )}
      </div>    
    </Router>
  );
}

export default App;
