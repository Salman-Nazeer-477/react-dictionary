import WordDefintion from "../WordDefintion/WordDefintion"
import './PartOfSpeech.css'
export default function PartOfSpeech({meaning}){
    return (<>
        <h2 className="part-of-speech">{meaning.partOfSpeech}</h2>
        <ol className="word-defintion-list">
            {
                meaning.definitions.map((definitionItem, index) => {
                    return <li key={index} className="defintion-item">
                        <WordDefintion
                            definitionItem={definitionItem}
                        />
                    </li>
                })
            }
        </ol>
    </>)
}