import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Board from "./components/Board/Board";
import Login from "./pages/Login/Login";
import ScoreBoard from "./pages/ScoreBoard/ScoreBoard";
import backImg from "./assets/images/back.png";
import chip from "./assets/images/chip.png";
import a from "./assets/images/a.png";
import go from "./assets/images/go.png";
import casino from "./assets/images/casino.png";
import flush from "./assets/images/flush.png";
import poker from "./assets/images/poker.png";
import rulet from "./assets/images/rulet.png";
import wynn from "./assets/images/wynn.png";
import { useSelector } from "react-redux";

let cards = [];

function App() {
    
    const players = useSelector((state) => state.players);

    useEffect(() => {
        cards = buildCards();
    }, [players.length]);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/board">
                        <Board cards={cards} />
                    </Route>
                    <Route exact path="/scoreboard">
                        <ScoreBoard />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


function buildCards() {

    let id = 0;

    const images = [chip, a, go, casino, flush, poker, rulet, wynn];

    const cards = images.reduce((result, item, index) => {
        const getCard = () => ({
            id: id++,
            type: item,
            backImg,
            frontImg: images[index],
            flipped: false,
        });
        return [...result, getCard(), getCard()];
    }, []);

    return suffle(cards);
}

function suffle(arr) {

    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let randomIdx = Math.floor(Math.random() * len);
        let copyCurrent = { ...arr[i] };
        let copyRandom = { ...arr[randomIdx] };
        arr[i] = copyRandom;
        arr[randomIdx] = copyCurrent;
    }

    return arr;
}
