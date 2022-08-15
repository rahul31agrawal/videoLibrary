const getFinalFilteredProducts=(videoItem,Showcategory)=>{
    if(Showcategory==="All"){
        return videoItem;
    }
    if(Showcategory==="bollywood"){
        return videoItem.filter((item)=> item.category==="bollywood")
    }
    if(Showcategory==="hollywood"){
      return videoItem.filter((item)=> item.category==="hollywood")
    }
    if(Showcategory==="Frontend Development"){
      return videoItem.filter((item)=> item.category==="Frontend Development")
    }
    if(Showcategory==="comedy"){
      return videoItem.filter((item)=> item.category==="comedy")
    }
    
  return videoItem;
  }

  export {getFinalFilteredProducts};