import './App.css';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'

import store from './redux/store';
import Dashboard from './pages/Dashboard';
import Project from './pages/project';
import ChartPage from './pages/ChartData';
import PdfReport from './pages/PdfReport';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from './components/Button';


function App() {
  const history = useHistory()

  const clickHandler = () => {
    history.push("/dashboard")
  }
  return (
    <Router>
    <Provider store={store}>  
      
        <div className="App">
             
            <Switch>
              <Route exact path='/'>
                <div className='links'>
                  <Link to="/dashboard"><Button className="button" text="Dashboard"/></Link>
                  <Link to="/report/allprojectbudgetplot"><Button className="button" text="Budget Plot"/> </Link>
                  <Link to="/report/pdfreport"><Button className="button" text="PDF Report"/></Link>
                </div>
              </Route>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/project/:projectId" component={Project} />
              <Route exact path="/report/allprojectbudgetplot" component={ChartPage} />
              <Route exact path="/report/pdfreport" component={PdfReport} />
            </Switch>
          
        </div>
      
    </Provider>
    </Router>
  );
}

export default App;
