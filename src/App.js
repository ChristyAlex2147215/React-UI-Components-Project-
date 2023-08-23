import React from "react";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {

  return (
  <div className="flex w-full container mx-auto  grid-cols-6 gap-4 mt-4">
   <div className="p-3 bg-pink-200">
   <SideBar/>
   </div>
      <div className="w-full bg-red-200">
        <Route path="/accordion"><AccordionPage/></Route>
        <Route path="/dropdown"><DropDownPage/></Route>
        <Route path="/buttons"><ButtonsPage/></Route>
        <Route path="/model"><ModalPage/></Route>
        <Route path="/table"><TablePage/></Route>
        <Route path="/counter"><CounterPage/></Route>
      </div>
    </div>
    
  );
}

export default App;
