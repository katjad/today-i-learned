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
      dataSource: [],
      searchFieldText: ''
    }
    // this.handleExpandedToggle = this.handleExpandedToggle.bind(this)   // Note, don't need this if using Babel stage-0 and ES7 style function (see handleExpandedToggle) gomix editor complains but it compiles ok.
  }
  
  handleSearchInput = (e) => {
    const searchString = e.target.value.trim().toLowerCase()
    this.setState({searchFieldText: searchString})
  }
  

  handleExpandedToggle = (id) => {
   
    const updated = this.state.dataSource.map(el => {
      if(el.id === id) {
        el.isExpanded = true
      } else {
        el.isExpanded = false
      }
      
      return el
    })
      
    this.setState({
      dataSource: updated
    })
  } 
  
  
  componentDidMount() {
    getTodayILearnedData(spreadsheetUrl).then(response => {  
      this.setState({
        dataSource: response
      })
    })
  }


  getFilteredResults = (dataSource, searchTerm) => {
    if (searchTerm) {
      return dataSource.filter(el => el.summary.toLowerCase().includes(searchTerm) 
                             || el.description.toLowerCase().includes(searchTerm)
                             || el.links.join('').toLowerCase().includes(searchTerm) )
    } else {
      return dataSource
    }
  }


  render() {
      let htmlList = this.getFilteredResults(this.state.dataSource, this.state.searchFieldText)
        .map(wotILearned => {
        return <WotILearned key={wotILearned.id} item={wotILearned} onHandleClick={this.handleExpandedToggle} />
      })
      
      let displayErrMsg = this.state.dataSource.length > 0 && htmlList.length === 0  // there is a database of data in state and search returned no results
    
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