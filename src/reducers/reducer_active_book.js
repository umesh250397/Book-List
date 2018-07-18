//State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) { //state = null : if argument is ubdefined set it ot null
  switch (action.type) {
    case 'BOOK_SELECTED':
      //never return a mutated state here like state.title = book.title; return State; don't do this
      return action.payload;
  }
  return state
}
