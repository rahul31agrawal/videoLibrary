import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Navbar = () => {

    const navigate = useNavigate();
    const { auth, setAuth } = useAuthContext();

    const logoutFunc = () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USER_INFO");
    
        setAuth({
          loginStatus: false,
          token: localStorage.getItem("TOKEN"),
          user: JSON.parse(localStorage.getItem("USER_INFO")),
        });
        navigate("/login");
      };

    



    return(
        <div className = "navContainer">

        <h1 className="logoName">Neogcamp Video library</h1>

        <div className="searchBarContainer">
            <input className="SearchBar" placeholder="search Videos"></input>
            <button className="SearchBtn"><i className="fas fa-search"></i></button>
        </div>

        <button className="loginBtn" onClick={() => { navigate("/Videos")}}>Explore</button>
        
         

         {auth.loginStatus ? (
        <div className="loginBtn" to="" onClick={() => logoutFunc()}>
          Logout
        </div>
        ) : (
        <Link className="loginBtn" to="/login">
          Login
        </Link>
        )}



        </div>
        

    )
}

export {Navbar}  ;