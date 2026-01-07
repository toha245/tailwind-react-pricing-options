import { Suspense, useState } from "react";
import "./App.css";
import DaisyNav from "./components/DaysyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/PricingOptions/PricingOption";

const pricingPromise = fetch('pricingData.json').then(res => res.json())



function App() {
  return (
    <>
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
     
    </>
  );
}

export default App;
