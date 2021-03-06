console.log('app.js is running');

// create app object title/subtitle
// user title/suptitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exist - logical add operator
// render new p tag = if options.length > 0 "Here are your options" " No options"

const app = {
    title: 'The Indecision App',
    subTitle: 'Where indecision goes to die',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

};
// // JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <p>{app.options.length}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
    </form>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);