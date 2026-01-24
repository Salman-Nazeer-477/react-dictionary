import './WordHistory.css'

export default function WordHistory({ wordHistory, deleteWordHistory, setText }) {
    return (
        <>
            <h3>History:</h3>
            {
                wordHistory.map((word, index) =>
                    <p key={index} onClick={() => setText(word)}>{word}
                        <button className="delete" onClick={() => deleteWordHistory(word)}> X</button>
                    </p>
                )
            }   
        </>
    )
}