import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Main from './components/Main';
function App() {

  return (
    <Router>
    <div className="App">
   
      <Routes>
    <Route path="/" element={<Main />}/>
  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
