import banner from "../../assets/images/netflixCollection.jpg";

import {Navbar} from "../../components/navbar/nav";



const Home = () => {

    



    return(
        <>
        <Navbar/>
        <div className="bannerImg">
        <img src={banner} alt="banner"/>
        </div>
        <h1 className="categoryHeading">Category</h1>
        <div className="categoryCardContainer">
        

        </div>
        </>
        
        

    )
}

export {Home}  ;