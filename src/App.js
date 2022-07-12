import Home from './screen/Home'
import Login from './screen/Login'
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Stack,AppBar,Button} from "@mui/material";

function App() {
  return(
    <Router>
      <AppBar position="static"  sx={{boxShadow:"none",backgroundColor:"white"}}>
        <Stack direction="row" spacing={1} sx={{width:"100%",height:"7vh"}}>
            <Button component={Link} to={'/'}>Home</Button>
            <Button component={Link} to={'/login'}>Login</Button>
        </Stack>
      </AppBar>
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path = "/login" element= {<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
