import React, { useEffect , useRef} from 'react'
import {useState} from 'react'
import { userSignup } from '../../service/yuri';
import { Typography,TextField,Stack,Button,Link} from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const NAME_REGEX = /^[A-Za-z]+$/;

function SignUp() {
  const [emailError,setEmailError] = useState(false);
  const email = useRef();
  const [emailErrorText,setEmailErrorText] = useState('');
  const [passwordErrorText,setPasswordErrorText] = useState('');
  const [passwordError,setPasswordError] = useState(false);
  const confirmPassword = useRef();
  const [confirmPasswordError,setConfirmPasswordError] = useState(false);
  const password = useRef();
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [firstNameError,setFirstNameError] = useState(false);
  const [lastNameError,setlastNameError] = useState(false);
  const [lastNameErrorText,setLastNameErrorText] = useState('');
  const [firstNameErrorText,setFirstNameErrorText] = useState('');
  const navigate = useNavigate();
  const {signup} = useAuth();


  function checkEmailError ()  {
    if(!email.current.toLowerCase().match(EMAIL_REGEX) ){
        setEmailError(true)
        setEmailErrorText("invalid mail")
    }else{
        setEmailError(false);
        setEmailErrorText("");
    }
}

  function checkFirstNameError(){
    if(!firstName.match(NAME_REGEX)){
      setFirstNameError(true);
      setFirstNameErrorText('only letters allowed');
    }else{
      setFirstNameError(false);
      setFirstNameErrorText('');
    }
  }

  function checkLastNameError(){
    if(!lastName.match(NAME_REGEX)){
      setlastNameError(true);
      setLastNameErrorText('only letters allowed');
    }else{
      setlastNameError(false);
      setLastNameErrorText('');
    }
  }


  const handleEmailChange = (e) =>{
    email.current = e.target.value
    checkEmailError();
}

function checkPasswordError () {
  if(!password.current.match(PWD_REGEX)){
      setPasswordError(true);
      setPasswordErrorText("minimum 8 letters,1 number,1 special character")
  }
  else{
      setPasswordError(false);
      setPasswordErrorText("")
  }
}

const handleConfirmPassword = (e) => {
  confirmPassword.current = e.target.value;
  checkConfirmError();
}

function checkConfirmError() {
  if(confirmPassword.current !== password.current){
    setConfirmPasswordError(true);
  }
  else setConfirmPasswordError(false)
}

const handlePasswordChange = (e) =>{
  password.current = e.target.value
    checkPasswordError();
}
const handleFirstName = (e) => {
  setFirstName(e.target.value);
  checkFirstNameError();
} 

const handleLastName = (e) => {
  setLastName(e.target.value);
  checkLastNameError();
}



const handleSubmit = async (e) => {
    e.preventDefault();
    if(!emailError && email.current !=="" && !passwordError && password.current !== "")
    {
      setEmailError(false);
      setPasswordError(false);
    }
    else{
        setEmailError(true);
        setPasswordError(true);
        console.log('error');
    }

    if(email.current === "")
        setEmailErrorText("empty field");
    else
        setEmailErrorText("");
    if(password.current === "")
        setPasswordErrorText("empty field")
    else
        setPasswordErrorText("");
    if(firstName === ""){
      setFirstNameError(true);
      setFirstNameErrorText("empty field")
    }
    else{
      setFirstNameError(false);
      setFirstNameErrorText("")
    }
    if(lastName === ""){
      setlastNameError(true);
      setLastNameErrorText("empty field")
    }
    else{
      setlastNameError(false);
      setLastNameErrorText("")
    }

    await signup(email.current,password.current)
    navigate('/');
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
                      helperText = {firstNameErrorText}
                      sx={{width:"100%"}}
                      />
                    <TextField 
                      error = {lastNameError}
                      label="Last Name"
                      variant = "outlined"
                      onChange = {handleLastName}
                      helperText = {lastNameErrorText}
                      sx={{width:"100%"}}
                      />
                  </Stack>
                  <TextField 
                    error = {emailError}
                    label="email"
                    variant = "outlined"
                    onChange = {handleEmailChange}
                    autoComplete='user'
                    helperText = {emailErrorText}
                    />
                    <Stack direction="row" justifyContent="space-between" spacing={1}>
                    <TextField 
                      error = {passwordError}
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