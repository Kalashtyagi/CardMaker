import React from "react";
import Header from "./component/Header/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path = "/" element={""}/>
   </Routes>
   </>
  )
}

export default App;
