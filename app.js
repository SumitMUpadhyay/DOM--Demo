// Similar to css

// Select the element or group of elements the you we want to affect
// Decide the effect we want to apply to the selection

// many different ways

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// assign to a variable

// const element = document.getElementById('element');
// do something

// document.querySelector('element'); // do something;

// window object
// console.log(window);

// returns a node object or a node List, which is an arrayLike object

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);
// console.log(name);
// console.log(css);

// window object = browser api
// document
// console.dir

// alert('hello');
// console.log(window);

// console.log(document);

// console.dir(document);

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

//getElementById('element')

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// const btn = document.getElementById('btn');

// document.getElementById('btn').style.backgroundColor = 'blue';

// document.getElementById('btn').style.color = 'white';

// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';

//getElementsByTagName('tagname');
//node-list = array-Like object
// index , length property but not array methods

// const headings = document.getElementsByTagName('h1');
// // console.log(headings);
// headings[0].style.color = 'red';
// console.log(headings.length);

// const items = document.getElementsByTagName('li');

// items.forEach(function (item) {
//   console.log(item);
// });

// items[2].style.color = 'orange';

// const betterItems = [...items];

// betterItems.forEach(function (item) {
//   // console.log(item);
// });

// console.log(items);
// console.log(betterItems);

//getElementsByClassName('classname');

//node-List = array-Like object
// index,length property but not array methods

// const listItems = document.getElementsByClassName('special');
// console.log(listItems);
// listItems[1].style.color = 'blue';

// select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css')- selects all

// const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';

// const item = document.querySelector('.special');
// // console.log(item);

// const lastItem = document.querySelector('li:last-child');
// // console.log(lastItem);

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = 'yellow';
// });

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

//childNodes - returns all childNodes including whitespaces which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');

const allChildren = result.childNodes;
// console.log(allChildren);
const children = result.children;
console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);
