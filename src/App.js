import React from 'react';
import './css/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div>
            <Header/>
            <div className="app">
                <Navbar/>
                <Route path={'/profile'} render=
                    {() => <Profile/>}/>
                <Route path={'/chat'} render=
                    {() => <Dialogs/>}/>
            </div>
        </div>
    )
}

export default App;
