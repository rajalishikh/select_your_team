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
  const [playerId,setPlayerId]=useState([])
  

 
  
  const display=()=>{
    setShow(false)
  }
  const display2=()=>{
    setShow(true)
  }
  // function for add money
  const[money,setMoney]=useState(500000000000000)
  const addMoney=()=>{
    notify()
    setMoney(money+1000000)
  
  }
 
  // function for chose player
  
const chosePlayer=(price,player_category,name,img_link,id)=>{
  if(playerId.includes(id)){
    notify3()
    return;
  }
  if(playerId.length <11){
    const newArray2=[...playerId,id]
  setPlayerId(newArray2)
   
   
    set_player_number(player_number+1)
    setMoney(money - price);
    let obj = { name, img_link, player_category };
    const newArray = [...player, obj];
    setPlayer(newArray);
    notify2()

  }else{
    notify4()
  }
  
    
    
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
 const notify3=()=>{
  toast('This player is already purchased by you.', {
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
 const notify4=()=>{
  toast('Your Team is full', {
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
     <Player show={show} display={display} display2={display2} chosePlayer={chosePlayer} myMoney={money} number_player={player_number} playerId={playerId}></Player>
     <Selected show={show} Selected={player} display={display}></Selected>
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
