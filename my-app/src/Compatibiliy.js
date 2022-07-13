import React from "react";
import smiley from './smileys.jpg'
import styled from "styled-components";


function Compatibility() {
    return(
        <CompDetail>
        <div className="compatibility">
        <img src={smiley} alt="smileys" className="smiley"></img>
        <h1>Compatibility</h1>
        <h4>Basic Identities</h4>
        <h4>Intellect & Communication</h4>
        <h4>Love & h4leasure</h4>
        <h4>Sex & Aggression</h4>
        <h4>h4hilosophies of Life</h4>
        <h4>Moods & Emotions</h4>
        <h4>Senses of Resh4onsiblity</h4>
    </div>  
    </CompDetail>
    )
}

export default Compatibility;

const CompDetail = styled.div`
.smiley {
    align: left
}

`