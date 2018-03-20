export default (counter = 0, action) => {
  const {type} = action;
  return type === 'INCREMENT' ? counter + 1 : counter;
}