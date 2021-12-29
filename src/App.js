import { Route, Switch } from 'react-router-dom';
import HomepageLayout from './layouts/HomepageLayout'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'

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
         <Route exact path="/about" render={() => (
         <HomepageLayout>
         <About/>
         </HomepageLayout>
        )}
        /> 

     </Switch>
    </div>
  );
}

export default App;
