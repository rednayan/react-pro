import React, {useState} from 'react'
import { Grid, Tabs, Tab , Button} from '@mui/material'
import backgroundImg from "../../assets/backgroundImg.jpg"
import SignUp from '../../component/SignUp';
import SignIn from '../../component/SignIn';
const Login = () => {
  const [activeTabId,setActiveTabId] = useState(0);
  return ( 
    <div> 
          <Grid container>
            <Grid item xs={7} sx = {{backgroundImage:`url(${backgroundImg})`,backgroundRepeat:"no-repeat",height:"94vh"}}>
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