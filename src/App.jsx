import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
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
  
  const display=()=>{
    setShow(false)
  }
  const display2=()=>{
    setShow(true)
  }
  const[money,setMoney]=useState(0)
  // React Toast 
  const notify = () => {
    toast.success('Money has been added successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
  };
  const addMoney=()=>{
    notify()
    const newMoneyAdd=money+1000000;
    setMoney(newMoneyAdd)
    console.log("Add my money",money)
    
  }
  
  return (
    <div>
     
     
     <div className='max-w-7xl mx-auto mt-4 '>
     <Header money={money}></Header>
     <Main addMoney={addMoney} toast={notify}></Main>
     <Player show={show} display={display} display2={display2}></Player>
     <Selected show={show}></Selected>
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
