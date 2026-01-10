import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaysyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PricingOption from "./components/PricingOptions/PricingOption";
import ResultsChart from "./components/ResultsChart/ResultsChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-dots loading-lg"></span>}
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <Suspense
          fallback={<span className="loading loading-dots loading-lg"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>
    </>
  );
}

export default App;
