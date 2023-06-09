import React, {useEffect, useState} from 'react'
import ExerciseForm from './ExerciseForm'
import dailyImage from './assets/dailyImage.png'
import Navbar from './Navbar'
import "./dailyRoutine.css"

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
  onChange={getUserInput}></textarea>
  <input type="submit" name="" id="" />
  <input type="reset" />
</form>

 : null}<button onClick={clickedBtn}>today</button>
   </div>




{displayRoutine.map(( exercise, index)=> {
 
  return(
<div key ={index} className='card'>

  <li>
    {exercise}
   
  </li>
</div>
  )
})}




 <div className='card'>  <h1>what's the move</h1>
<div>
  <div>mon</div>
<ul>
  <li>
    jump rope
  </li>
  <li>planks</li>
  <li>push up</li>
</ul>
</div></div>



</section>

)}