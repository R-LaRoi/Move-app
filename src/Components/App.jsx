import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Contact from "./Contact"
import MeetRachel from "./MeetRachel";
import DailyRoutine from "./DailyRoutine";
import "./stylesheets/app.css"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route  exact path="meetrachel" element={<MeetRachel/>} />
         <Route  exact path="dailyroutine" element={<DailyRoutine/>} />
        <Route exact ="home" element={<Homepage/>} />
            <Route exact path ="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}