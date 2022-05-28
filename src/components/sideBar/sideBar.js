

const Sidebar = () => {

  return(
    <aside className = "sideBar">
    <div className = "sidebarContents">
      <i className="fas fa-home fa-2x"></i>
      <h3 className = "sideBarText">Home</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-compass fa-2x"></i>
      <h3 className = "sideBarText">Explore</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-thumbs-up fa-2x"></i>
      <h3 className = "sideBarText">Liked Videos</h3>
    </div>
    <div className = "sidebarContents">
      <i className="far fa-history fa-2x"></i>
      <h3 className = "sideBarText">History</h3>
    </div>
  </aside>
  )

}

export {Sidebar}  ;