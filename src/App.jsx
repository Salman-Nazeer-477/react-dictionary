import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [wordObject, setWordObject] = useState({})
  function submitText(e){
    if(text === '') return
    e.preventDefault()
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
          .then(response => response.json())
          .then(data => setResult(data))
          .catch(error => console.error('Error fetching data:', error))
  }
  return (
    <>
      <form onSubmit={submitText}>
        <input 
          type={text}
          onChange={e => setText(e.target.value)}
        />
        <button>search</button>
      </form>
      {result && <>
      <div>{result[0].word}</div>
      <div>{result[0].phonetic}</div>
      <div>{result[0].meanings.map((meaning, index) => {
        return <div key={index}>{meaning.definitions.definition}</div>
      })}
      </div>
      </>
      }
    </>
  )
}

export default App
