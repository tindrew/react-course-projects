'use strict';

console.log('app.js is running');

// create app object title/subtitle
// user title/suptitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exist - logical add operator
// render new p tag = if options.length > 0 "Here are your options" " No options"

var app = {
  title: 'The Indecision App',
  subTitle: 'Where indecision goes to die',
  options: ['One', 'Two']
};

// // JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  console.log('minusOne');
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
