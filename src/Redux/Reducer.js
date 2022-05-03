
import { LOGIN } from "./actiontype"
 export const GitReducer = (



    state = {
        // isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  access_token: JSON.parse(localStorage.getItem("access_token")) || null,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  // proxy_url: 'https://github.com/login/oauth/access_token'
  // access_token:""
       
       
    },
    action
 ) => {
    const { payload, type } = action
  
    switch (type) {
       
       case LOGIN:
        
            localStorage.setItem("isLoggedIn", JSON.stringify(payload.isLoggedIn))
             localStorage.setItem("access_token", JSON.stringify(payload.access_token))
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
        access_token: payload.access_token
      };
          
   
          default:
            return state
          }
        }