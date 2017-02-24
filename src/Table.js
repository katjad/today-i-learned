import React from 'react'
import WotILearned from './WotILearned'


class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: []
    }
  }
  
  componentDidMount() {
   
    fetch('https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/1/public/values?alt=json')
    .then( function(response) {
      return response.json()
    })
    .then(json => {
      console.log(json.feed.entry)
      let formattedFeed = json.feed.entry.map(wotILearned => {
        return {
          description: wotILearned.gsx$description.$t,
          summary: wotILearned.gsx$tilsummary.$t,
          links: wotILearned.gsx$usefullinks.$t.split(', '),
          date: wotILearned.gsx$timestamp.$t.split(' ')[0],
          name: wotILearned.gsx$name.$t,
          email: wotILearned.gsx$emailaddress.$t,
          awesomeness: wotILearned.gsx$howawesomedoyoufeel.$t
        }
      })
      
      formattedFeed.reverse()

      this.setState({
        database: formattedFeed
      })
    })
  }


  render() {
      let html = this.state.database.map(wotILearned => {
        return <WotILearned item={wotILearned} />
      })
    return (
      <div id="learnings">
        {html}
      </div>
    )
  }
}







export default Table