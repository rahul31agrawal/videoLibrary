import {useContext,createContext,useReducer} from "react";
import { LikeReducer} from "../reducer/LikeReducer";

const LikeContext=createContext();

const LikeProvider=({children})=>{
    const [likeState,likeDispatch]=useReducer(LikeReducer,{likes:[]});

    return (
        <LikeContext.Provider value={{likeState,likeDispatch}}>
            {children}
        </LikeContext.Provider>
    )
}
const useLikes=()=>{
    return useContext(LikeContext);
}

export { useLikes, LikeProvider};