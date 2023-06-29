import React, {useState, useEffect} from 'react'


export default function GetDay(){

let [weekday, setWeekday] = useState('')
let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY","THURSDAY", "FRIDAY","SATURDAY"]
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