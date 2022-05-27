

const VideoCard = ({_id,title,views,hoursAgo}) => {

  
  
  

    return(
        <div className = "videoCardContainer">
    
    <div className="imageContainer">
    <img src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`} alt = "videoImage"/>
  </div>

    
      
      <h3 className = "videoTitle">{title}</h3>

      <div className ="videoDescription">
        
       <h4 className = "videoContent">{views}K Views | {hoursAgo} hours ago</h4>
        
         <div className = "videoCardIcons">
           <i className="far fa-thumbs-up fa-2x"></i>
           <i  className="far fa-clock fa-2x"></i>
        </div>
      </div>
  </div>
    )
}
export {VideoCard}  ;