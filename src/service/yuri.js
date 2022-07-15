import axios from 'axios'

//make request  
export const makeRequest = async () => {
        const response = await axios.get("http://universities.hipolabs.com/search?country=United+Kingdom").then((responses) => {
            const datas = responses.data.map((data) => {
                const Name = data.name;
                const domain = data.domains.map((domainName) => {
                    return domainName;
                })
                const webPages = data.web_pages.map((webPage) => {
                    return webPage;
                })
                const country = data.country;
                
                const dataUser = {
                    name: Name,
                    domainName : domain,
                    webPageName : webPages,
                    countryName : country,
                }
                return dataUser;
            })
            return [datas];
        });
        return response;
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