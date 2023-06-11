import React, {useEffect, useState} from 'react'

import dailyImage from './assets/dailyImage.png'
import Navbar from './Navbar'

import "./DailyRoutine.css"

// ------------------- FIREBASE ----------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://what-s-the-move-f3a77-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const routinesInDB = ref(database, "Daily Rotuine")

// ------------------- FIREBASE ----------------
let day = new Date()

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
console.log(routines)

let routinesArray = routines.flat()
let postRoutines = routinesArray.filter((item, index) => {

return index % 2===1}
).reverse()
setDisplayRoutine(postRoutines)


 }

 } }) },[
])


function logWorkout (e){
  e.preventDefault();
  setShowWorkout(prevShowWorkout => [ ...prevShowWorkout,(userInput)])
push(routinesInDB, userInput)
console.log(showWorkout)
}

function getUserInput(e){
  setUserInput(e.target.value)

}

function clickedBtn(){
  return(setShowForm(!showForm))
}

return (

<section className='daily-container'>
<Navbar />
<img src={dailyImage} className="dailyImg" alt="woman excercising outdoors"
 />  
 <div className='form-modal'>
{showForm ? 
 <form onSubmit={logWorkout}>
  <textarea name="" id="" cols="30" rows="10"
  onChange={getUserInput} placeholder="what's the move"></textarea>
  <div> <input type="submit" className="btn" id="" /> 
  <input type="reset"  className="btn"/></div>
 
</form>

 : null}<button onClick={clickedBtn} className="today-btn">today</button>
   </div>


{displayRoutine.map(( exercise, index)=> {
 let exercises = exercise.split(" -")
  return(
<div key={index} className='card-co'>
<div className='col-1'>

  </div>
    {exercises.map((moves)=>{
      return(

  <li className='col-list'>{moves}</li>


      )
    })}
   

</div>
  )
})}


 <div className='card-co'> 
  <div className='date'>mon 24</div>
 <div className='list-'>
<ul >

  <li>
    jump rope
  </li>
  <li>planks</li>
  <li>push up</li>
</ul>
</div>

</div>


</section>

)}