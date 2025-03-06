const Form = ({
  handleUsernameChange,
  handleEmailChange,
  handlePasswordChange,
  handleVerifyPasswordChange,
  handleSubmit,
  username,
  email,
  password,
  verifyPassword,
  showError,
}) => {
  return (
    <>
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
    </>
  );
};
export default Form;
