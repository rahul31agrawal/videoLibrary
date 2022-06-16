import { useNavigate } from "react-router";

const SmallVideo = ({video}) => {

    const navigate = useNavigate();
    const {_id,title,views,hoursAgo} = video;

    return(
        <div className="mustWatchVideos" onClick={() => { navigate(`/watchVideo/${_id}`)}}>
         <img alt = "mustWatchImg" width="300" height="150" src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}></img>

          <div className="mustWatchVideosTitle">
           <h4 >{title}</h4>
           <h5 className="mustWatchVideosDesc">{views}k views | {hoursAgo} hours ago</h5>
          </div>
          
        </div>
    )
}

export {SmallVideo}