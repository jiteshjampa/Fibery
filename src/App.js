import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { DataProvider } from "./DataContext";
import Display from "./components/Display";
import Hero from "./components/Hero";
function App() {
  const [update, setUpdate] = useState(0);

  return (
    <DataProvider>
      <div>
        <div>
          <Navbar />
          <Hero />

          <Display update={update} setUpdate={setUpdate} />
        </div>
        <div className="flex justify-evenly"></div>
      </div>
    </DataProvider>
  );
}

export default App;
