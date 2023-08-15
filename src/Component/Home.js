import React, { Component } from "react";
import SierraLeone from '../Contents/SierraLeone.jpeg'
import '../Contents/images.css'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Place of Birth</h1>
                <img alt="Sierra Leone" src={SierraLeone} />
                <p>Hello my name is sahr and i am from Sierra Leone west Africa.</p>
            </div>
        );
    }
}

export default Home;