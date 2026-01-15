export default function Word({word}){
    return (
        <>
            <div>
                <h3>{word.word}</h3>
                <h5>{word.phonetic}</h5>
                {word.meanings.map(meaning => {
                    return <>
                        <h4>{meaning.partOfSpeech}</h4>
                        {meaning.definitions.map(definition => {
                            return <>
                                <p>{definition.definition}</p>
                                {definition.example && <p>example:{definition.example}</p>}
                            </>
                        })}
                    </>
                })}
            </div>
        </>
    )
}