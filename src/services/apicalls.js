import axios from 'axios'
import {data}from './api.js'

//fetch data for images and user-----------------
export const fetchData=async (payload)=>{
    try{
       
        const response=await axios({
            url:data.FETCH_DATA,
            params:payload
        })
        return response
    }catch(e){
        console.log('error',e)
    }
}


