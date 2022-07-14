// save user deatils to an api endpoint
export const saveUser = (user) => { //user will have all the details for a user signup
    console.log('user', user);
}

// login user and store deatils to localstorage
export const userLogin = ({email, password}) => { 
    const checkEmail = "default@gmail.com"
    const checkPassword = "default@012"
    if(checkEmail === email && checkPassword === password)
        return true;
    else return false;
}