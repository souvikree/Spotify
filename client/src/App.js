 
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
 
 function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HelloComponent />}/> */}
          <Route path="/" element={<HomeComponent />}/>
          <Route path="/login" element={<LoginComponent />}/>
          <Route path="/signup" element={<SignupComponent />}/>
          
        </Routes>
      </BrowserRouter>
      </div>

    
  )
}

// const HelloComponent = () => {
//    return <div>This is hello component</div>
// }

export default App;