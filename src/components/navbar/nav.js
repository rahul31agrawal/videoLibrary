import { useNavigate } from "react-router";

const Navbar = () => {

    const navigate = useNavigate();
    return(
        <div className = "navContainer">

        <h1 className="logoName">Neogcamp Video library</h1>

        <div className="searchBarContainer">
            <input className="SearchBar" placeholder="search Videos"></input>
            <button className="SearchBtn"><i className="fas fa-search"></i></button>
        </div>

        <button className="loginBtn" onClick={() => { navigate("/Videos")}}>Explore</button>
        <button className="loginBtn" onClick={() => { navigate("/")}}>Login</button>
        </div>
        

    )
}

export {Navbar}  ;