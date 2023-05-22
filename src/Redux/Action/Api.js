import axios from "axios";
import { ALL, single } from ".";

export const getProduct=async(url,dispatch)=>{
    dispatch(ALL("Loading"));
    try{
        const res=await axios.get(url);
        var products= await res.data.data
        dispatch(ALL("Api_Data",products))
    }
    catch(error){
        dispatch(ALL("Api_Error"));
    }
}

export const getSingleProduct=async(url,dispatch)=>{
    dispatch(single("singleDisplayT"))
    dispatch(single("singleLoading"));
    try{
        const res=await axios.get(url);
        var products= await res.data.blog
        console.log(products)
        dispatch(single("single_Product",products))
    }
    catch(error){
        dispatch(single("single_Error"));
    }
}
