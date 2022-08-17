import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/authContext";

import "./signupPage.css";

const SignupPage = () =>{

  const { setAuth } = useAuthContext();
  const [singupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    passwordOne: false,
    passwordTwo: false,
  });

  const navigate = useNavigate();

  const signupSubmiter = (e) => {
    e.preventDefault();
    if (singupInput.password !== singupInput.confirmPassword) {
      alert("Password doesn't match please check again");
    } else {
      const singupFunc = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            fullname: singupInput.fullname,
            email: singupInput.email,
            password: singupInput.password,
          });

          localStorage.setItem("TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_INFO",
            JSON.stringify({
              email: response.data.createdUser.email,
              fullname: response.data.createdUser.fullname,
            })
          );

          setAuth({
            loginStatus: true,
            token: localStorage.getItem("TOKEN"),
            user: JSON.parse(localStorage.getItem("USER_INFO")),
          });

          navigate("/");
        } catch (error) {
          console.log(error);
          if (error.response.status === 422) {
            alert("This email is already exist plz login");
          }
        }
      };
      singupFunc();
    }
  };

   
    return( <>
    
        <main className="main-container">
            <div className="login-container">
                <form onSubmit={signupSubmiter}> 
                    
                    <div className="form-content">
                      <h1 className="login-heading">Create Account</h1>

                      <div>
                        <label className = "label-position-name" htmlFor="email-id"> Name</label>
                         <input className="user-input-name" type="text" name="" id="email-id" placeholder="Name Surname"
                         onChange={(e) => {
                          setSignupInput((item) => ({
                            ...item,
                            fullname: e.target.value,
                          }));
                        }}
                        required/>
                      </div>

                      <div>
                        <label className = "label-position-email" htmlFor="email-id">Email address</label>
                         <input className="user-input-email" type="email" name="" id="email-id" placeholder="enter your email"
                         onChange={(e) => {
                          setSignupInput((item) => ({
                            ...item,
                            email: e.target.value,
                          }));
                        }}
                        required/>
                      </div>
                     
                     <div>
                     <label  className = "label-position" htmlFor="user-password">Password</label>
                     <input className="user-input-password" type={showPassword.passwordOne ? "text" : "password"} 
                     name="" 
                     id="user-password" placeholder="enter password"
                     onChange={(e) => {
                      setSignupInput((item) => ({
                        ...item,
                        password: e.target.value,
                      }));
                    }}
                    minLength="6"
                    required
                     />

                     <span className="password-eye">
                     {showPassword.passwordOne ? (
                      <i
                       className="fas fa-eye"
                        onClick={(item) =>
                          setShowPassword({ ...item, passwordOne: false })
                        }
                       ></i>
                     ) : (
                     <i
                      className="fas fa-eye-slash"
                      onClick={(item) =>
                        setShowPassword({ ...item, passwordOne: true })
                      }
                     ></i>
                     )}
                    </span>
                     </div>

                     <div>
                     <label  className = "label-position" htmlFor="user-password">Confirm Password</label>
                     <input className="user-input-cnfrmpass" type={showPassword.passwordTwo ? "text" : "password"} 
                     name="" id="user-password" placeholder="Confirm password"
                     onChange={(e) => {
                      setSignupInput((item) => ({
                        ...item,
                        confirmPassword: e.target.value,
                      }));
                    }}
                    minLength="6"
                    required
                     />

                     <span className="password-eye">
                     {showPassword.passwordTwo ? (
                      <i
                       className="fas fa-eye"
                        onClick={() =>
                          setShowPassword((item) => ({ ...item, passwordTwo: false }))
                        }
                       ></i>
                     ) : (
                     <i
                      className="fas fa-eye-slash"
                      onClick={() =>
                        setShowPassword((item) => ({ ...item, passwordTwo: true }))
                      }
                     ></i>
                     )}
                    </span>
                     </div>
                     
                     
                     

                     <div>
                     <button id = "login-btn" type="submit">Signup</button>
                     </div>

                     <div>
                     <button id = "create-btn" onClick={() => { navigate("/login")}}>Already have an account </button>
                     </div>
                     
                    </div>
                  </form>
            </div>
        </main>
    </>
    )
}

export {SignupPage}