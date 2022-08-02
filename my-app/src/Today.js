import React, { useState } from "react";

function Today() {

    const horoscopeMessages = 
    ["I love you so much", 
    "You're my favorite person",
    "Buy your gf a glizzy",
    "Give me a bird"
]

    const [message, setMessage] = useState('Hello');

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