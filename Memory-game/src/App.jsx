import { useState } from "react";
import ScoreCard from "./components/ScoreCard";
import GameCards from "./components/GameCards";


const App = () => {
  const emojis = ['🍕','🍔','🍗','🛺','❤️','🏖️'];

  const [cards, setCards] = useState([]);
  const [startToggle, setstartToggle] = useState(true)
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const updateMoves = () => setMoves(moves + 1);
  const updateScore = () => setScore(score + 1);


  const shuffleCards = () => {
    const shuffledCards = [...emojis, ...emojis]
    .sort(() => Math.random() - 0.5)
    .map((card, idx) => ({card, id: idx }));
    setCards(shuffledCards);
    setstartToggle(false)
    
  }
  


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-red-400 text-white flex flex-col items-center py-6 ">
      <header className="text-center mb-6 ">
      <h1 className="text-4xl font-extrabold drop-shadow-md ">
          Memory Game
        </h1>
        <p className="text-lg mt-2 opacity-80">Test your memory and have fun!</p>
      </header>
      <ScoreCard moves={moves} score={score}/>
      <GameCards Cards={cards} updateMoves={updateMoves} updateScore={updateScore}/>
      <footer>
        <button 
        className="bg-purple-400 w-40 py-2 mt-6 rounded-3xl hover:bg-white hover:text-purple-400 font-bold text-xl active:scale-95 shadow-2xl"
        onClick={shuffleCards}
        >{startToggle ? 'Start':'Start Again'}</button>
      </footer>
    </div>
    </>
  )
}

export default App