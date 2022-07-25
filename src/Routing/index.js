import {
    Route,
    Routes,
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { useEffect, useState } from "react";
  import {Stack,AppBar,Button} from "@mui/material";
  import Login from '../screen/Login'
  import PageNotFound from '../screen/404'
  import University from "../screen/University";
  import Blog from "../screen/Blog"
  import DetailBlog from "../component/DetailBlog";
  import PrivateRoute from "../component/PrivateRoute";
  import { useAuth } from "../contexts/AuthContext";

export default function Routing() {
  const {logout,currentUser}  = useAuth();
  const handleLogout = async () => {
    await logout().then(() => alert("signed out"));
  }
  return (
    <>
    <AppBar position="static"  sx={{boxShadow:"none",backgroundColor:"#ffffff"}}>
            <Stack direction="row" spacing={1} sx={{width:"100%",height:"7vh"}}>
                <Button component={Link} to={'/'}>Champions</Button>
                <Button component={Link} to={'/university'}>University</Button>
                {!currentUser? 
                  <Button component={Link} to={'/login'}>Login</Button> 
                  :
                  <Button onClick = {handleLogout}>Logout</Button>    
              }
            </Stack>
          </AppBar>
          <Routes> 
              <Route exact path = "/login" element= {<Login />}></Route>
              <Route exact path="/*" element={<PrivateRoute><Blog/></PrivateRoute>} />
              <Route exact path = "/blogs/detailblog/:id" element= {<PrivateRoute><DetailBlog /></PrivateRoute>}></Route>
              <Route exact path = "/university" element= {<University />}></Route>
              <Route path="*" element={<PageNotFound />} />
          </Routes>
    </>
  )
}
