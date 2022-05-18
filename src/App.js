import './App.css';
import header from './header';

function App ()
{
  const name = 'DrupalReactor'
  const x = 'false'

  return (
    <div className="App">
      <h1>Drupal 9 React.js App</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quasi, maiores laudantium dolorum delectus minus repellat, nihil ex saepe exercitationem ipsam fuga qui alias vero.</h2>
      <h3>Hello, {name ? 'Yes' : 'No'} </h3>
    </div>
  );
}

export default App;
