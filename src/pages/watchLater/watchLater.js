import {Navbar} from "../../components/navbar/nav";
import {Sidebar} from "../../components/sideBar/sideBar";
import { Link } from "react-router-dom";

import {VideoCard} from "../../components/videoCard/videoCard";
import { useWatchLater } from "../../context/watchLaterContext";


const  WatchLater = ()=> {
   
    
   const {watchLaterState} = useWatchLater();
 
   
   

    return(
        <>
        <Navbar/>
        <div className="sidebarHolder">
        <Sidebar/>
        </div>
       
       <div className="videoGrid">
           
       {
                 watchLaterState.watchLater.length > 0 ? (
                    watchLaterState.watchLater.map((vid)=><VideoCard video = {vid} key={vid._id}/>)
             ):(
                <div className= "page-bottom-title-wishlist">
                <p>No Videos in Watch Later page</p>
                <Link to="/Videos"> watch videos </Link>
            </div>
        )

         } 
           

       </div>

        </>
    )


}

export {WatchLater}  ;