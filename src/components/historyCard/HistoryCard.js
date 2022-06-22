import { useHistory } from "../../context/historyContext";


const HistoryCard = ({video}) => {

    const {_id,title,views,hoursAgo} = video;
    const {historyDispatch} = useHistory()

    return(
        <div className="mustWatchVideos">
         <img alt = "mustWatchImg" width="300" height="150" src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}></img>

          <div className="mustWatchVideosTitle">
           <h4 >{title}</h4>
           <h5 className="mustWatchVideosDesc">{views}k views | {hoursAgo} hours ago</h5>
          </div>
          <button onClick={()=>historyDispatch({type:"Remove_From_History",payload:video})}>Remove from History</button>
        </div>
    )
} 

export {HistoryCard};