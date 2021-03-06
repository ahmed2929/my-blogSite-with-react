import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SinglePost from "./components/SinglePost/SinglePost";
import Posts from "./components/Posts/Posts";
import Project from "./components/Projects/Projects";
import { Route,Switch,HashRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <HashRouter >
    <NavBar/>
    <Switch>

    <Route component={Home} path="/" exact/>
    <Route component={About} path="/about"/>
    <Route component={SinglePost} path="/posts/:id"/>
    <Route component={Posts} path="/posts"/>
    <Route component={Project} path="/Project"/>



    </Switch>
        
    </HashRouter>
   
   
  );
}

export default App;
