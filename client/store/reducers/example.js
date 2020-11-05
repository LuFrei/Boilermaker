//TYPES
const SET_EXAMPLE = "SET_EXAMPLE";

//ACTIONS/THUNKS
export const setExample = (newExample) => ({
  type: SET_EXAMPLE,
  newExample
})

//REDUCER
const example = (example = {}, action) => {
  switch(action.type){
    case SET_EXAMPLE:
      return action.newExample;
    default:
      return example;
  }
}

export default example;