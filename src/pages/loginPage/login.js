import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/authContext";
import { useState } from "react";
import axios from "axios";

const LoginPage = () =>{
    

    const { setAuth } = useAuthContext();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    loginBtn: false,
    loginStatus: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const loginFunc = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          email: response.data.foundUser.email,
          fullname: response.data.foundUser.fullname,
        })
      );

      setAuth({
        loginStatus: true,
        token: localStorage.getItem("TOKEN"),
        user: JSON.parse(localStorage.getItem("USER_INFO")),
      });

      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        alert("Password is wrong");
      } else if (error.response.status === 404) {
        if (loginInfo.loginStatus) {
          alert("Email doesnt exist");
        }
      }
    }
  };

  const singupSubmiter = (e) => {
    e.preventDefault();
    setLoginInfo((item) => ({ ...item, loginStatus: true }));
    loginFunc();
  };

  const loginAsGuest = () => {
    setLoginInfo((item) => ({
      ...item,
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
      loginStatus: false,
    }));
    loginFunc();
  };

    return( <>
    
        <main className="main-container">
            <div className="login-container">
                <form onSubmit={singupSubmiter}> 
                    
                    <div className="form-content">
                      <h1 className="login-heading">Login</h1>
                      <div>
                        <label className = "label-position" htmlFor="email-id">Email</label>
                         <input className="user-input" type="email" name="" id="email-id" placeholder="enter your email"
                         value={loginInfo.email}
                         onChange={(e) => {
                           setLoginInfo((item) => ({
                             ...item,
                             email: e.target.value,
                           }));
           
                           e.target.value.length > 0
                             ? setLoginInfo((item) => ({ ...item, loginBtn: true }))
                             : setLoginInfo((item) => ({ ...item, loginBtn: false }));
                         }}
                         required/>
                      </div>
                     
                     <div>
                     <label  className = "label-position" htmlFor="user-password">Password</label>
                     <input className="user-input" type={showPassword ? "text" : "password"}
                      name="" id="user-password" placeholder="enter your password"
                      value={loginInfo.password}
                      onChange={(e) => {
                        setLoginInfo((item) => ({
                         ...item,
                         password: e.target.value,
                        }));
                       }}
                       required/>

                    <span className="password-eye">
                      {showPassword ? (
                      <i
                       className="fas fa-eye"
                        onClick={() => setShowPassword(false)}
                       ></i>
                     ) : (
                     <i
                      className="fas fa-eye-slash"
                      onClick={() => setShowPassword(true)}
                     ></i>
                     )}
                    </span>
                     </div>
                     
                     
                     

                     <div>
                     <button id = "login-btn" type="submit">Login</button>
                     </div>

                     <div>
                     <button id = "login-btn" onClick={loginAsGuest}>Guest Login</button>
                     </div>

                     <div>
                     <button id = "create-btn" onClick={() => { navigate("/signup")}}>Create new Account </button>
                     </div>
                     
                    </div>
                  </form>
            </div>
        </main>
    </>
    )
}

export {LoginPage}