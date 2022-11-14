import React from 'react';
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import "../../assets/main.css";


export default function Main() {
    return (
        <div className="slidershow middle">
            <div className="slides">
                <input type="radio" name="r" id="r1" defaultChecked />
                <input type="radio" name="r" id="r2" />
                <input type="radio" name="r" id="r3" />
                <div className="slide s1">
                    <img src={img2} />
                </div>
                <div className="slide">
                    <img src={img1} />
                </div>
                <div className="slide">
                    <img src={img3} />
                </div>
            </div>
            <div className="navegation">
                <label htmlFor="r1" className="bar" />
                <label htmlFor="r2" className="bar" />
                <label htmlFor="r3" className="bar" />
            </div>
        </div>
    )
}
