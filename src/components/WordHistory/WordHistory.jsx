import './WordHistory.css'

export default function WordHistory({ wordHistory, deleteWordHistory, setText }) {
    return (
        <>
            <h3>History:</h3>
            <div className="word-history-list">
            {
                wordHistory.map((word, index) =>
                    <p className="word-history-item" key={index} onClick={() => setText(word)}>{word}
                        <button className="delete" onClick={() => deleteWordHistory(word)}>x</button>
                    </p>
                )
            }   
            </div>
        </>
    )
}