import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import WordItem from './components/WordItem/WordItem.jsx'
import WordHistory from './components/WordHistory/WordHistory.jsx'

function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [wordHistory, setWordHistory] = useState(() => {
    const localValue = localStorage.getItem("wordhistory")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("wordhistory", JSON.stringify(wordHistory))
  }, [wordHistory])

  function addWordHistory(text) {
    setWordHistory(wordList => {
      return [
        ...wordList.filter(word => word !== text),
        text,
      ]
    })
  }

  function deleteWordHistory(text) {
    setWordHistory(wordList => {
      return wordList.filter(word => word !== text)
    })
  }

  function submitText(e) {
    e.preventDefault()
    if (text === '') return
    setIsLoading(true)
    setError(null)
    setResult([])
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      .then(response => {
        setResult(response.data)
        setError(null)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error)
        setResult([])
        setIsLoading(false)
      })
    addWordHistory(text)

  }
  return (
    <div className="app">
      <form onSubmit={submitText}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="search-button">search</button>
      </form>
      <div className="history">{(wordHistory.length !== 0) && 
        <WordHistory 
          setText={setText} 
          wordHistory={wordHistory} 
          deleteWordHistory={deleteWordHistory} 
        />
      }</div>
      <div className="words-list">
        {!result.title && result.map((word, index) => <WordItem key={index} wordItem={word} />)}
        {error && <h3>{JSON.stringify(error.message)}</h3>}
        {error && error.status === 404 && <h3>Word Not Found!</h3>}
        {isLoading && <h3>Loading...</h3>}
      </div>
    </div>
  )
}

export default App
