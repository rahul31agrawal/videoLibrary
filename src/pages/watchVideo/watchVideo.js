import {Navbar} from "../../components/navbar/nav";
import {Sidebar} from "../../components/sideBar/sideBar";
import { useParams } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import { SmallVideo } from "../../components/smallVideoCard/smallVideo";

const  WatchVideo = ({video})=> {

  

    const {videoId} = useParams();
    
    const product = videos.find(vid => vid._id===videoId )
    
    const {title,views,hoursAgo} = product;


   

    return(
        <>
        <Navbar/>
        <div className="sidebarHolder">
        <Sidebar/>
        </div>
       
       <div className="watchVideoGrid">

       <div className="videoGrid" >
          <iframe title="please put id number here" width="90%" height="350" src={`https://www.youtube.com/embed/${videoId}`}></iframe> 

          
          <div className ="watchVideoDescription">
          <h3 className = "watchVideoTitle">{title}</h3>
         
         <div className = "watchVideoCardIcons">
         <h4 className = "watchVideoContent">{views} K Views | {hoursAgo} hours ago</h4>
           
                

            
           </div>
         </div>
       </div>

       
      <div className="mustWatchVideosContainer">
      
      {videos.map((vid)=><SmallVideo video = {vid} key={vid._id}/>)}
      </div>

       

       </div>

       
        </>
    )


}

export {WatchVideo}  ;