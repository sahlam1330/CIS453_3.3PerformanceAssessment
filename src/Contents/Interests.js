import React, { Component } from "react";
import './images.css';
import dallas from './dallas.jpeg'

class Interests extends Component {
    render() {
        return (
            <div className="interests">
                <h1>Sports</h1>
                <img alt="dallas cowboys" src={dallas} />
                <p>When I moved to the US, my favorite sport became the NFL. My faorite team was the Dallas Cowboys.</p>
            </div>
        )
    }
}

export default Interests;