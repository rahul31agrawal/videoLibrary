import { Link } from "react-router-dom";
import { useVideo } from "../../context/VideoListingContext";

export const  CategoryCard=({categoryName,yId})=>{

  const {dispatch}=useVideo();
    // const {categoryName,views,duration} = categories;

    return(

        <div className = "cardContainer">
    <div className = "imageContainer">
    <Link
            to="/Videos"  onClick={()=>dispatch({type:"category", payload:categoryName})}
            >
    <img src={`https://i.ytimg.com/vi/${yId}/mqdefault.jpg`} alt="VIDEO" className="video-img"/>
    </Link>
    </div>
    <h4 className = "categoryName">{categoryName}</h4>
    

    
  </div>


    )

}