import React from 'react'

import { Typography,TextField,Stack,Button} from '@mui/material'

function SignUp() {
  return (

            <Stack spacing={2} sx={{margin:"70px 20px"}}>
                <Typography
                    variant="h6"
                >
                  Create Your Account
                </Typography>
                <Stack direction="row" justifyContent="space-between" spacing={1}>
                  <TextField 
                    label="First Name"
                    variant = "outlined"
                    sx={{width:"100%"}}
                    />
                  <TextField 
                    label="Last Name"
                    variant = "outlined"
                    sx={{width:"100%"}}
                    />
                </Stack>
                <TextField 
                    label="email address"
                    variant = "outlined"
                    />
                  <Stack direction="row" justifyContent="space-between" spacing={1}>
                  <TextField 
                    label="password"
                    variant = "outlined"
                    type="password"
                    sx={{width:"100%"}}
                    />
                  <TextField 
                    label="confirm"
                    variant = "outlined"
                    type="password"
                    sx={{width:"100%"}}
                    />
                </Stack>
                <Stack direction="row" justifyContent="space-between" spacing={1}> 
                <Button
                  variant ="text"
                  >
                  Sign in instead
                </Button>
                <Button
                  variant ="contained"
                  >
                  Next
                </Button>
                </Stack>

              </Stack>

  )
}

export default SignUp