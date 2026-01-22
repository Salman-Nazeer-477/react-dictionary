import PartOfSpeech from "../PartOfSpeech/PartOfSpeech"
import './WordItem.css'
export default function WordItem({ wordItem }) {
    return (<>
        <div className="word-item-header">
            <img src={null} alt="" className="audio-play" />
            <h1 className="word">{wordItem.word}</h1>
        </div>
        <h3 className="phonetic">{wordItem.phonetic}</h3>
        <ul className="parts-of-speech-list">
            {
                wordItem.meanings.map((meaning, index) => {
                    return <li className="part-of-speech-item" key={index}><PartOfSpeech
                        meaning={meaning}
                    /></li>
                })
            }
        </ul>
    </>)
}