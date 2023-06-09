import {useState} from "react"



const App = () => {
  const [images, setImages] = useState(null)
  const [value, setValue] = useState(null)

const surpriseOptions = [
  'A blue ostrich eating melon',
  'A matisse style shark on the telephone',
  'A pineapple sunbathing',
]

const getImages = async() => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "BLUGH"
      }),
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch('http://localhost:8000/images', options)
    const data = await response.json()
    console.log(data)
    setImages(data)
  } catch (error) {
    console.error(error)
  }
}

  console.log(value)

  return (
    <div className="app">
      <section className="search-section"></section>
        <p>Start with a detailed description
          <span className="surprise">Surprise me</span>
        </p>
        <div className="input-container">
          <input
            value={value}
            placeholder="a purple banan floating in space..."
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={getImages}>Generate</button>
        </div>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated image of ${value}`}/>
        ))}
      </section>

    </div>
  )
}

export default App
