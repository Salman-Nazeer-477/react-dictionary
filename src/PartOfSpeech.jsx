import WordDefintion from "./WordDefintion"
export default function PartOfSpeech({meaning}){
    return (<>
        <h1 className="part-of-speech">{meaning.partOfSpeech}</h1>
        <ol className="word-defintion-list">
            {
                meaning.definitions.map((defintionItem, index) => {
                    return <li key={index} className="defintion-item">
                        <WordDefintion
                            defintionItem={defintionItem}
                        />
                    </li>
                })
            }
        </ol>
    </>)
}