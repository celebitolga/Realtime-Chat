import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Join} />

          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
