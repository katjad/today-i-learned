// a single row in the Table

import React from 'react'

const WotILearned = ({item, onHandleClick}) => {
   
  const getUrlDomain = (url) => {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
  }
  
  // prep the links into real a-tags  
  const urls = item.links.map(url => {
    const hasLinks = item.links[0] !== ""
    if (hasLinks) {
      const shortenedUrl = getUrlDomain(url)

      return (
        <div>
          <a href={url} target="_blank">{shortenedUrl}</a>
          <br/>
        </div>
      )
    } 
  })
  
  
  let expanded = item.isExpanded

  const buildRow = (expanded) => {

    if(expanded){
      
      return (
        <div>
          <h4>How awesome do I feel having learnt this? (1-5): {item.awesomeness}</h4>
         {item.description}<br/><br/>
         {urls} <br />
         {item.name} | {item.date}    
        </div>
      )  
    }
  }
  
  let row = buildRow(expanded)
   

  return (    
    <div className="row" onClick={() => onHandleClick(item.id)}>       
      <h2>{item.summary}</h2>
      {row}
    </div>
  )   
}

export default WotILearned