import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const RecipeComponent = () => {
    const productRecipe = useSelector((state) => state.allProducts.products);
    
    const handleCLick = () => {
        alert("Please login first");
    }

    if(productRecipe.recipes)
    {
        const title = productRecipe.recipes[0].title;
        const image = productRecipe.recipes[0].image;
        return(
            <div>
                <Header />
                <div>
                    <img src={image} alt={title} />
                </div>
                <div>
                    {title}
                </div>
                <div>
                    For Complete recipe <button onClick={handleCLick}>Read more</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div> Loading... </div>
        )
    }
}

export default RecipeComponent;