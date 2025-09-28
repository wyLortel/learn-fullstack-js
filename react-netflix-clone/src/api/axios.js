import axios from "axios";

const instance = axios.create({
    baseURL:"http://api.themoviedb.org/3",
    params : {
        api_key : "dde80ef53231b44209475dec2cf1af6b",
        language : "ko-KR",
    },
});


export default instance;