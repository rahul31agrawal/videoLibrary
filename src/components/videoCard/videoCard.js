import { useLikes } from "../../context/LikeContext";
import { useNavigate } from "react-router";
import {useHistory} from "../../context/historyContext"

const VideoCard = ({video}) => {

  const {historyDispatch} = useHistory();
  const navigate = useNavigate();
  const {likeState,likeDispatch} = useLikes();
  const {_id,title,views,hoursAgo} = video;
  

    return(
      <div onClick={()=>historyDispatch({type:"Add_To_History",payload:video})}>
        <div className = "videoCardContainer" onClick={() => { navigate(`/watchVideo/${_id}`) } } >
    
    <div className="imageContainer" >
    <img src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`} alt = "videoImage"/>
  </div>

    
      
      <h3 className = "videoTitle">{title}</h3>

      <div className ="videoDescription">
        
       <h4 className = "videoContent">{views}K Views | {hoursAgo} hours ago</h4>
        
         <div className = "videoCardIcons">

            {
              likeState.likes.find((vid) => vid._id === _id) ? (
                <i className="fas fa-thumbs-up fa-2x"
                onClick={()=>likeDispatch({type:"RemoveLike",payload:video})}></i>

              ) : (
                <i className="far fa-thumbs-up fa-2x"
                onClick={()=>likeDispatch({type:"AddLike",payload:video})}></i>
              )
            }
           
           <i  className="far fa-clock fa-2x"></i>
        </div>
      </div>
  </div>
  </div>
    )
}
export {VideoCard}  ;