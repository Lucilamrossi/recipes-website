import React from "react";
import { BrowserRouter, Route,  Switch} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import FirstPage from './components/FirstPage/FirstPage';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetail/RecipeDetail';
import CreationRecipe from './components/CreationRecipe/CreationRecipe';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/app' component={NavBar} />
            <Switch>
              <Route exact path="/" component={FirstPage} />
              <Route exact path="/app/home" component={Home} />
              <Route exact path="/app/recipe/:idRecipe" render={({match}) => 
                <RecipeDetails match={match}/>} />
              <Route exact path="/app/createRecipe" component={CreationRecipe} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;