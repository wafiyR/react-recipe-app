import React, { useState } from 'react';
import './App.css';
import RecipeTag from './components/Recipe';
//RecipeTage is an optional name



// in Google Chrome browser, press Ctrl + Shift + I to view page as mobile ui

// use console.log everytime to view/print out value stored/passed
 
function App() {
 
  // array destructuring
  const [name, setName] = useState('Your Name');
  // first element of array, [0] = 'name' is the state or the variable
  // second element of array, [1] = 'setName' is the function to update the state

  const [searchQuery, setSearchQuery] = useState("");

  // using useState to store an array
  const [recipes, setRecipes] = useState ([
    
    {
      name: "Margarita Pizza",
      ingredients: {
        "Cheese": "250mg",
        "Flour": "500mg"
      }
    },
    {
      name: "Pepperoni Pizza",
      ingredients: {
        "Cheese": "250mg",
        "Flour": "500mg",
        "Pepperoni": "5 pieces"
      }
    }
  ]);
 
  return (
    <div className="body">
      <h1 className="title" >{name}'s Recipe App</h1>
      <h3>The one stop shop for all your recipes!</h3>

      <p>You have search  for {searchQuery}</p>

      <input placeholder="Search Recipes" className="recipie-input" onChange={ (e) => setSearchQuery(e.target.value.toLowerCase())}/> 
      { /** e is the event of input, pass the input to setSearchQuery function. convert it to lower case to standardize the input value*/
        /** a good practice to lower case input to make comparison */
      }
    
      { /** to write JavaScript in HTML element like this part, just put curly braces { } */
        /** the map() method in JavaScript is used to iterate over an array and calling function on every element of array*/
        /** map() method is like a for loop, which in every iteration it run a function to return sth (this is called as callback) */

        /* recipes.map( (recipie) =>{
          return(
            <p>{recipie.name}</p>
          )
        }) */


        /** the filter() method creates another new "filtered" array with all the elements provided that passed a test, and a test is a function*/
        /** includes() is a JavaScript method, where in this code, it's use to compare whether the input<> of setSearchQuery is equal to recipe.name from filter() */
        /** includes() return boolean true or false -> hover to includes method for detailed explaination in VS Code */
        /** generally, in the filter() method, on every iteration,  it checks the function (recipe) => , whether the fx returns true or false
         * if the (recipe) => returns a false statement, the current iteration element will be shipped off from the new "filtered" array
        */
        recipes.filter( (recipe) => recipe.name.toLowerCase().includes(searchQuery)).map((recipe, index) =>{

          return(
            // <p>{recipe.name}</p>
            // <div key={index} className="recipie-tab">
            //   {/* index starts with 0 and so on */}
            //   <p>Name: {recipe.name}</p>
            //   <p>Ingredients: </p>
            //   {
            //     // keys in react, helps identify which item inside the list has changed (in terms of added, removed, reorder etc)
            //     // need to bind unique id to parent component, in this case <div className="recipie-tab"> is the parent
            //     Object.keys(recipe.ingredients).map((key, index) => {

            //       return(
            //         <p key={index} >{key} : {recipe.ingredients[key]}</p>
            //       );
            //     })
            //   }
            //   <p>Cooking Time: {recipe.cookingTime}</p>
            // </div>

            // modularize the <div> code into Recipe.js to act as a component for reuseability in React.js

            <RecipeTag name={recipe.name} ingredients={recipe.ingredients} />
            // pass the props to Recipe.js
          )
        })
        
      }

    </div>
  );
}
 
export default App;