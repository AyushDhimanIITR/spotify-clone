import React from "react";
import "./sec_2.css";
import Play from "./components/image/play.png"
import Data from "./components/image/data.png"
import Love from "./components/image/love.png"
import Playlist from "./components/image/playlist.png"

function Sec_2(){
    return(
        <div className="section-2">
            <h2>Why Spotify?</h2>
            <ul className="list">
                <li>
                    <img src={Play} alt="icon"></img>
                    <div className="text">
                        <p className="text-head">Play your favorites.</p>
                        <p>Listen to the songs you love, and discover new music and podcasts.</p>
                    </div>
                </li>
                <li>
                    <img src={Playlist} alt="icon"></img>
                    <div className="text">
                        <p className="text-head">Playlists made easy.</p>
                        <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
                    </div>
                </li>
                <li>
                    <img src={Love} alt="icon"></img>
                    <div className="text">
                        <p className="text-head">Make it yours.</p>
                        <p>Tell us what you like, and we'll recommend music for you.</p>
                    </div>
                </li>
                <li>
                    <img src={Data} alt="icon"></img>
                    <div className="text">
                        <p className="text-head">Save mobile data.</p>
                        <p>To use less data when you play music, turn on Data Saver in Settings.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sec_2;