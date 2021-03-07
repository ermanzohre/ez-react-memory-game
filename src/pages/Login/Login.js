import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeName } from "../../redux/actions";


let name = "";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  //synthetic event
  const handleChange = (e) => {
    name = e.target.value;
  };

  const handleSubmit = () => {
    dispatch(changeName(name));
    history.push("/board");
  };

  return (
    <div className="wrapper">
      <div className="login">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              className="form-control"
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <small className="form-text text-muted">
              This is a memory game
            </small>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Start
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
