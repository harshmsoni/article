import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProduct, getSingleProduct } from '../Redux/Action/Api';
import { useDispatch } from "react-redux";
import SingleProduct from './SingleProduct';
const Container = () => {
const Api = "https://api.theinnerhour.com/v1/customers/resources/articles/list?page=1&limit=10"
const SingleApi="https://api.theinnerhour.com/v1/blogdetail/"
 const dispatch  =useDispatch();


    useEffect(()=>{getProduct(Api,dispatch)},[])
 const Data=useSelector((e)=>e.ProductReducer);
    return (
        <>
    <div className='container'>
        {
            Data.isError?<h1>No Data</h1>:
            Data.isLoading?<h1>data loading please wait</h1>
            : Data.products.map((e)=>{
                // console.log(e)
                return <div className='childContainer' style={{width: Data.products.length<=2?393:null}} key={e.id} onClick={()=>getSingleProduct(SingleApi+e.slug,dispatch)}>
                <img src={e.thumb} alt={e.title}/>
                <h3>{e.title}</h3>
                <p>{e.short_description}</p>
            </div>
            
        }  )
    }
       
    </div>
       {Data.singleDisplay?<SingleProduct/>:null}
       </>
  )
}

export default Container