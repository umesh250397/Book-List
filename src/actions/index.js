export function selectBook(book) {
  //selectBook is an ActionCreator , it needs to return an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  //type is mostly uppercase a string value here can also be a number
}
