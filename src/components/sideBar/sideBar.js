import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  return(
    <aside className = "sideBar">
    <div className = "sidebarContents">
      <i className="fas fa-home fa-2x"></i>
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
      <h3 className = "sideBarText">History</h3>
    </div>
  </aside>
  )

}

export {Sidebar}  ;