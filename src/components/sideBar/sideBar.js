import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  return(
    <aside className = "sideBar">
    <div className = "sidebarContents">
      <i className="far fa-home fa-2x"></i>
      <h3 className = "sideBarText" onClick={() => { navigate("/")}}>Home</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-compass fa-2x"></i>
      <h3 className = "sideBarText" onClick={() => { navigate("/Videos")}}>Explore</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-thumbs-up fa-2x" ></i>
      <h3 className = "sideBarText" onClick={() => { navigate("/LikesPage")}}>Liked Videos</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-history fa-2x"></i>
      <h3 className = "sideBarText" onClick={() => { navigate("/history")}}>History</h3>
    </div>

    <div className = "sidebarContents">
    <i className="far fa-list fa-2x"></i>
      <h3 className = "sideBarText" onClick={() => { navigate("/playlists")}}>Playlist</h3>
    </div>

    <div className = "sidebarContents">
    <i className="far fa-alarm-plus fa-2x"></i>
      <h3 className = "sideBarText"  onClick={() => { navigate("/watchLater")}}>Watch Later</h3>
    </div>

  </aside>
  )

}

export {Sidebar}  ;