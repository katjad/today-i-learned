// fetch could be broken out into an api.js file with a getTilData function that returns json data

const convertToJson = (response) => response.json()

const formatData = (json) => {
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
  }).reverse()
    return formattedFeed
}

const getTodayILearnedData = (spreadsheetUrl) => {
  return fetch(spreadsheetUrl)
    .then(convertToJson)
    .then(formatData)
}

export default getTodayILearnedData