import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import './stylesheets/dailyroutine.css'
import Footer from './Footer'
import vid1 from './assets/vid1.mp4'


// ------------------- FIREBASE ----------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import GetDay from './Date'

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
let [selectedDate, setSelectedDate] = useState()

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
}
 else {
  e.preventDefault();
  setShowWorkout(prevShowWorkout => [ ...prevShowWorkout,(userInput)])
  setSelectedDate(prevSelectedDate => [ ...prevSelectedDate,(selectedDate)])
push(routinesInDB, {workout:userInput, date: selectedDate})

console.log(showWorkout)
}

}

function getDate(e){

  setSelectedDate(e.target.value)
  console.log(selectedDate)

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

// console.log(idNumber[0])
// console.log(displayRoutine)
// let dbRoutine = ref(database, `Daily Routine/${idNumber[0]}`)
// await remove(dbRoutine)
// console.log(routineCard)
}


return (
<>
<div className='nav-'>
<Navbar />
</div>
<section className='daily-container'>
 <div>
  <div className='pic'>
      <video autoPlay loop muted playsInline id="mobile-vid">
        <source src={vid1}  type="video/mp4"/> 
      </video>
        <div className='daily-header'> 
        <div onClick={clickedBtn}><GetDay />
      consistency is key.
        </div>
        <button onClick={clickedBtn} className="today-btn">
  <i className="fa-solid fa-stopwatch-20 fa-beat"></i></button> </div>
         
</div>

 <div className='form-modal '>
{showForm ? 
 <form onSubmit={logWorkout}>
  <input type="date" onChange={getDate} className='date'/>
  <textarea name="" id="" cols="30" rows="10"
  onChange={getUserInput} placeholder="what's the move"></textarea>
  <div> <input type="submit" className="btn" id="" /> 
  <input type="reset" className="btn"/></div>
 
</form>

 : null}

   </div>

{displayRoutine.map((exercise, index)=> {
const daily = exercise.workout.toLowerCase().split('-')
  return(
<div key={index} className='card-co'>

<div className='col-1'>
    <div className='minus-btn'>
<i className="fa-solid fa-circle-minus"  
onClick={()=>deleteCard(exercise)}></i> 

</div>
   <li className='show-date'>{exercise.date}</li>
    
    {daily.map((moves, index)=>{
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

</div>
<div className='quote end'> 
<div>
The will must be stronger than the skill.
</div>

</div>
<Footer />
</section>
</>
)}