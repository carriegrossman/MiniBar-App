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
            strIngredient5
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newCocktail = {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients
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
      ingredients
    } = Cocktail;
    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/search">
          back to search
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category}</p>
            <p>type : {info}</p>
            <p>glass : {glass}</p>
            <p>instructions : <div>{instructions}</div></p>
            <ul>
              <p>ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <li key={index}>{item}</li> : null;
              })}
              </p>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}