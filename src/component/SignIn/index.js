import {useEffect, useState} from 'react';
import {Typography,Stack,Button,TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab'
import { userLogin } from '../../service/yuri';
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignIn = () => {
    const [emailError,setEmailError] = useState(false);
    const [email,setEmail] = useState('');
    const [emailErrorText,setEmailErrorText] = useState('');
    const [passwordErrorText,setPasswordErrorText] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    

    function checkEmailError ()  {
        if(!email.toLowerCase().match(EMAIL_REGEX)){
            setEmailError(true)
            setEmailErrorText("invalid mail")
        }else{
            setEmailError(false)
            setEmailErrorText("")
        }
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
    
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        checkPasswordError();
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        checkEmailError();
    }


    const handleSubmit = async() =>{
        if(!emailError && email !=="" && !passwordError && password !== ""){
            console.log("submit");
            const inputs = { email, password}
            setLoading(true);
            const response  = await userLogin(inputs);;
            console.log(response);
        }
        else{
            setEmailError(true);
            setPasswordError(true);
            console.log('error');
        }
        if(email === "") setEmailErrorText("empty field");
        else setEmailErrorText("");
        if(password === "") setPasswordErrorText("empty field")
        else setPasswordErrorText("");
    }

    return (
        <form>
            <Stack spacing={2} sx={{margin:"20px"}}>
            <Typography
                variant="h6"
            >
            Sign In
            </Typography>
                <TextField 
                    error = {emailError}
                    label="email"
                    variant = "outlined"
                    onChange = {handleEmailChange}
                    autoComplete='user'
                    helperText = {emailErrorText}
                    />
                <TextField 
                    error = {passwordError}
                    label="password"
                    variant = "outlined"
                    type="password"
                    onChange = {handlePasswordChange}
                    autoComplete='current-password'
                    helperText = {passwordErrorText}
                />
            <LoadingButton
            loading ={loading}
            variant ="contained"
            onClick={handleSubmit}
            >
            Next
            </LoadingButton>
        </Stack>
      </form>
    )
}

export default SignIn;