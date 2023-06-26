import React, {useEffect, useState} from 'react'
import dailyImage from './assets/dailyImage.png'
import imageGrid from "./assets/imagegrid.png"
import Navbar from './Navbar'
import "./DailyRoutine.css"
import Footer from './Footer'
import GetDay from './Date'


// ------------------- FIREBASE ----------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://what-s-the-move-f3a77-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const routinesInDB = ref(database, "Daily Routine")

// ------------------- FIREBASE ----------------


export default function DailyRoutine() {
let [showForm, setShowForm] = useState(false);
let [userInput, setUserInput] = useState('');
let [showWorkout, setShowWorkout] = useState([])
let [displayRoutine, setDisplayRoutine] = useState([])




useEffect(()=> {

onValue(routinesInDB, function(snapshot) {
 if (snapshot.exists()){
  {
let routines = Object.entries(snapshot.val())
 let routinesArray = routines.flat()
let postRoutines = routinesArray.filter((item, index) => {
return index % 2===1}
).reverse()

setDisplayRoutine(postRoutines)
deleteCard(routines)
 }

 } }) },[0
])


function logWorkout (e){

if (userInput === "" || null){
  alert("What's the move?")
} else {
  e.preventDefault();
  setShowWorkout(prevShowWorkout => [ ...prevShowWorkout,(userInput)])
push(routinesInDB, userInput)
console.log(showWorkout)
}



}


function getUserInput(e){
  setUserInput(e.target.value)

}

function clickedBtn(){
  return(setShowForm(!showForm))
}

async function deleteCard(routineCard){

let idNumber = routineCard[0]
setDisplayRoutine(prevDisplayRoutine => prevDisplayRoutine.filter( items => items != routineCard))

// let dbRoutine = ref(database, `Daily Routine/${idNumber[0]}`)
// await remove(dbRoutine)
// console.log(routineCard)
}


return (

<section className='daily-container'>
<Navbar />
<div className='quote' id='change-multi-color'>
  <div>celebrate your small wins!
  </div>
  
  </div>



 <div className='dsk-grid'>
  <div className='pic'>
  <img src={dailyImage} className="dailyImg" alt="woman excercising outdoors"
 />  
   <img src={imageGrid} className="dsk-img" alt="woman excercising outdoors"
 /> 
</div>
{/* <div className='quote' id='change-multi-color'>celebrate your small wins!</div> */}
 <div className='form-modal '>


{showForm ? 
 <form onSubmit={logWorkout}>
  <textarea name="" id="" cols="30" rows="10"
  onChange={getUserInput} placeholder="what's the move"></textarea>
  <div> <input type="submit" className="btn" id="" /> 
  <input type="reset"  className="btn"/></div>
 
</form>

 : null}<button onClick={clickedBtn} className="today-btn"><GetDay /></button>
   </div>

{displayRoutine.map(( exercise, index)=> {

 let exercises = exercise.split('-');
//  console.log(exercises)
  return(
<div key={index} className='card-co'>

<div className='col-1'>

  <div className='minus-btn'>
<i className="fa-solid fa-circle-minus"  
onClick={()=>deleteCard(exercises)}></i> 
</div>
    {exercises.map((moves, index)=>{
      return(
       <li className='col-list' key={index}>
        {moves}
        </li>
        )
    })}
   


  </div>

</div>
  )
})}


 <div className='card-co' id="color" > 
<div>
The will must be stronger than the skill.
</div>

</div>

</div>

<Footer />
</section>

)}