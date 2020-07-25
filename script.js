const API_KEY = '9b2011164edc48d2843291e752a78963';

const buttonElem = document.getElementById('button');

const getSpeech = async (joke) => {
    VoiceRSS.speech({
        key: API_KEY,
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

const getJoke = async () => {
    const API_URL = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';
    try {
        const response = await fetch(API_URL);
        const jokeObj = await response.json();
        getSpeech(jokeObj.joke);
    } catch (error) {
        console.log('OUCH!')
    }
}

buttonElem.addEventListener('click', getJoke);