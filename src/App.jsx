import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return( 
  <>
  <h1>Productos Digital House</h1>
  <Navbar />
  <Outlet />
  </>
  )
}

export default App;
