import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts as setProductsAction } from "../redux/actions/productActions";
import RecipeComponent from "./RecipeComponent";


const RandomRecipe = () => {
    const dispatch = useDispatch();
    const fetchRecipe = async () => {
        const response = await axios
            .get("https://api.spoonacular.com/recipes/random?apiKey=fd9b8562d908477588b333ca2c2725fc")
            .catch((err) => {
                console.log("Error:", err);
            });
            console.log(response.data);
            dispatch(setProductsAction(response.data));
    };
    useEffect(()=>{
        fetchRecipe();
    });

    return(
        <div>
            <RecipeComponent />
        </div>
    )
}

export default RandomRecipe;