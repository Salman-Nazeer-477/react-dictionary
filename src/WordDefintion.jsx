function WordDefintion({definitionItem}){
    return (<>
        <p className="definition-text">{definitionItem.definition}</p>
        {definitionItem.example && <p className="defintion-example">{definitionItem.example}</p>}
        {definitionItem.synonyms.length && <div className="defintion-synonyms">
        {
            definitionItem.synonyms.map(synonym => 
                <p className="definiton-synonyms">{synonym}</p>
            )
        }
        </div>}
    </>)
}