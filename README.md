Today I learned
================

Page that displays output from the [Today I Learned form](https://docs.google.com/forms/d/e/1FAIpQLSd74V7F_lA8MH3StsQXPki8xUSYRWb_msG6pB3ejNdnUFzPqg/viewform). Tim and Katya have access to the main form and accompanying spreadsheet that it spits into, though think it's actually owned by Dave Thompson.

This is a basic React app, using functional stateless dumb components and smart class-based components with state.

The App pulls data from the spreadsheet via fetch, pushes the data to state, and the child components are rendered via the state being passed in to teh children as props. 

The data is displayed in reverse date order, newest at the top.


## App structure

main (renders App)
  App
    Table (state stored here)
      WotILearned (renders each entry as a card)
        
