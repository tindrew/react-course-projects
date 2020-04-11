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

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  console.log('form submitted');
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
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add Option'
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
