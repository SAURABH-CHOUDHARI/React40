


const ScoreCard = ({score , moves}) => {
    return (
        <>
            <div className="flex justify-between gap-8 bg-gray-100 bg-opacity-20 p-4 rounded-lg shadow-lg w-80 text-center">
                <div>
                    <h2 className="text-2xl font-bold">Moves : {moves}</h2>
                    <p className="text-xl mt-1"></p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Score : {score}</h2>
                    <p className="text-xl mt-1"></p>
                </div>
            </div>
        </>
    )
}

export default ScoreCard