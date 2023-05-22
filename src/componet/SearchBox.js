import React from 'react'
import { BsSearch} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { ALL } from '../Redux/Action';
const SearchBox = () => {
      const dispatch=useDispatch();
  return (
    <>
   <div>
   <input type="search"  name='search' id='search'placeholder='Search articles' onChange={(e)=>{dispatch(ALL("search",e.target.value)); console.log(e.target.value)}} />
    <label htmlFor='search' ><BsSearch/></label>
    </div>
    </> 
 )
}

export default SearchBox