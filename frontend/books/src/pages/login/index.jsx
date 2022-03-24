import React from "react";
import "./index.css";
import { GoogleLogin } from "react-google-login";

function Login() {
  const handleLoginFailure = (result) => {
    alert("Unfortunately, login failed, please try again. \n\n" + result);
  };

  const handleLogin = async (googleData) => {
    const { profileObj, tokenObj, googleId } = googleData;

    localStorage.setItem("user_id", googleId)
    localStorage.setItem("user", JSON.stringify(profileObj));
    localStorage.setItem("token", JSON.stringify(tokenObj.access_token));

    alert(`User: ${profileObj.name} successfully logged in`);

    window.location.href = "/booksearch";
  };

  return (
    <div className="bloco-body">
      <div className="bloco-login-google">
        <h1>Pesquisa de Livros</h1>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Entrar com o Google"
          onSuccess={handleLogin}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>

    </div>
  );
}

export default Login;
