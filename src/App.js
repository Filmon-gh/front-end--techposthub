import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm"; // Import the SignUpForm component
import "./api/axiosDefaults";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.AppContainer}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/Log in" render={() => <h1>Log in</h1>} />
          <Route exact path="/sign up" render={() => <h1>Sign up</h1>} />
          <Route
            render={() => (
              <div>
                <h1>404 - Page not found</h1>
                <p>
                  Sorry, the page you are looking for does not exist. Please
                  check the URL or navigate to the homepage.
                </p>
              </div>
            )}
          />
         </Switch>
      </Container>
      <SignUpForm /> {/* Render the SignUpForm component here */}
    </div>
  );
}

export default App;

