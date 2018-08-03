export const testAction = () => dispatch => {
  dispatch({
    type: 'TEST_ACTION',
    payload: 'hello world'
  })
}
