import React from "react";
import "./section1.css";
import Image from "./components/image/phone.jpg"

function Main(){
    return(
        <div className="main">
            <div className="main-left">
            <div className="main-img">
            <svg viewBox="0 0 290 590.58" aria-hidden="true" focusable="false"><path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path><path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
            <div className="img"><img src= {Image} alt="showing spotify app" ></img></div>
                </div>
            <div className="main-head">
                <h1>Play millions of songs and podcasts, for free.</h1>
                <button className="btn-1">Get spotify free</button>
            </div>
            </div>
        </div>
    );
}

export default Main;