import { Navbar } from "../../components/navbar/nav";
import { Sidebar } from "../../components/sideBar/sideBar";
import { VideoCard } from "../../components/videoCard/videoCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Modal from "../../components/playlistModal/Modal";
import { usePlaylist } from "../../context/PlaylistContext";
import { useVideo } from "../../context/VideoListingContext";

import { getFinalFilteredProducts } from "../../utilities/FilterFuntion";
const VideoListing = ({ videos }) => {
  const [videoItem, setVideoItem] = useState([]);
  const { modalshow, setmodalshow } = usePlaylist();


  

  useEffect(() => {
    axios.get("/api/videos").then(
      (response) => {
        setVideoItem(response.data.videos);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);


  const {state}=useVideo();
  const {Showcategory}=state;
  const FinalFilteredProducts=getFinalFilteredProducts(videoItem,Showcategory)

  return (
    <>
      <Navbar />
      <div className="sidebarHolder">
        <Sidebar />
      </div>

      <div className="videoGrid">
        {modalshow && (
          <Modal closefunc={(modalshow) => setmodalshow(modalshow)} />
        )}

        {/* {videoItem.map((vid)=><VideoCard {...vid} key={vid._id}/>)} */}
        {FinalFilteredProducts.map((vid) => (
          <VideoCard video={vid} key={vid._id} />
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export { VideoListing };
