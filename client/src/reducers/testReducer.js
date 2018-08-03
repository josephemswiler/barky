export default (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        data: action.payload
      }
    default:
      return state
  }
}
