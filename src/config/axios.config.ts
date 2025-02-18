import axios from "axios";


const getToken = ()=> localStorage.getItem('nairaLender');


const userAxios = axios.create({
    baseURL: "https://nairalender.up.railway.app"
});

userAxios.interceptors.request.use((config)=>{
    const token = getToken();
    if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
},
    (error)=> Promise.reject(error)
);


export default userAxios;