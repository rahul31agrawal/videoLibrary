

export const  CategoryCard=({categories})=>{

    const {categoryName,views,duration} = categories;

    return(

        <div className = "cardContainer">
    <div className = "imageContainer">
    <img src="https://i.ytimg.com/vi/KMufa47AylY/mqdefault.jpg" alt="VIDEO" className="video-img"/>
    </div>
    <h4 className = "categoryName">{categoryName}</h4>
    <div className = "videoDetails">
      <h4>{views}</h4>
      <h4>| {duration} hours ago</h4>
    </div>

    <button className = "watchNowBtn">Watch Now</button>
  </div>


    )

}