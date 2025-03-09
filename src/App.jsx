import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Main from './Component/Main/main'
import Player from './Component/Player/Player'
import Selected from './Component/Selected/Selected'
import SubsCribe from './Component/SubsCribe/SubsCribe'
import './index.css'

function App() {
  
  return (
    <div>
      
     
     <div className='max-w-7xl mx-auto mt-4 '>
     <Header></Header>
     <Main></Main>
     <Player></Player>
     <Selected></Selected>
     </div>
     <div className='max-w-7xl mx-auto relative md:top-2 lg:top-32 border h-68 bg-[#FFFFFF26] p-3 rounded-md'>
     <SubsCribe></SubsCribe>
     </div>
     
     <Footer></Footer>
      
      
    </div>
  )
}

export default App
