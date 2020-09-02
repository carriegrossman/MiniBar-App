import React, {useEffect, useState} from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";


export default function Seach() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("tequila");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`
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
       <Hero>
        <Banner
          title="Cocktails 24/7"
          subtitle="Find Something New"
        >
          <Link to="/random" className="btn-primary">
            Random Cocktails
          </Link>
          
        </Banner>
      </Hero>
      
      <SearchForm setSearchTerm={setSearchTerm}  />

       
      <CocktailsList cocktails={cocktails} loading={loading} />
    </main>
  );
}