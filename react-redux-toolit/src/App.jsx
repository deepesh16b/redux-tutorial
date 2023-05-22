import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { icecreamsView } from "../features/icecream/icecreamView";
import { cakeView } from "../features/cake/cakeView";
import { userView } from "../features/user/userView";

function App() {
  return (
    <div>
      <cakeView />
      <icecreamsView />
      <userView />
    </div>
  );
}

export default App;
