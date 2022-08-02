import React, {useState} from 'react';

function Extras() {

const [slang, setSlang] = useState("")
const [love, setLove] = useState("i love you......")

const bits = [
    "sauce : sense of confidence, like an extra va-va-voom or, as the French would say ~je ne sais quoi~. it simply can't be bought", 
    "melt : genuinely an idiot, but more significantly, an emotional idiot",
    "fanny flutters : what you give me when you wear a black tshirt with the white sox jersey",
    "~Do you think I'd waste my wine on your leg~ Malia Arkian lasted about 60 seconds in the Love Island villa after she got into a fight with Kady after she claimed that she split wine on her leg. The fight resulted in Kady allegedly being punched in the face and Malia was whisked away promptly.",
    "I used to be in Blazin Squad innit. -Marcel Somerville",
    "I'm like a polar bear -Chris Hughes",
    "Hashtag looks, hashtag game, hashtag personality, hashtag everything…the ghost whisperer. -Chris Hughes",
    "I'M LOYAL BABES -a slag",
    "Hayley: Get over it, hun. Eyal: I'm not your hun, hun.",
    "People are doing amazing things right now on the Web. -Chris Hughes",
    "Every fucking person in this place fancies me. -rap gawd"
]

const loveNotes = [
    "to the moon and back",
    "a gross amount",
    "x6664206913",
    "because you're my person",
    "more than i've ever found the words for",
    "more than i ever thought i could love anyone",
    "because i can be stupidier every day and you love me for it",
    "because looking into your eyes feels different than looking into anyone else's",
    "and all of you and everything we've build together",
    "- while love has clouded me in the past, you bring a clarity i never knew",
    ", you are my sun",
    ", and nothing makes me happier than seeing your face light up",
    "bc you live in the same building as High Rise Kicks",
    "because I admire your perspective, your positivity, your warmth",
    "because you show me you",
    "for your bozo-ness, your teasing, your light spirit",
    "and that when i look into the future, i see you there with me",
    "for your swagginess",
    "and your commitment to the things your value",
    "bc you're hot"
]

function handleClick(){
    setSlang({slang: bits[Math.floor(Math.random()*bits.length)]})
}

function handleLoveClick() {
    setLove({love: loveNotes[Math.floor(Math.random()*loveNotes.length)]})
}

    return (
        <div>
            <hr></hr>
            <br></br>
            {/* <h2 className="compatibilityHeader">ᑉ³</h2> */}
            <br></br>
            <button onClick={handleLoveClick} className="button-2">i love you {love.love}</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h2 className="compatibilityHeader">a bit of me</h2>
            <br></br>
            <br></br>
            <button onClick={handleClick} className="button-2">got a text</button>
            <br></br>
            <p>{slang.slang}</p>
        </div>
    )
}

export default Extras;