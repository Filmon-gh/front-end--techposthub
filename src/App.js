import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import MainContentContainer from "react-bootstrap/Container";
import SignUpForm from "./pages/auth/SignUpForm"; // Import the SignUpForm component
import "./api/axiosDefaults";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <MainContentContainer className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route render={() => <p>The requested page could not be found.</p>} />
        </Switch>
      </MainContentContainer> 
    </div>
  );
}

export default App;