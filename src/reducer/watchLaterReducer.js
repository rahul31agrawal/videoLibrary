

const watchLaterReducer=(watchLaterState,{type,payload})=>{
    switch(type) {
        case 'AddToWatchLater':
            
            return {
                
                ...watchLaterState, watchLater: [...watchLaterState.watchLater,payload]}
        case 'RemoveFromWatchLater':
            
            return {
                ...watchLaterState, watchLater: watchLaterState.watchLater.filter((vid) => vid._id !== payload._id)}
        default:
            return watchLaterState;
    }
}

export { watchLaterReducer };