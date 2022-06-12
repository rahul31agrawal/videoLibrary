import {Navbar} from "../../components/navbar/nav";
import {Sidebar} from "../../components/sideBar/sideBar";
import {VideoCard} from "../../components/videoCard/videoCard";
import { useState, useEffect } from 'react';
import axios from 'axios';

const  VideoListing = ({ videos })=> {

    const [videoItem,setVideoItem] = useState([]);

    useEffect(()=>{
  
  
      axios.get('/api/videos')
      .then((response)=>{
        setVideoItem(response.data.videos);
        
      },
      (error)=>{
        console.log(error);
    })
    },[])


   

    return(
        <>
        <Navbar/>
        <div className="sidebarHolder">
        <Sidebar/>
        </div>
       
       <div className="videoGrid">
           
           {/* {videoItem.map((vid)=><VideoCard {...vid} key={vid._id}/>)} */}
           {videoItem.map((vid)=><VideoCard video = {vid} key={vid._id}/>)}
       </div>
        </>
    )


}

export {VideoListing}  ;