import Hleft from './Hleft'
import SpeechBot from './SpeechBot'

const Home = () => {
  return (
    <>
      <div className='flex' id='div-top'>
        <Hleft id="home-left" />
        <SpeechBot id="home-right" />
      </div>
    </>
  )
}

export default Home
