import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );

  }
export default App;
