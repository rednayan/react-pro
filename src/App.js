import Home from './screen/Home'
import Login from './screen/Login'
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return(
    <Router>
      <div>
          <Link to = "/">Home</Link>
          <Link to = "/login">Login</Link>
      </div>
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path = "/login" element= {<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
