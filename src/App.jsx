import { useState } from "react";
import "./App.css";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isFormGood, setisFormGood] = useState(false);

  const handleUsernameChange = (event) => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleVerifyPasswordChange = (event) => {
    // console.log(event.target.value);
    setVerifyPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === verifyPassword) {
      setisFormGood(true);

      // si les mdp sont identiques, la parent div disparait
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {/* parent-div en dessous */}
      <div className={isFormGood ? "step-two" : "parent-div"}>
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={handleUsernameChange}
            value={username}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="email@lereacteur.io"
            onChange={handleEmailChange}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="azertY"
            onChange={handlePasswordChange}
            value={password}
          />
          <label htmlFor="verifyPassword">Confirm your password</label>
          <input
            id="verifyPassword"
            type="password"
            placeholder="azertY"
            onChange={handleVerifyPasswordChange}
            value={verifyPassword}
          />
          <button>Register</button>
          {showError && <p>Les mots de passe ne sont pas identiques </p>}
        </form>
      </div>
      <div className={isFormGood ? "new-screen" : "step-two"}>
        <h1>Results</h1>
        <div>
          <p>Name : {username}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <button
            onClick={() => {
              setisFormGood(false);
            }}
          >
            Edit your information
          </button>
          {/* mettre un onclick pour retourner au formulaire */}
        </div>
        {/* <StepTwo /> */}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
