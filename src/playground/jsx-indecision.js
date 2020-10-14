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

//Remove items from app.options.length array
const removeAll = () => {
    app.options.length = 0; 
    render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
          {
              app.options.map((option) => {
                return <li key={option}>{option}</li>
              })
          }
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