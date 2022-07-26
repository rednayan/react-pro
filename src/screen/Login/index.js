import React, {useState} from 'react'
import { Grid, Tabs, Tab , Button,Card,CardMedia,Typography} from '@mui/material'
import back from "../../assets/back.jpg"
import SignUp from '../../component/SignUp';
import SignIn from '../../component/SignIn';
import { Box } from '@mui/system';
const Login = () => {
  const [activeTabId,setActiveTabId] = useState(0);
  return ( 
    <div> 
          <Grid container sx={{height:"90vh"}} >
            <Grid item xs={7}sx = {{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <Box
                sx={{width: "80%",
                  boxShadow:"0px -1px 15px 2px rgba(196,196,196,1)",
                  backgroundColor:'#2c2c2e',
                  color:"#ffffff",
                  display:"flex",
                  margin:"125px auto "
              }}
              >
                <Box
                  sx={{backgroundImage:`url(${back})`,backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"end"}}
                  alt="Image"
                  height="350px"
                  width="100%"
                  padding={1}
                >
                  <Typography variant="h5" component="div" sx={{textTransform:"uppercase",letterSpacing:"2px",marginBottom:"40px"}}>Write about your favourite Champion!!</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={5}> 
              <Tabs 
                value = {activeTabId}
                onChange = {(e,id) => {setActiveTabId(id)}} 
                sx={{
                  margin:"0px 20px "
                }}
                >
                <Tab label="sign in"></Tab>
                <Tab label="sign up"></Tab>
              </Tabs>

              {activeTabId === 0 && (
                <SignIn />
              )} 
              {activeTabId === 1 && (
                  <SignUp />
              )} 
            </Grid>
          </Grid>
    </div>
  )
}

export default Login