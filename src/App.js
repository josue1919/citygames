import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/index.jsx';
import Login from './containers/login/index.jsx';
import Header from './components/Header/index.jsx';
import FormularioEx from './containers/AddGame/index.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {db} from './firebase/init';

function App() {

  // const docRef = db.collection('users').doc('alovelace');

  //    docRef.set({
  //     first: 'Ada',
  //     last: 'Lovelace',
  //     born: 1815
  //   });

  return (
    
    <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/addgame" component={FormularioEx}/>
  
    </Router>
  
  );
}

export default App;
