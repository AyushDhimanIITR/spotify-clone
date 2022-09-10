import React from "react";
import "./body.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Main from "./Section_1";
import Sec_2 from "./Sec_2";
import Sec_3 from "./Sec_3";

function Body(){
    return(
        <div className="body">
            <Navbar />
            <Main />
            <Sec_2 />
            <Sec_3 />
            <Footer />
        </div>
    );
}

export default Body;