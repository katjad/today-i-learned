import React from 'react'

const WotILearned = ({item}) => {
   
  const getUrlDomain = (url) => {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
  }
  
  // prep the links into real a-tags
  const urls = item.links.map(url => {
    
    const shortenedUrl = getUrlDomain(url)

    return (
      <div>
        <a href={url} target="_blank">{shortenedUrl}</a>
        <br/>
      </div>
    )
  })
  

  return (
    
    <div className="row">
      
        <h2>{item.summary}</h2>
        <h4>How awesome do I feel having learnt this? (1-5): {item.awesomeness}</h4>
    
        {item.description}<br/><br/>
        {urls}<br />
        {item.name} | {item.date}

    </div>
  )   
}

export default WotILearned