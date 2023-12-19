import Login from "./component/Login";
import Home from "./component/Home";
import Flightdetail from "./component/flightdetail";
// import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
  //  <div className="flightbackground">
  //   <div class='main'>
  //     <input type='checkbox' id='chk' aria-hidden='true'></input>
  //     <div class='signup'>
  //       <form>
  //         <label for='chlk' aria-hidden='true'>Sign up</label>
  //         <input type='text' name='txt' placeholder='User name' required=''/>
  //         <input type='email' name='email' placeholder='Email' required=''/>
  //         <input type='text' name='pswd' placeholder='Password' required=''/>
  //         <button>Sign up</button>
  //       </form>

  //     </div>
  //     <div class='login'>
  //      <form>
  //      <label for='chlk' aria-hidden='true'>Login</label>
  //         <input type='email' name='email' placeholder='Email' required=''/>
  //         <input type='text' name='pswd' placeholder='Password' required=''/>
  //      </form>
  //     </div>

  //   </div>
  //  </div>
  <Router>
  <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/flightdetail" element={<Flightdetail />} />
  </Routes>
</Router>
  );
}

export default App;
