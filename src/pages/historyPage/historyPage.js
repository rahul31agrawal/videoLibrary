import {Navbar} from "../../components/navbar/nav";
import {Sidebar} from "../../components/sideBar/sideBar";
import { HistoryCard } from "../../components/historyCard/HistoryCard";
import { useHistory } from "../../context/historyContext";
import { Link } from "react-router-dom";


const  HistoryPage = ()=> {
   
    
   const {historyState} = useHistory();
 
   
   

    return(
        <>
        <Navbar/>
        <div className="sidebarHolder">
        <Sidebar/>
        </div>
       
       <div className="videoGrid">
           
       {
                 historyState.history.length > 0 ? (
             historyState.history.map((vid,index)=><HistoryCard video = {vid} key={index}/>)
             ):(
                <div className= "page-bottom-title-wishlist">
                <p>No Videos in History page</p>
                <Link to="/Videos"> watch videos </Link>
            </div>
        )

         } 
           

       </div>
        </>
    )


}

export {HistoryPage}  ;