import './App.css';
import {Router} from '@reach/router';
import ListAll from './components/ListAll';
import Details from './components/Details';
import Edit from './components/Edit';
import New from './components/New';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <ListAll path = "/pets" />
        <Details path = "/pets/:id" />
        <Edit path = "/pets/:id/edit" />
        <New path ="pets/new" />
      </Router>
    </div>
  );
}

export default App;
