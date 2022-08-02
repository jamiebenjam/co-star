import React, { useState } from "react";

function Today() {

    const horoscopeMessages = 
    ["shawn, you feel a pull towards congeniality, and @jamiebenjam is very loving. You have the right to use the word love with them today. A new kind of relationship betweem you can emerge at any time, for any reason, and lead anywhere. Flip to a new page and write their name over and over.", 
    "shawn, you will always be warm and @jamiebenjam can support their friends. You make each other feel alive right now. Other people's rules don't apply to you. Wait for golden hour and give each other video tours of your bedrooms. Show them the corners where the sun hits.",
    "Get your gf a glizzy",
    "shwan, you prefer to be insightful and @jamiebenjam is here to stay when she wants to run. You're both interested in untying your emotional knots right now. You can be big and small at the same time. Be there for each other.",
    "Get 40 wings",
    "Whatever you ask for today you must be certain it is what you truly desire, because once you get it you will be stuck with it. That applies especially to affairs of the heart. You may not be entirely serious but the object of your affection will be.",
    "Listen to what your instincts are telling you and don’t choose to ignore them because you were hoping for a different message. Wishful thinking must be avoided at all costs, especially on the work front where you will be judged purely by results.",
    "Try not to be too forceful when dealing with friends and colleagues today. Cosmic activity in the most dynamic area of your chart boosts your leadership qualities but you will always get more out of people if you use persuasion rather than coercion.",
    "A colleague or employer will ask you to do something for them today and even if you have other plans you would be wise to assist them. A sacrifice you make for them now will come back to you several times over later in the year.",
    "If a creative collaboration of some kind is not working out for you then scrap it and start again from scratch. That may sound unnecessarily extreme but the planets indicate you won’t get anywhere using half-hearted measures. Go big or go home.",
    "The more ambitious your plans the more important it is to check the details, then check them again in case you have missed something important.",
    "You may be tempted to take a really big risk over the next few days but if you are smart you will control your impulses and bet only on sure things.",
    "By all means look ahead and visualize where you want to be a month or even a year from now but don’t expect to make an immediate breakthrough. Saturn’s influence is such that you must be realistic about how long it will take.",
    "The planets are aligned in a way that encourages you to have fun, so ease back on the heavy stuff and find ways to enjoy yourself.",
    "Mercury, planet of communication, is aligned with luck planet Jupiter this weekend, so it’s likely good news will be coming your way. It may not look that good to start with but give it time – there’s a nice surprise in there somewhere.",
    "A business opportunity may be tempting but there is no guarantee it will be a success, so think long and hard before you commit time and money to it. Don’t trust what other people tell you, trust your own instincts – they’re seldom wrong.",
    "You may be eager to get out there and show what you can do but a little bit of planning now will bring huge success later on. Keep your enthusiasm in check and the moment an idea pops into your head make sure you write it down.",
    "Mercury, your ruler, links with Jupiter, planet of good fortune, this weekend, so it’s likely you will be in the right place at the right time with the right people to take advantage of an unexpected convergence of events. Don’t over-think it, just act.",
    "There will be plenty going on in your life this weekend but it may feel as if you are being swept along by events over which you have no control. Why should that bother you? Go with the flow and trust that the universe has your back.",
    "To get the best from the next few days you must prepare carefully. That means looking ahead and trying to figure out what obstacles are likely to be in your path. Don’t just throw yourself at the world, make sure you have a realistic strategy.",
    "watch some baseBALL!",
    "Don't waste too much time on research. Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject, so you know you are getting the best possible information.",
    "Never trust technology. Everyone always wants new things. Everybody likes new inventions, new technology. People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.",
    "Know how to motivate. There's something about an underdog that really inspires the unexceptional.",
    "rise and grind 💯💸😤",
    "never get so busy making a life that you forget to make a living",
    "live laugh love"

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