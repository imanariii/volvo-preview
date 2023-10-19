import './App.css'
import video from './assets/preview.mp4'

const width = 1280
const height = 720

function App() {
  return (
    <>
        <video src={video} width={width} height={height} controls />
    </>
  )
}

export default App
