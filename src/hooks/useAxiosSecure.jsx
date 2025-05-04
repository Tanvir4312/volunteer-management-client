// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const axiosSecure = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     withCredentials: true
// })

// const useAxiosSecure = () =>{
//     const navigate = useNavigate()
//     const {userLogout} = useAuth()
//     useEffect(() =>{
//         axiosSecure.interceptors.response.use(
//             res => {
//                 return res
//             },
//            async err =>{
//                 if(err.response.status === 401 || err.response.status === 403){
//                     try{
//                        await userLogout()
//                        navigate('/login')
//                     }
//                     catch(err){
//                         toast.error(err.message);
//                     } 
//                 }
//                 return Promise.reject(err);
//             }
//         )
        
//     },[navigate, userLogout])
//     return axiosSecure
// }

// export default useAxiosSecure