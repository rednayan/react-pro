import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Stack,AppBar,Button} from "@mui/material";
import { useEffect, useState,useRef } from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import Login from './screen/Login'
import PageNotFound from './screen/404'
import University from "./screen/University";
import Blog from "./screen/Blog"
import DetailBlog from "./component/DetailBlog";
import Routing from "./Routing"


function App() {
  return(
      <Router>
          <AuthProvider>
          <Routing />
        </AuthProvider>
      </Router>

  )
}

export default App;
