import axios from "axios"

const instance = axios.create({
    baseURL: 
        'https://us-central1-clone-124e6.cloudfunctions.net/api'
        //'http://localhost:5001/clone-124e6/us-central1/api' 
        // API (cloud function) url
})

export default instance;