import { BASE_URL } from "./baseurl"

import {commonAPI} from "./commonAPI"



// login api
export const loginAPI=async(user)=>{
    console.log('user',user)
    return await commonAPI('POST',`${BASE_URL}/lab/login/`,user,"")
}

export const addpackageAPI=async(reqbody,reqheader)=>{
    return await commonAPI(`POST`,`${BASE_URL}/lab/package/`,reqbody,reqheader)
}     


