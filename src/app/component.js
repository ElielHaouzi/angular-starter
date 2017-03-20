export default (text = 'Hello world1') => {
  const element = document.createElement('div');

  // for (const i of [1, 2, 3]) {
  //   console.log(i);
  // }

  element.innerHTML = text;

  return element;
};
