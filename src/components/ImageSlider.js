import React, {Component} from "react";
import '../App.css';
import img1 from '../images/DSC1.JPG';
import img2 from '../images/DSC2.JPG';
import img3 from '../images/DSC3.JPG';
import img4 from '../images/DSC4.JPG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class ImageSlider extends Component{
    
    render(){
        return(
            <div className="App-ImageSlider">
                <Carousel showThumbs={false}>
                    <img className="" src={img1} />
                    <img className="" src={img2} />
                    <img className="" src={img3}/>
                    <img className="" src={img4}/>
                </Carousel>

            </div>
        );
    }
}
export default ImageSlider;