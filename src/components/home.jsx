import React, { Component } from 'react';
import '../components/css/home.css'
import Dwig from '../images/comph.jpg'


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="behind">
                <div className="main">
                    <h1>Support</h1>
                    <h2>Self Service Portal</h2>
                    <p className="opener">Written instructions allong with instructional videos for the most common issues that we see.</p>
                </div>
                <img className="Dwig" src = {Dwig} height="340" width="40%" alt="The American Flag"></img>
            </div>
        )
    }
}

export default Home;