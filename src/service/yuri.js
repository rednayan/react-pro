import axios from 'axios'

//make request
export const makeRequest = async () => {
    const URL = "http://universities.hipolabs.com/search?country=United+Kingdom";
    const response = await axios.get(URL)
    return response
}


// save user deatils to an api endpoint
export const saveUser = (user) => { //user will have all the details for a user signup
    console.log('user', user);
}

export const userSignup = ({emailId,password,firstName,lastName}) => {
    const checkEmail = "default@gmail.com";
    if(emailId === checkEmail){
        return Promise.resolve(true)
    }
    else{
        return Promise.resolve(false);
    }
}

// login user and store deatils to localstorage
export const userLogin = ({email, password}) => { 
    const checkEmail = "default@gmail.com"
    const checkPassword = "default@012"
    if(checkEmail === email && checkPassword === password)
    {
        return Promise.resolve(true)
    }else{ 
        return Promise.resolve(false)
    }
}