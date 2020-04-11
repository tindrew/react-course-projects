console.log('app.js is running');

// create app object title/subtitle
// user title/suptitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exist - logical add operator
// render new p tag = if options.length > 0 "Here are your options" " No options"

const app = {
    title: 'The Indecision App',
    subTitle: 'Where indecision goes to die',
    options: ['One', 'Two']
};

// // JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  console.log('minusOne');
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();  
}

const appRoot = document.getElementById('app');
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} >+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();