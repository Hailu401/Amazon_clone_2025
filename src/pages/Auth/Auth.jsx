import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Auth.module.css";
import { auth } from "../utilities/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { DataContext } from '../../Components/Dataprovider/Dataprovider';
import { Type } from "../utilities/actionTypes";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const navigate = useNavigate();

  const [{user}, dispatch] = useContext(DataContext);
  //  console.log(user)
  const useNavStateData = useLocation();
  // console.log(useNavStateData.state);

  const autHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setLoading({ ...Loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          navigate(useNavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signIn: false });
       
          const msg = err.message
            .split("auth/")[1]
            .split(")")[0]
            .replace(/-/g, " ");
          toast.error(msg);
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signUp: false });
          navigate(useNavStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...Loading, signUp: false });

          const msg = err.message
            .split("auth/")[1]
            .split(")")[0]
            .replace(/-/g, " ");
          toast.error(msg);
        
        });
    }
  };
  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.login_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign in</h1>
        {useNavStateData?.state?.msg && (
          <small
            style={{ color: "red", textAlign: "center", fontSize: "15px" }}
          >
            {useNavStateData?.state?.msg}
          </small>
        )}
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={autHandler}
            name="signin"
            className={classes.Login_signInButton}
          >
            {Loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By Sign-in you agree to the amazon fake clone condition of use and
          sales. please see our privacy, cookies and interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={autHandler}
          className={classes.Login_registerButton}
        >
          {Loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </div>
  );
}

export default Auth;
