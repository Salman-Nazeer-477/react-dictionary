import WordDefintion from "../WordDefintion/WordDefintion"
export default function PartOfSpeech({meaning}){
    return (<>
        <h1 className="part-of-speech">{meaning.partOfSpeech}</h1>
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