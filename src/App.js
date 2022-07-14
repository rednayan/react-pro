import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Stack,AppBar,Button} from "@mui/material";
import { useEffect, useState } from 'react';
import Home from './screen/Home'
import Login from './screen/Login'
import PageNotFound from './screen/404'

const a = 'ab';

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);

useEffect(()=>{
  const userJWT = localStorage.getItem('userJWT')
  if(userJWT){
    setIsAuthenticated(true)
  }else{
    setIsAuthenticated(false)
  }
},[])
  return(
    <Router>
      {isAuthenticated && (
      <AppBar position="static"  sx={{boxShadow:"none",backgroundColor:"white"}}>
        <Stack direction="row" spacing={1} sx={{width:"100%",height:"7vh"}}>
            <Button component={Link} to={'/'}>Home</Button>
            <Button component={Link} to={'/login'}>Login</Button>
        </Stack>
      </AppBar>
      )}
      <Routes>
          <Route exact path = "/login" element= {<Login />}></Route>
          <Route exact path ="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      {/* {isAuthenticated ? (
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      ) :(
        <Routes>
          <Route exact path = "/login" element= {<Login />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path ="/" element={<Home />} />
        </Routes>
        )
       } */}
    </Router>
  )
}

export default App;
