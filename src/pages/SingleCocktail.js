import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [Cocktail, setCocktail] = useState(null);


 useEffect(() => {
    setloading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          ];
          const newCocktail = {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) return <h2 className="section-title">Loading...</h2>;
  if (!Cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = Cocktail;
    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>Name : {name}</p>
            <p>Category : {category}</p>
            <p>Type : {info}</p>
            <p>Serve in : {glass}</p>
            <p>Directions : <div>{instructions}</div></p>
            <p>Ingredients :{" "}
              <ul className="drink-list">
              {ingredients.map((item, index) => {
                return item ? <li key={index}>{item}</li> : null;
              })} 
              </ul>
              </p>
          </div>
        </div>
      </section>
    );
  }
}