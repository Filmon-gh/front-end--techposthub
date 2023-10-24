import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignUpForm from "./pages/auth/SignUpForm"; // Import the SignUpForm component
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <SignUpForm /> {/* Render the SignUpForm component here */}
    </div>
  );
}

export default App;