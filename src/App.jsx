import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Main from './Component/Main/main'
import Player from './Component/Player/Player'
import Selected from './Component/Selected/Selected'
import SubsCribe from './Component/SubsCribe/SubsCribe'
import './index.css'


function App() {
  const[show,setShow]=useState(false)
  const[player,setPlayer]=useState([])
  const[player_number,set_player_number]=useState(0)
  
  
  const display=()=>{
    setShow(false)
  }
  const display2=()=>{
    setShow(true)
  }
  // function for add money
  const[money,setMoney]=useState(0)
  const addMoney=()=>{
    notify()
    setMoney(money+1000000)
  
  }
  console.log("Add my money",money)
  // function for chose player

  const chosePlayer=(price,player_category,name,img_link)=>{
    

    notify2()
    setMoney(money-price)
    let obj={name,img_link,player_category}
    const newArray=[...player,obj]
    setPlayer(newArray)
    set_player_number(player_number+1)
}
console.log(player)
  // React Toast 
 const notify=()=>{
  toast('Money has been added successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
 }
 const notify2=()=>{
  toast('Player purchase is complete', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
 }
 
  
  
  return (
    <div>
     <div className='max-w-7xl mx-auto mt-4'>
     <Header money={money}></Header>
     <Main addMoney={addMoney} ></Main>
     <Player show={show} display={display} display2={display2} chosePlayer={chosePlayer} myMoney={money} number_player={player_number}></Player>
     <Selected show={show} Selected={player}></Selected>
     </div>
     <div className='max-w-7xl mx-auto relative md:top-2 lg:top-32 border h-68 bg-[#FFFFFF26] p-3 rounded-md'>
     <SubsCribe></SubsCribe>
     </div>
     <Footer></Footer>
     <ToastContainer />
    </div>
  )
}

export default App
