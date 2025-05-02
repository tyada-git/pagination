import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UpcomingBEPagination from "./UpcomingBEPagination";
import PaginationFE from "./PaginationFE";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <PaginationFE />
    </>
  );
}

export default App;
