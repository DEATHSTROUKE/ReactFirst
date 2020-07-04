import React from 'react';
import './css/App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="app">
                <Navbar/>
                <Route path={'/profile'} render=
                    {() => <Profile state={props.state.profileData}/>}/>
                <Route path={'/chat'} render=
                    {() => <Dialogs state={props.state.dialogsData}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
