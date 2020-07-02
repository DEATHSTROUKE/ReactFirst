import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Chat from "./components/Chat/Chat";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navbar/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'chat'} component={Chat}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
