import React from "react";
import circleStarbabes from './circleStarbabes.png'

function Header(){
    return (
        <div>
            <img src={circleStarbabes} alt="starbabes" className="starbabes"></img>
            <h2>@srwatlanta</h2>
            <p> ◉ Cancer ☽ Pisces ↑ Taurus</p>
        </div>
    )
}

export default Header;

