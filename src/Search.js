/*  Search

Dumb component, renders the search bar.

*/

import React from 'react'

const Search = (props) => {

  return (    
    <div className="row" >       
      Search: <input value={props.searchFieldText} onChange={props.onSearchChange} placeholder='Search here'/> Click a line item to expand.
    </div>
  )   
}

export default Search