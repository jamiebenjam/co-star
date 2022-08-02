import React from "react";
import smiley from './cropped-smiley.jpg'


function Compatibility() {
    return(
        <div className="compatibility">
        <img src={smiley} alt="smileys" className="smiley"></img>
        <h1 className="compatibilityHeader">Compatibility</h1>
        <h4 className="compat">⊙ Basic Identities <br></br> <small>Leo — Cancer →</small></h4>
        <h4 className="compat">☿ Intellect & Communication <br></br> <small>Virgo — Leo →</small></h4>
        <h4 className="compat">⚥ Love & Pleasure <br></br> <small>Cancer — Leo →</small></h4>
        <h4 className="compat">♂ Sex & Aggression <br></br> <small>Leo — Cancer →</small></h4>
        <h4 className="compat">♃ Philosophies of Life <br></br> <small>Capricorn — Gemini →</small></h4>
        <h4 className="compat">☽ Moods & Emotions <br></br> <small>Sagittarius — Pisces →</small></h4>
        <h4 className="compat">♄ Senses of Responsiblity <br></br> <small>Aries — Capricorn →</small></h4>
    </div>  
    )
}

export default Compatibility;

