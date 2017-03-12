/* 
  getTodayILearnedData takes the Google spreadsheet url as it's parameter and 
  returns a promise of the data, formatted into a usable object
*/

const convertToJson = (response) => response.json()

const formatData = (json) => {
  const formattedFeed = json.feed.entry.map(wotILearned => { 

    const id = wotILearned.id.$t.substr(wotILearned.id.$t.lastIndexOf('/') + 1)

    return {
      id: id, // used for the line item key values
      description: wotILearned.gsx$description.$t,
      summary: wotILearned.gsx$tilsummary.$t,
      links: wotILearned.gsx$usefullinks.$t.split(', '), // array of urls
      date: wotILearned.gsx$timestamp.$t.split(' ')[0], // date only, no time.
      name: wotILearned.gsx$name.$t,
      email: wotILearned.gsx$emailaddress.$t,
      awesomeness: wotILearned.gsx$howawesomedoyoufeel.$t,
      isExpanded: false // used to toggle expand/hide each wotILearned item
    }
  }).reverse()
    return formattedFeed
}

const getTodayILearnedData = (spreadsheetUrl) => {
  return fetch(spreadsheetUrl)
    .then(convertToJson)
    .then(formatData)
}

export default getTodayILearnedData