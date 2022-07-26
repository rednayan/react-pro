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
  import CreateBlog from "../component/CreateBlog";
  import UpdateBlog from "../component/UpdateBlog";

export default function Routing() {
  const {logout,currentUser}  = useAuth();
  const handleLogout = async () => {
    await logout();
  }
  return (
    <>
    <AppBar position="static"  sx={{boxShadow:"none",backgroundColor:"#ffffff"}}>
            <Stack direction="row" spacing={2} sx={{width:"100%",height:"10vh",backgroundColor:"#1c1c1e"}}>
                <Button component={Link} to={'/'} sx={{color:"#ffffff"}}>Champion Blogs</Button>
                <Button component={Link} to={'/create-blog'} sx={{color:"#ffffff"}}>Create Blog</Button>
                {/* <Button component={Link} to={'/university'}>University</Button> */}
                {!currentUser? 
                  <Button component={Link} to={'/login'} sx={{color:"#30d158"}}>Login</Button> 
                  :
                  <Button onClick = {handleLogout} sx={{color:"#ff453a"}} >Logout</Button>    
                }
            </Stack>
          </AppBar>
          <Routes> 
              <Route exact path = "/login" element= {<Login />}></Route>
              <Route exact path="/*" element={<PrivateRoute><Blog/></PrivateRoute>} />
              <Route exact path = "/blogs/detailblog/:id" element= {<PrivateRoute><DetailBlog /></PrivateRoute>}></Route>
              <Route exact path = "/blogs/detailblog/:id/update" element= {<PrivateRoute><UpdateBlog /></PrivateRoute>}></Route>
              <Route exact path = "/create-blog" element= {<PrivateRoute><CreateBlog /></PrivateRoute>}></Route>
              {/* <Route exact path = "/university" element= {<University />}></Route> */}
              <Route path="*" element={<PageNotFound />} />
          </Routes>
    </>
  )
}
