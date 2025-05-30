import { useState,useEffect } from "react"
export default function Joker(){
    let [joke, setJoke] = useState({});
    const JokeUrl = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async ()=>{
        let response = await fetch(JokeUrl);
        let jsonResponse = await response.json();
        setJoke(jsonResponse);
        // console.log(joke);
    }

    useEffect(() =>{
        async function getFirstJoke(){
            let response = await fetch(JokeUrl);
            let jsonResponse = await response.json();
            setJoke(jsonResponse);
        }
        getFirstJoke()
    },[]);

    return(
        <div>
            <h3>Joker</h3>
            <h4>{joke.setup}</h4>
            <h4>{joke.punchline}</h4>
            <button onClick={getNewJoke}>Get Joke</button>
            
        </div>
    )
}