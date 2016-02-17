export const addTodo = (text) => {
  console.log('addTodo text:', text)
  return {
    type: 'ADD_TODO',
    payload: {
      text
    }
  }
}
