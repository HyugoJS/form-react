import { useState } from "react";
import "./App.css";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import Form from "./components/Form";

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
      <div className={isFormGood ? "step-two" : "parent-div"}>
        <Form
          username={username}
          email={email}
          password={password}
          verifyPassword={verifyPassword}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleUsernameChange={handleUsernameChange}
          handleVerifyPasswordChange={handleVerifyPasswordChange}
          handleSubmit={handleSubmit}
          showError={showError}
        />
      </div>
      <div className={isFormGood ? "new-screen" : "step-two"}>
        <StepTwo
          password={password}
          username={username}
          email={email}
          setisFormGood={setisFormGood}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
