import { useState } from "react"
import Card from "./Card"

const GameCards = ({ Cards, updateMoves, updateScore }) => {

        const [flippedCards, setFlippedCards] = useState([]);
        const [matchedCards, setMatchedCards] = useState([]);

        const handleCardClick = (card) => {
            if (
                flippedCards.length === 2 ||
                matchedCards.includes(card.id) ||
                flippedCards.some((c) => c.id === card.id)
            ) {
                return;
            }

            const newFlippedCards = [...flippedCards, card];
            setFlippedCards(newFlippedCards);

            if (newFlippedCards.length === 2) {
                updateMoves();
                const [firstCard, secondCard] = newFlippedCards;
                if (firstCard.card === secondCard.card) {
                    setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
                    updateScore();
                    setTimeout(() => setFlippedCards([]), 500);
                } else {
                    setTimeout(() => setFlippedCards([]), 1000);
                }
            }
        };


        return (
            <div className="grid grid-cols-4 gap-4 mt-6 p-4">
                {Cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        isFlipped={flippedCards.includes(card) || matchedCards.includes(card.card)}
                        onClick={() => handleCardClick(card)}
                    />
                ))}
            </div>
        )
    }

    export default GameCards