/*

Stores state for the Table and renders the Search and rows

*/

import React from 'react'
import WotILearned from './WotILearned'
import Search from './Search'
import getTodayILearnedData from './api'

const spreadsheetUrl = 'https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/1/public/values?alt=json'


class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: [],
      searchFieldText: ''
    }
    // this.handleExpandedToggle = this.handleExpandedToggle.bind(this)   // Note, don't need this if using Babel stage-0 and ES7 style function (see handleExpandedToggle) gomix editor complains but it compiles ok.
  }
  
  handleSearchInput = (e) => {
    const searchString = e.target.value.trim().toLowerCase()
    this.setState({searchFieldText: searchString})
  }
  

  handleExpandedToggle = (id) => {
   
    const updated = this.state.database.map(el => {
      if(el.id === id) {
        el.isExpanded = true
      } else {
        el.isExpanded = false
      }
      
      return el
    })
      
    this.setState({
      database: updated
    })
  } 
  
  
  componentDidMount() {
    // const data = getTodayILearnedData(spreadsheetUrl)  // DOES THIS NEED TO BE A PROMISE
    // console.log('data: ', data)
    fetch(spreadsheetUrl) // could define url as const URL at top of page
      .then(function (response) { // es5 use arrow function instead
        return response.json()
      })
      .then(json => {
        console.log('Raw JSON feed: ', json.feed.entry)
        let formattedFeed = json.feed.entry.map(wotILearned => { // if the let is not going to change use const instead

          let id = wotILearned.id.$t.substr(wotILearned.id.$t.lastIndexOf('/') + 1)

          return {
            id: id, // used for the line item key values
            description: wotILearned.gsx$description.$t,
            summary: wotILearned.gsx$tilsummary.$t,
            links: wotILearned.gsx$usefullinks.$t.split(', '), // array of urls
            date: wotILearned.gsx$timestamp.$t.split(' ')[0], // date only, no time.
            name: wotILearned.gsx$name.$t,
            email: wotILearned.gsx$emailaddress.$t,
            awesomeness: wotILearned.gsx$howawesomedoyoufeel.$t,
            isExpanded: false // used to expand/hide each wotILearned item
          }
        })

        formattedFeed.reverse()
        console.log('Nicely formatted data model from Table.js: ', formattedFeed)

        this.setState({
          database: formattedFeed
          
        })
      })
  }


  getFilteredResults = (database, searchTerm) => {
    if (searchTerm) {
      return database.filter(el => el.summary.toLowerCase().includes(searchTerm) 
                             || el.description.toLowerCase().includes(searchTerm)
                             || el.links.join('').toLowerCase().includes(searchTerm) )
    } else {
      return database
    }
  }


  render() {
      let htmlList = this.getFilteredResults(this.state.database, this.state.searchFieldText)
        .map(wotILearned => {
        return <WotILearned key={wotILearned.id} item={wotILearned} onHandleClick={this.handleExpandedToggle} />
      })
      
      let displayErrMsg = this.state.database.length > 0 && htmlList.length === 0  // there is a database of data in state and search returned no results
    
    return (
      <div id="learnings">
      <Search searchValue={this.state.searchFieldText} onSearchChange={this.handleSearchInput}/>
      {htmlList}
      { displayErrMsg && 'Search term not found'}
      </div>
    )
  }
}


export default Table