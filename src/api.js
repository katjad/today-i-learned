// fetch could be broken out into an api.js file with a getTilData function that returns json data

const getTodayILearnedData = (spreadsheetUrl) => {
  fetch(spreadsheetUrl)
    .then((response) => { // es5 use arrow function instead
      return response.json()
        .then(json => {
          console.log('Raw JSON feed from api.js: ', json.feed.entry)
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
          console.log('Nicely formatted data model from api.js: ', formattedFeed)

        })
    })
  // how do i get the bloody thing to return formattedFeed here???? grrrr.

}

export default getTodayILearnedData