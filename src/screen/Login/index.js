import React, {useState} from 'react'
import { Grid, Tabs, Tab ,Typography,TextField,Stack,Button,Box} from '@mui/material'
import backgroundImg from "../../assets/backgroundImg.jpg"
import SignUp from '../../component/SignUp';
const Login = () => {
  const [activeTabId,setActiveTabId] = useState(0);
  return (
    <div> 
    <Grid container sx={{backgroundImage:`url(${backgroundImg})`,height:"100vh"}}>
      <Grid item xs={7}>
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
          <>
            <Stack spacing={2} sx={{margin:"70px 20px"}}>
                <Typography
                    variant="h6"
                >
                  Sign In
                </Typography>
                <TextField 
                  label="email or phone"
                  variant = "outlined"
                  />
                <TextField 
                  label="password"
                  variant = "outlined"
                  type="password"
                  />
                <Button
                  variant ="contained"
                >
                  Next
                </Button>

              </Stack>
          </>
        )} 
         {activeTabId === 1 && (
          <SignUp/>
        )} 
      </Grid>
    </Grid>
    </div>
  )
}

export default Login