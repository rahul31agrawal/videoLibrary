import {useContext,createContext,useReducer} from "react";
import { historyReducer } from "../reducer/historyReducer";

const HistoryContext=createContext();

const HistoryProvider=({children})=>{
    const [historyState,historyDispatch]=useReducer(historyReducer,{history:[]});

    return (
        <HistoryContext.Provider value={{historyState,historyDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}
const useHistory=()=>{
    return useContext(HistoryContext);
}

export { useHistory, HistoryProvider};