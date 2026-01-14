import { useState, useEffect } from 'react'
import './App.css'
import Word from './Word'

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState([])
  const [wordHistory, setWordHistory] = useState(() => {
    const localValue = localStorage.getItem("wordhistory")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("wordhistory", JSON.stringify(wordHistory))
  }, [wordHistory])
  function submitText(e) {
    e.preventDefault()
    if (text === '') return
    setWordHistory(wordList => {
      return [
        ...wordList,
        text,
      ]
    })
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
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
      <div><h3>History:</h3>{wordHistory.map(word => <p>{word}</p>)}</div>
      {!result.title && result.map(word => <Word word={word} />)}
      {result.title && <h3>No words found!</h3>}
    </>
  )
}

export default App
