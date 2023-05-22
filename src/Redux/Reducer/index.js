const initialState={
    isLoading:false,
    isError:false,
    AllProducts:[],
    products:[],
    singleDisplay:false,
    singleLoading:false,
    singleProduct:{},
    search:""
}

const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Loading":
            return {
                ...state,
                isLoading:true
            }
        case "Api_Data":
            return {
                ...state,
                isLoading:false,
                AllProducts:action.payload,
                products:action.payload
            }
        case "Api_Error":
            return {
                ...state,
                isError:true
            }
            case "singleDisplayT":
                return {
                    ...state,
                    singleDisplay:true
                }
                case "singleDisplayF":
                return {
                    ...state,
                    singleDisplay:false
                }
                case "singleLoading":
                    return {
                        ...state,
                        singleLoading:true
                    }
                case "single_Product":
                    return{
                        ...state,
                        singleLoading:false,
                       
                        singleProduct:action.payload
                    }
                    case "single_Error":
                        return {
                            ...state,
                            singleError:true
                        }
                case "search":
                   let ans= state.AllProducts.filter((ele)=>{
                    let val=action.payload.toLowerCase()
                    val=val.trim();
                    val= ele.title.toLowerCase().search(val);
                   if(val===-1)
                    return false;
                    return true;})
                  
                    if(ans.length===0)
                   return{
                    ...state,
                    search:action.payload,
                    isError:true
                   }
                   
                   return {
                        ...state,
                        search:action.payload,
                        products:ans,
                        isError:false
                    }   
             default :return state
    }
}

export default ProductReducer