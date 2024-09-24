import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}></Route>  
      <Route path="/Signup"element={<Signup/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
