import {LOGIN_START , LOGIN_SUCCESS , LOGIN_FAIL ,  LOG_OUT} from "../actionTypes"
import axios from "axios"

export const getChannelDetails = (id) => async (dispatch) =>{
    dispatch({
        type:LOGIN_START
    })
    try{
       const res = await axios("/channels" , {
          params:{
             part:"snippet,statistics,contentDetails",
             id:id
          }
       })
    
        dispatch({
           type:LOGIN_SUCCESS,
        //    payload:data.items[0],
    
        }) 
    }
    catch(error){
        dispatch({
           type:LOGIN_FAIL,
        //    payload:error.response.data,
        })
    }
}

