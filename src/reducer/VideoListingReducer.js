

const VideoListingReducer=(state,action)=>{
    switch(action.type){
         
        case "category":
            return {...state, Showcategory:action.payload}    
        case "clear":
            return {
                
                category:"All"
            }      
        default:
            return state;    
    }
  }

export {VideoListingReducer};