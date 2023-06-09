import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";

import MeetRachel from "./MeetRachel";
import DailyRoutine from "./DailyRoutine"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route  exact path="meetrachel" element={<MeetRachel/>} />
         <Route  exact path="dailyroutine" element={<DailyRoutine/>} />
        <Route exact ="home" element={<Homepage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}