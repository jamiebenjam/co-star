import React from "react";
import circleStarbabes from './circleStarbabes.png'
import styled from "styled-components";

function Header(){
    return (
        <div>
            <img src={circleStarbabes} alt="starbabes" className="starbabes"></img>
            <h2>@srwatlanta</h2>
            <p> ⊙ Cancer ☽ Pisces ↑ Taurus</p>
        </div>
    )
}

export default Header;

const HeaderDetail = styled.div`
    .starbabes {
        img {
            width: 100px;
            height: 100px;
            float: right;
            display: block;
        }
    }
`
