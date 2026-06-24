import '../styles/joke.css'
import {useEffect, useState} from "react";

const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming'

const getJoke = async () => {
    const response = await fetch(jokeAPI)
    const data = await response.json()
    if (data.type === 'single') {
        let joke = data.joke
        return joke
    } else {
        let joke = `${data.setup}\n${data.delivery}`
        return joke
    }
}

export default function Joke() {
    const [joke, setJoke] = useState('Loading joke...')

    useEffect(() => {
        const loadJoke = async () => {
            const joke = await getJoke()
            setJoke(joke)
        }
        loadJoke()
    }, [])



    return (
        <div id="joke-wrapper">
            <div id="joke-container">
                <p id="joke">{joke}</p>
            </div>
        </div>
    )
}