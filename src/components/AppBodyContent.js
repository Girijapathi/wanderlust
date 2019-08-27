import React, {Component} from "react";
import '../App.css';
import img1 from '../images/DSC1.JPG';
import img2 from '../images/DSC2.JPG';
import img3 from '../images/DSC3.JPG';
import img4 from '../images/DSC4.JPG';
class AppBodyContent extends Component{
    
    render(){
        return(
            <div className="App-AppBodyContent">
                <div className="polaroid">
                    <img className="" src={img1} alt="" />
                </div>
                <div className="polaroid">
                    <img className="" src={img2} alt=""/>
                </div>
                <div className="polaroid">
                    <img className="" src={img3} alt=""/>
                </div>
                <div className="polaroid">
                    <img className="" src={img4} alt=""/>
                </div>
            </div>
        );
    }
}
export default AppBodyContent;