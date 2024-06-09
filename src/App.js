import logo from './logo.svg';
import './App.css';
import ListArticle from './Components/ListArticle';

const fakeData = [
  { name : 'Margueritas', price : '30'},
  { name : '4 Fromages', price : '32'},
  { name : 'Pamplemousse'},
  { name : '4 Saisons', price : '58'}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut la mif!! sa marche bordel tjrs.
          <ListArticle articles={fakeData}/>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
