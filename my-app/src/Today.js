import React, { useState } from "react";

function Today() {

    const horoscopeMessages = 
    ["shawn, you feel a pull towards congeniality, and @jamiebenjam is very loving. You have the right to use the word love with them today. A new kind of relationship betweem you can emerge at any time, for any reason, and lead anywhere. Flip to a new page and write their name over and over.", 
    "shawn, you will always be warm and @jamiebenjam can support their friends. You make each other feel alive right now. Other people's rules don't apply to you. Wait for golden hour and give each other video tours of your bedrooms. Show them the corners where the sun hits.",
    "Get your gf a glizzy",
    "shwan, you prefer to be insightful and @jamiebenjam is here to stay when she wants to run. You're both interested in untying your emotional knots right now. You can be big and small at the same time. Be there for each other.",
    "get 40 wings",
    ""
]

    const [message, setMessage] = useState('');

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex]

    const current = new Date();
    const date = `${current.getDate()}`;

    function handleClick(){
        setMessage({message: horoscopeMessages[Math.floor(Math.random()*horoscopeMessages.length)]})
    }

    return (
        <div>
            <hr></hr>
            <h2 className="compatibilityHeader">Today <small>{monthName} {date}</small></h2>
            <p>{message.message}</p>
            <br></br>
            <button onClick={handleClick} className="button-2">today's horoscope</button>
            <br></br>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Today;