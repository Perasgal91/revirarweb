import logo from './images/svg.svg';
import './App.css';
import HomePageComponent from "./Components/HomePage/HomePageComponent";
import {
  Switch,
  Route
} from "react-router-dom";
import SecondPageComponent from "./Components/SecondPage/SecondPageComponent";
import ThirdPageComponent from "./Components/ThirdPage/ThirdPageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title-letters Title-big">
          Revirar Casas
        </p>
          </div>
          <p className="Title-letters">
              Compramos tu vivienda en cualquier estado
          </p>
      </header>
        <body className="App-Body">
        <Switch>
        <Route path="/second">
            <SecondPageComponent/>
        </Route>
          <Route path="/third">
            <ThirdPageComponent/>
          </Route>
          <Route path="/">
            <HomePageComponent/>
          </Route>
        </Switch>
        </body>
    </div>
  );
}

export default App;
