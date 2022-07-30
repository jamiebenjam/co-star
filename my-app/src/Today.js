import React, { useEffect, useState } from "react";
import HoroscopeItem from "./HoroscopeItem";

function Today() {

    const horoscopeMessages = 
    ["I love you so much", 
    "You're the best thing to happen to me",
    "Buy your gf a glizzy"
]

const getRandomHoroscope = () => {
    return horoscopeMessages[Math.floor(Math.random()*horoscopeMessages.length)]; 
}


    const [horoscopes, setHoroscope] = useState([])
    const [randomHoroscope, setRandomHoroscope] = useState([
    "I love you so much", 
    "You're the best thing to happen to me",
    "Buy your gf a glizzy"
])

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = (new Date().getMonth());
    let monthName = monthNames[monthIndex];

    const current = new Date();
    const date = `${current.getDate()}`;

    function fetchHoroscopes() {
        fetch("http://localhost:8000/horoscopes")
        .then((r) => r.json())
        .then((data) => setHoroscope(data))
    }

    useEffect(fetchHoroscopes, [])


    const horoscopeMap = horoscopes.map((horoscope) => {
        return <HoroscopeItem
            key={horoscope.id}
            id={horoscope.id}
            message={horoscope.message}
        />
    })

console.log(horoscopeMap)



    function handleClick(){
        console.log("clicked")
        console.log(getRandomHoroscope())
    }

    return (
        <div>
            <hr></hr>
            <h2>Today {monthName}{date}</h2>
            <h1>{horoscopeMap}</h1>
            <p>horoscope placeholder</p>
            <button onClick={handleClick} class="button-2">new horoscope</button>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Today;