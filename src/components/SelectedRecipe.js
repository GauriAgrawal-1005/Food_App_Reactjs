import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectedProducts as selectedProductsAction } from "../redux/actions/productActions";
import RecipeList from "./RecipeList";

const SelectedRecipe = () => {
    console.log("recipeList");
    const query = localStorage.getItem('Query');
    const number = localStorage.getItem('Number');
    const intolerance = localStorage.getItem('Intolerances')
    const dispatch = useDispatch();

    const fetchRecipe = async () => {
        const response = await axios
            .get(`https://api.spoonacular.com/food/ingredients/search?query=${query}&number=${number}&intolerances=${intolerance}&apiKey=fd9b8562d908477588b333ca2c2725fc`)
            .catch((error) => {
                console.log("error", error);
            })
            console.log(response.data);
            dispatch(selectedProductsAction(response.data));
    };
    useEffect(()=>{fetchRecipe()});
    return (
        <RecipeList />
    )
}

export default SelectedRecipe;