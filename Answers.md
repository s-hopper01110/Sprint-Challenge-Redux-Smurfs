 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 Store: a JS object that contains the state of the app. 
 Reducers: Accepts the previous state  and are pure functions 
 Actions: Returns the next state of the app 


 What is the difference between Application state and Component state? When would be a good time to use one over the other? Component state is local vs. application state is global.



 Describe redux-thunk, what does it allow us to do? Is a middleware that is used to handle async actions in redux and also helps with larger projects.  
 
 How does it change our action-creators?If it an action creator returning  function instead of an object it executes the returning function. 
