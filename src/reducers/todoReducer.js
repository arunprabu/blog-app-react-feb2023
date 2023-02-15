// reducer must return state 
const todoReducer = ( state = [], action ) => {
  // action is an object
    // it must have type 
    // it can also have payload 

  switch (action.type) {
    case "ADD_TODO": // Create
      return [...state, action.payload];

    case "GET_TODOS": // Read
      return action.payload;

    default:
      return state;
  }
    
  
}
export default todoReducer;