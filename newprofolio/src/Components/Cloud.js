import React from 'react'
import '../style/main.css'
import Me from '../images/MESHOOK.jpg'
import {
    Link
} from "react-router-dom";

const Cloud = () => {
    return (
        <div className="sky">
            <div className="cloudrow">
                <div className="holderInCloud"><img id="myFace" src={Me} alt="Of me"></img><div><p id="ParaCloud">Hello</p><p id="ParaCloud">I'm Hanad Shippy</p><p id="ParaCloud">2 years of coding</p></div></div>
                <div className="cloud"></div><div className="moveWord2"><Link to='/About' id="WordCloud2">About me</Link></div>
            </div>
            <div className="cloudrow">
            <div className="cloud"></div><div className="moveWord3"><Link to='/Skills' id="WordCloud3">My skills</Link></div>
                <div className="cloud"></div><div className="moveWord4"><Link to='/History' id="WordCloud4">History</Link></div>
                <div className="cloud"></div><div className="moveWord6"><Link to='/Gallery' id="WordCloud6">Gallery</Link></div>
            </div>
        </div>
    )
}

export default Cloud