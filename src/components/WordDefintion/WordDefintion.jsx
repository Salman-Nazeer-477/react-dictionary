import './WordDefintion.css'
export default function WordDefintion({ definitionItem }) {
    return (<>
        <p className="definition-text">{definitionItem.definition}</p>
        {definitionItem.example && <p className="defintion-example">{definitionItem.example}</p>}
        {<div className="defintion-synonyms">
            {
                definitionItem.synonyms.map((synonym, index) =>
                    <p key={index} className="definiton-synonyms">{synonym}</p>
                )
            }
        </div>}
    </>)
}