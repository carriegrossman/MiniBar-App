import React, {useEffect, useState} from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";


export default function Seach() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("tequila");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();

        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(item => {
            const {
              strAlcoholic,
              idDrink,
              strDrink,
              strDrinkThumb,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {console.log(error)}
      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  );
}