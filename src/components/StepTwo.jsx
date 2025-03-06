const StepTwo = ({ state, setState }) => {
  return (
    <>
      <div className="new-screen">
        <h1>Results</h1>
        <div>
          <p>Name : {state}</p>
          <p>Email : {state}</p>
          <p>Password : {state}</p>
          <button>Edit your information</button>
          {/* mettre un onclick pour retourner au formulaire */}
        </div>
      </div>
    </>
  );
};
export default StepTwo;

// si mon state est false, je renvoie le message d'erreur,
//si mo state est true, alors il prend la classe "step-two", et dans le css, mettre good en display none ?
// faire une div ou j'appelle steptwo, lui mettre une class display none si mon state est false, et si il est true une classe stylisée.
