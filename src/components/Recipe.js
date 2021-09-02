
// shortcut to create functional components => type "rafce" and then presee Tab

import React from 'react';

const Recipe = (props) => {

    // object destructuring
    const {name, ingredients} = props;

    return (
        // remove the key={index} inside the first <div>
        <div className="recipie-tab">
        
              <p>Name: {name}</p> 
              {/** if not because of the object destructuring, it will be like Name: {props.name} instead of Name: {name}, same goes for the ingredients part as well */}

              <p>Ingredients: </p>
              {
                // keys in react, helps identify which item inside the list has changed (in terms of added, removed, reorder etc)
                // need to bind unique id to parent component, in this case <div className="recipie-tab"> is the parent
                Object.keys(ingredients).map((key, index) => {

                  return(
                    <p key={index} >{key} : {ingredients[key]}</p>
                  );
                })
              }
              {/* <p>Cooking Time: {props.cookingTime}</p> */}
            </div>
    )
}

export default Recipe;
