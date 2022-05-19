import { CategoryCard } from "../categoryCard/categoryCard"


export const CategoryList=({categories})=>{

    return(
        <div className="product-list">
            <div className="products-grid">

            
                {
                    categories.length > 0 ? ( 
                        categories.map((item)=>   <CategoryCard  product={item} key={item._id}  />
                    )):(
                            <p>No products found try again after some time</p>
                    )   
                }
            </div>
        </div>
    )
}