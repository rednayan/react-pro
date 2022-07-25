import {useEffect, useState , useCallback , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {Typography,Stack,TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab'
import { useAuth } from '../../contexts/AuthContext';
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const SignIn = () => {
    const [emailError,setEmailError] = useState(false);
    const email = useRef();
    const password = useRef();
    const [emailErrorText,setEmailErrorText] = useState('');
    const [passwordErrorText,setPasswordErrorText] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate  = useNavigate();
    const {login,currentUser} = useAuth();
    

    function checkEmailError ()  {
        if(!email.current.toLowerCase().match(EMAIL_REGEX)){
            setEmailError(true)
            setEmailErrorText("invalid mail")
        }else{
            setEmailError(false)
            setEmailErrorText("")
        }
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
    
    const handlePasswordChange = (e) =>{
        password.current = e.target.value;
        checkPasswordError();
    }
    const handleEmailChange = (e) =>{
        email.current = e.target.value;
        checkEmailError();
    }

    const handleSubmit = async() =>{
        if(!emailError && email.current !=="" && !passwordError && password.current !== ""){
                const inputs = {email, password}
                setLoading(true);
                await login(email.current,password.current).catch((error)=>alert(error.code));
                setLoading(false);
                navigate("/blogs")
        }
        else{
            setEmailError(true);
            setPasswordError(true);
            console.log('error');
        }

        if(email.current === "") setEmailErrorText("empty field");
        else setEmailErrorText("");
        if(password.current === "") setPasswordErrorText("empty field")
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