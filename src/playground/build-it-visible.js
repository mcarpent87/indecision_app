class VisibilityToggle extends React.Component {
//constructor
  constructor(props){
      super(props);
  }

//handle toggle visibility
  handleToggleVisibility () {
      this.setState((prevState) => {
          return {
              visibility = false
          };
      })
  }
//render
  render() {
      return (
        <div>
            <h1>Visibility Toggle</h1>
                <button onClick={toggleVisibility}>
                    {visibility ? 'Hide details' : 'Show details'}
                </button>
                {visibility && (
            <div>
                <p>Hey. These are some details you can now see!</p>
            </div>
            )}
        </div>
      );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
    
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
