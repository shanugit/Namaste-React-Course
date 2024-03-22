import { Link } from "react-router-dom";

const LoginForm = () => {
  function getInput() {
    let id = document.getElementById("name-input").value;
    let pass = document.getElementById("password-input").value;
    // alert(pass);
  }
  return (
    <div id="login-form">
      <div id="name">
        <label>User Name </label>
        <input type="text" placeholder="enter username" id="name-input" />
      </div>
      <div id="password">
        <label>Password </label>
        <input type="text" placeholder="enter password" id="password-input" />
      </div>
      {/* <button  value="login-submit" id="login-btn" onClick={() => getInput()}> */}
      <ul id="login-btn">
        <li>
          <Link to="/" id="link-id">
            Submit
          </Link>
        </li>
      </ul>
      {/* </button> */}
    </div>
  );
};

export default LoginForm;
