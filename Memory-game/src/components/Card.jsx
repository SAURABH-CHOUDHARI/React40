
function Card({card , onClick , isFlipped}) {
    return (
        <div
            className={`w-24 h-32 bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition-transform duration-700 hover:scale-105  ${
        isFlipped ? 'rotate-y-180' : ''}`}
            onClick={onClick}
        >
            <div className="relative w-full h-full">
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-blue-400 rounded-lg text-white text-3xl font-bold ${
                        isFlipped ? 'hidden' : ''}`}
                >
                    ?
                </div>
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-green-400 rounded-lg text-white text-3xl font-bold ${
                        isFlipped ? '' : 'hidden'}`}
                >
                    {card.card}
                </div>
            </div>
        </div>
    );
}

export default Card;