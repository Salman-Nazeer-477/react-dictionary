import PartOfSpeech from "./PartOfSpeech"
export default function WordItem({wordItem}){
    return (<>
        <img src={null} alt="" className="audio-play" />
        <h1 className="word">{wordItem.word}</h1>
        <h2 className="phonetic">{wordItem.phonetic}</h2>
        <ul className="parts-of-speech-list">
            {
                wordItem.meanings.map((meaning, index) => {
                    return <li><PartOfSpeech 
                        meaning={meaning}
                        key={index}
                    /></li>
                })
            }
        </ul>
    </>)
}