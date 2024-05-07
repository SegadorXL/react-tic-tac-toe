import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    function handleSquareSelected(rowIndex, colIndex) {
        setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
                currentPlayer = 'O';
            }
            return [{
                square: {row: rowIndex, col: colIndex}, player: currentPlayer
            }, ...prevTurns
            ];
        });

    }

    return (<main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
                <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
            </ol>
            <GameBoard onSelectSquare={handleSquareSelected} turns={gameTurns}/>
        </div>
        LOG
    </main>)
}

export default App
