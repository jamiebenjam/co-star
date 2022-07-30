const horoscopeMessages = 
    ["I love you so much", 
    "You're the best thing to happen to me",
    "Buy your gf a glizzy"
]

const getRandomHoroscope = () => {
    return horoscopeMessages[Math.floor(Math.random()*horoscopeMessages.length)]; 
}

