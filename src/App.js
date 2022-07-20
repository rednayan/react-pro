import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Stack,AppBar,Button} from "@mui/material";
import { useEffect, useState,useRef } from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import Home from './screen/Home'
import Login from './screen/Login'
import PageNotFound from './screen/404'
import University from "./screen/University";
import Blog from "./screen/Blog"


function App() {

  return(
      <Router>
          <AuthProvider>
          <AppBar position="static"  sx={{boxShadow:"none",backgroundColor:"white"}}>
          <Stack direction="row" spacing={1} sx={{width:"100%",height:"7vh"}}>
              <Button component={Link} to={'/'}>Home</Button>
              <Button component={Link} to={'/blog'}>Blog</Button>
              <Button component={Link} to={'/university'}>University</Button>
              <Button component={Link} to={'/login'}>Login</Button>
          </Stack>
        </AppBar>
        <Routes> 
            <Route exact path = "/login" element= {<Login />}></Route>
            <Route exact path = "/blog" element= {<Blog />}></Route>
            <Route exact path = "/university" element= {<University />}></Route>
            <Route exact path ="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </AuthProvider>
      </Router>

  )
}

export default App;
