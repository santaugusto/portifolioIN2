// App.jsx
import "./App.css";
import { Outlet } from "react-router-dom";
// import Contato from "./componentes/Contato/Contato";

function App() {
  return (
    <div className="App bg-dark-grey">
      <Outlet/>
      {/* <Contato/> */}
    </div>
  );
}

export default App;
