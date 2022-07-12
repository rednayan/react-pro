import React from 'react'
import {useState} from 'react'
import { Typography,TextField,Stack,Button,Link} from '@mui/material'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function SignUp() {
  const [emailError,setEmailError] = useState(false);
  const [email,setEmail] = useState('');
  const [emailErrorText,setEmailErrorText] = useState('');
  const [passwordErrorText,setPasswordErrorText] = useState('');
  const [passwordError,setPasswordError] = useState(false);
  const [confirmPassword,setConfirmPassword] = useState('');
  const [confirmPasswordError,setConfirmPasswordError] = useState(false);
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [firstNameError,setFirstNameError] = useState(false);
  const [lastNameError,setlastNameError] = useState(false);

  function checkEmailError ()  {
    if(!email.toLowerCase().match(EMAIL_REGEX) ){
        setEmailError(true)
        setEmailErrorText("invalid mail")
    }else{
        setEmailError(false)
        setEmailErrorText("")
    }
}
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
    checkEmailError();
}

function checkPasswordError () {
  if(!password.match(PWD_REGEX)){
      setPasswordError(true);
      setPasswordErrorText("minimum 8 letters,1 number,1 special character")
  }
  else{
      setPasswordError(false);
      setPasswordErrorText("")
  }
}

const handleConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
  checkConfirmError();
}

function checkConfirmError() {
  if(confirmPassword !== password){
    setConfirmPasswordError(true);
  }
  else setConfirmPasswordError(false)
}

const handlePasswordChange = (e) =>{
  setPassword(e.target.value);
  checkPasswordError();
}
const handleFirstName = (e) => {
  setFirstName(e.target.value);
} 

const handleLastNAme = (e) => {
  setLastName(e.target.value);
} 
const handleSubmit = () => {
    if(!emailError && email !=="" && !passwordError && password !== "")
      console.log('submit');
    else{
        setEmailError(true);
        setPasswordError(true);
        console.log('error');
    }
    if(email === "")
        setEmailErrorText("empty field");
    else
        setEmailErrorText("");
    if(password === "")
        setPasswordErrorText("empty field")
    else
        setPasswordErrorText("");
    if(firstName === "")
      setFirstNameError("empty field")
      else
      setFirstNameError("")
    if(lastName === "")
      setlastNameError("empty field")
    else
      setlastNameError("")
}

  return (
            <form> 
              <Stack spacing={2} sx={{margin:"20px"}}>
                  <Typography
                      variant="h6"
                  >
                    Create Your Account
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <TextField
                      error = {firstNameError}
                      label="First Name"
                      variant = "outlined"
                      onChange = {handleFirstName}
                      helperText = {firstNameError}
                      sx={{width:"100%"}}
                      />
                    <TextField 
                      error = {lastNameError}
                      label="Last Name"
                      variant = "outlined"
                      onChange = {handleLastNAme}
                      helperText = {lastNameError}
                      sx={{width:"100%"}}
                      />
                  </Stack>
                  <TextField 
                    error = {emailError}
                    value = {email}
                    label="email"
                    variant = "outlined"
                    onChange = {handleEmailChange}
                    autoComplete='user'
                    helperText = {emailErrorText}
                    />
                    <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <TextField 
                      error = {passwordError}
                      value = {password}
                      label="password"
                      variant = "outlined"
                      type="password"
                      onChange = {handlePasswordChange}
                      autoComplete='current-password'
                      helperText = {passwordErrorText}
                      sx={{width:"100%"}}
                      />
                    <TextField 
                      error = {confirmPasswordError}
                      onChange = {handleConfirmPassword}
                      label="confirm"
                      variant = "outlined"
                      type="password"
                      sx={{width:"100%"}}
                      autoComplete='current-password'
                      />
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" spacing={1}> 
                  <Link
                      component="button"
                    >
                    sign-in instead
                  </Link>
                  <Button
                    variant ="contained"
                    onClick = {handleSubmit}
                    >
                    Next
                  </Button>
                  </Stack>

                </Stack>
              </form>

  )
}

export default SignUp