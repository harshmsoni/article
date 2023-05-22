import React from 'react'
import SearchBox from './SearchBox'
import Container from './Container'
import { useSelector } from 'react-redux'
const ParentContainer = () => {
 const Data=useSelector((e)=>e.ProductReducer);
  return (
    <div className='parent'>
        <nav>
        { Data.search.length?<h3>search results for: {Data.search}</h3>:<h3>All articles</h3>}
        <SearchBox/>
        </nav>
        <Container/>
    </div>
  )
}

export default ParentContainer