import {useContext,createContext,useReducer} from "react";
import { VideoListingReducer } from "../reducer/VideoListingReducer";
const VideoContext=createContext();

const VideoProvider=({children})=>{
    const [state,dispatch]=useReducer(VideoListingReducer,
        {
        Showcategory:"All",
        
        });
    return (
        <VideoContext.Provider value={{state,dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}
const useVideo=()=>{
    return useContext(VideoContext);
}

export {useVideo,VideoProvider};