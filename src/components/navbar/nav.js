
const Navbar = () => {
    return(
        <div className = "navContainer">

        <h1 className="logoName">Neogcamp Video library</h1>

        <div className="searchBarContainer">
            <input className="SearchBar" placeholder="search Videos"></input>
            <button className="SearchBtn"><i class="fas fa-search"></i></button>
        </div>


        <button className="loginBtn">Login</button>
        </div>
        

    )
}

export {Navbar}  ;