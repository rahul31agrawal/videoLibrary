const LikeReducer=(likeState,{type,payload})=>{
    switch(type) {
        case 'AddLike':
            
            return {
                
                ...likeState, likes: [...likeState.likes,payload]}
        case 'RemoveLike':
            
            return {
                ...likeState, likes: likeState.likes.filter((vid) => vid._id !== payload._id)}
        default:
            return likeState;
    }
}

export { LikeReducer };