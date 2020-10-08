console.log('App.js is running!')

// JSX - Javascript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
};

const appRoot = document.getElementById('app');

const reset = () => {
    app.options.length = 0; 
    render();
};

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button onClick={reset}>Remove All</button>
        <ol>
          <li>Item One</li>
          <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();







ReactDOM.render(template, appRoot);