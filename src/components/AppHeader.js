import React, {Component} from "react";
import '../App.css';
import logo from '../logo.svg';
class AppHeader extends Component{
    render(){
        return(
            <div className="App-header">
                <ul>
                    <li>
                    <img src={logo} className="App-logo" alt="logo" />
                    </li>
                    <li>Trips</li>
                    <li>Plans</li>
                    <li>Experience</li>
                    <li>Suggestion</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        );
    }
}
export default AppHeader;