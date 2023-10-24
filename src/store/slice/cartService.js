import axios from "axios";

const API_url="/api/user";

const register=async(userData)=>{
const response=await axios.post(API_url+"/register",userData)
// console.log(response.data);
localStorage.setItem("user",JSON.stringify(response.data))
return response.data
}
const cartService={
    register,
}

export default cartService