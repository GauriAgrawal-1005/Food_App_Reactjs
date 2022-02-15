import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedRecipe from "./SelectedRecipe";

const Dashboard = () => {

    const [query, setQuery] = useState("");
    const [number, setNumber] = useState(0);
    const [intolerence, setIntolerance] = useState([]);
    
    let navigate = useNavigate();

    const handleIntolerances = (e) => {
        let intoleranceArray = [...intolerence, e.target.value];
        setIntolerance(intoleranceArray);
    }

    const handleGetDetails = () => {
        localStorage.setItem('Query', query);
        localStorage.setItem('Number', number);
        localStorage.setItem('Intolerances', intolerence);
        setQuery("");
        setNumber(0);
        setIntolerance(intolerence);
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <div>
                <button onClick={handleLogout}> Logout </button>
            </div>
            <div>
                <h2>Search Ingredient</h2>
                <h3>Search for simple foods</h3>
                <h4>(veggies, dairy, fruits, etc)</h4>
            </div>
            <div>
                <input type='text' placeholder='query' onChange={(e)=>{setQuery(e.target.value)}} required />
            </div>
            <div>
                <input type='number' placeholder='number' onChange={(e)=>{setNumber(e.target.value)}} required />
            </div>
            <div>
                <button onClick={(e)=>{document.querySelector('.list').classList.toggle('show');}}>Choose Intolerances</button>
            </div>
            <div className='list' >
                <div><input type="checkbox" id="Gluten" value="Gluten" onChange={handleIntolerances}/>Gluten</div>
                <div><input type="checkbox" id="Dairy" value="Dairy"  onChange={handleIntolerances}/>Dairy</div>
                <div><input type="checkbox" id="Peanut" value="Peanut"  onChange={handleIntolerances}/>Peanut</div>
                <div><input type="checkbox" id="Soy" value="Soy"  onChange={handleIntolerances}/>Soy</div>
                <div><input type="checkbox" id="Egg" value="Egg"  onChange={handleIntolerances}/>Egg</div>
                <div><input type="checkbox" id="Seafood" value="Seafood"  onChange={handleIntolerances}/>Seafood</div>
                <div><input type="checkbox" id="Sulfite" value="Sulfite"  onChange={handleIntolerances}/>Sulfite</div>
            </div>
            <div className="field">
            <button onClick={handleGetDetails} className="fluid ui button blue">Get Details</button>
            {console.log("rerender")}
            {localStorage.getItem('Query') && localStorage.getItem('Number') && localStorage.getItem('Intolerances') ? <SelectedRecipe /> : ""}
            </div>
        </>
        
    )
} 

export default Dashboard;