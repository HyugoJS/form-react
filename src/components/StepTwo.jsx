const StepTwo = ({ password, username, email, setisFormGood }) => {
  return (
    <>
      <div className="new-screen">
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
        </div>
      </div>
    </>
  );
};
export default StepTwo;

// si mon state est false, je renvoie le message d'erreur,
//si mo state est true, alors il prend la classe "step-two", et dans le css, mettre good en display none ?
// faire une div ou j'appelle steptwo, lui mettre une class display none si mon state est false, et si il est true une classe stylisée.
