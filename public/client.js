/*

- Get data from spreadsheet and store in a var
    - use fetch
- Data should be in json clientInformation

Output to be displayed:

- Summary
- Description
- Links 
- Date
- Name



Our link:
https://docs.google.com/spreadsheets/d/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/pubhtml
https://docs.google.com/spreadsheets/d/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/edit?usp=sharing



https://spreadsheets.google.com/feeds/list/PUT-KEY-HERE/od6/public/values?alt=json-in-script&callback= instead of "PUT-KEY-HERE


https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/od6/public/values?alt=json-in-script&callback= 


$.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]['gsx$title']['$t']);
});


Working example: 
https://spreadsheets.google.com/feeds/list/0AtMEoZDi5-pedElCS1lrVnp0Yk1vbFdPaUlOc3F3a2c/od6/public/values?alt=json

Working example for ours:
https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/1/public/values?alt=json


*/

// https://crossorigin.me/



// fetch("https://spreadsheets.google.com/feeds/list/1g18cE7LReFyhrKhF3bR7wxF5kHrXvY2wqTr6ORxaTB0/1/public/values?alt=json")
//   .then( function(response) {
//     return response.json()
//   })
//   .then( function(json) {
//     // console.log(json) 
//     const data = json
// })
 




//   fetch('/api/items').then((response) => {
//     if(response.status !== 200) {
//       throw new Error(response.status + " " + response.statusText);
//     }
//     return response.json();
//   }).then((json) => {
//     let initialState = {"items": json};        
//     let store = createStore(rootReducer, initialState);
//     console.log(store.getState());

//     ReactDOM.render((
//         <Provider store={store}>
//             <Router history={browserHistory} routes={routes}></Router>
//         </Provider>
//     ), document.getElementById('root'))
//   });



















