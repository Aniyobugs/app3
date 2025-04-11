import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import First from "./components/First";
import New from "./components/New";
import Second from "./components/Second";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <First/> */}
      {/* <New/> */}
      {/* <Second/> */}
      <Navbar />
      <Routes>
        <Route path="" element={<First />} />
        <Route path="/shop" element={<Second />} />
        <Route path="/c" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
