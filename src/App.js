import { Route, Switch } from 'react-router-dom';
import HomepageLayout from './layouts/HomepageLayout'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => (
         <HomepageLayout>
         <Homepage/>
          </HomepageLayout>
        )}
        /> 
         <Route exact path="/contact" render={() => (
         <HomepageLayout>
         <Contact/>
         </HomepageLayout>
        )}
        /> 

     </Switch>
    </div>
  );
}

export default App;
