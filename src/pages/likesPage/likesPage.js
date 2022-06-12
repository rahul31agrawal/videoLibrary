import {Navbar} from "../../components/navbar/nav";
import {Sidebar} from "../../components/sideBar/sideBar";
import {VideoCard} from "../../components/videoCard/videoCard";
import { useLikes } from "../../context/LikeContext";
import { Link } from "react-router-dom";


const  LikesPage = ()=> {
   
    const {likeState}=useLikes();
    console.log(likeState)
   
 

   

    return(
        <>
        <Navbar/>
        <div className="sidebarHolder">
        <Sidebar/>
        </div>
       
       <div className="videoGrid">
           
         {
                 likeState.likes.length > 0 ? (
             likeState.likes.map((vid)=><VideoCard video = {vid} key={vid._id}/>)
             ):(
                <div className= "page-bottom-title-wishlist">
                <p>No Videos in likes page</p>
                <Link to="/Videos"> watch videos </Link>
            </div>
        )

         }  
           

       </div>
        </>
    )


}

export {LikesPage}  ;