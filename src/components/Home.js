import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1>
        {name} is a Web Developer from {city}
        <style>{`h1 { color: firebrick; }`}</style>
      </h1>
    </div>
  );
}
export default Home;
