
const App = () => {

const surpriseOptions = [
  'A blue ostrich eating melon',
  'A matisse style shark on the telephone',
  'A pineapple sunbathing',
]

  return (
    <div className="app">
      <section className="search-section"></section>
        <p>Start with a detailed description
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input placeholder="a purple banan floating in space..."/>
          <button>Generate</button>
        </div>
      <section className="image-section"></section>

    </div>
  )
}

export default App
