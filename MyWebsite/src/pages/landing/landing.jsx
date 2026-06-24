import React from 'react';
import Header from '../../globalComponents/header.jsx';
import Welcome from "./components/welcome.jsx";
import Joke from "./components/joke.jsx";

export default function Landing() {
    return (
        <div>
            <Welcome />
            <Joke />
        </div>
    );
}