import axios from 'axios'

//make request
export const makeRequest = async () => {
    const URL = "http://universities.hipolabs.com/search?country=United+Kingdom";
    const response = await axios.get(URL)
    return response
}