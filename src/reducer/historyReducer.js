
const historyReducer = (historyState,{type,payload})=>{
    switch(type){
        case 'Add_To_History':
            return{
                ...historyState, history: [...historyState.history,payload]
            }
        case 'Remove_From_History':
            
            return{
                ...historyState, history: historyState.history.filter((vid)=> vid._id !== payload._id)
            }
        default:
            return historyState;
    }

}

export {historyReducer};