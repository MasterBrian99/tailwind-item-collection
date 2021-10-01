import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="">
      <div className="circle-c circle-c-1"></div>
      <div className="circle-c circle-c-2"></div>
      <div className="main-backdrop h-screen">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
