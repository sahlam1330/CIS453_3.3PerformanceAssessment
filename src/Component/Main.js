import React, { Component  } from "react";
import {
    Route, Routes,
    NavLink, 
    HashRouter  
} from "react-router-dom";
import Home from "./Home";
import Interests from "../Contents/Interests";
import Achievements from "./Achievements";

class Main extends Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <h1> Welcome To My Page</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/interests">Interests</NavLink></li>
                        <li><NavLink to="/achievements">Achievements</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/interests" element={<Interests/>} />
                        <Route path="/achievements" element={<Achievements/>} />
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}


export default Main;