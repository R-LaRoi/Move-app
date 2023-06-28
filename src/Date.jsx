import React, {useState, useEffect} from 'react'


export default function GetDay(){

let [weekday, setWeekday] = useState('')
let days = ["SUN", "MON", "TUE", "WEDNESDAY","THU", "FRI","SAT"]
let wkDate = new Date()
days.map((day, index)=>{
  if(index ===  wkDate.getDay()){

useEffect(() => {
 setWeekday(day)
}, [])
   
}

})
return(

  <section>
    <div>
      <span className="symbol">#</span>
      {weekday}</div>
  </section>
)

}