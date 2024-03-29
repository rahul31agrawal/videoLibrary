import { useLikes } from "../../context/LikeContext";
import { useNavigate } from "react-router";
import { useHistory } from "../../context/historyContext";
import { useWatchLater } from "../../context/watchLaterContext";
import { usePlaylist } from "../../context/PlaylistContext";

const VideoCard = ({ video }) => {
  const { historyDispatch } = useHistory();
  const navigate = useNavigate();
  const { likeState, likeDispatch } = useLikes();
  const { _id, title, views, hoursAgo } = video;
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { setselectedvideo, setmodalshow } = usePlaylist();

  // var token = localStorage.getItem('token');
  // const token = localStorage.getItem('token')

  // const header = {
  // authorization: token
  // }

  const playlistClickHandler = (vid) => {
    setmodalshow(true);

    setselectedvideo(vid);
  };

  return (
    <div>
      <div className="videoCardContainer">
        <div
          className="imageContainer"
          onClick={() => {
            navigate(`/watchVideo/${_id}`);
          }}
        >
          <img
            src={`https://i.ytimg.com/vi/${_id}/mqdefault.jpg`}
            alt="videoImage"
            onClick={() =>
              historyDispatch({ type: "Add_To_History", payload: video })
            }
          />
        </div>

        <h3 className="videoTitle">{title}</h3>

        <div className="videoDescription">
          <h4 className="videoContent">
            {views}K Views | {hoursAgo} hours ago
          </h4>

        </div>

          <div className="videoCardIcons">
            {likeState.likes.find((vid) => vid._id === _id) ? (
              <i
                className="fas fa-thumbs-up fa-2x" 
                onClick={() =>
                  likeDispatch({ type: "RemoveLike", payload: video })
                }
              ></i>
            ) : (
              <i
                className="far fa-thumbs-up fa-2x"
                onClick={() =>
                  likeDispatch({ type: "AddLike", payload: video })
                }
              ></i>
            )}

            {watchLaterState.watchLater.find((vid) => vid._id === _id) ? (
              <i
                className="fas fa-alarm-plus fa-2x"
                onClick={() =>
                  watchLaterDispatch({
                    type: "RemoveFromWatchLater",
                    payload: video,
                  })
                }
              ></i>
            ) : (
              <i
                className="far fa-alarm-plus fa-2x"
                onClick={() =>
                  watchLaterDispatch({
                    type: "AddToWatchLater",
                    payload: video,
                  })
                }
              ></i>
            )}

            <div
              onClick={() => playlistClickHandler(video)}
              className="playlist action-btn"
            >
              <i className="far fa-list  fa-2x"></i>
            </div>
          </div>
        
      </div>
    </div>
  );
};
export { VideoCard };
