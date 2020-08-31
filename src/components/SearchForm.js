import React, {useEffect, useRef}  from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
  };
  
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
        <form action="" className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">
          <label htmlFor="name">Pick Your Poison </label>
            <input
              placeholder="Liquor Choice"
              type="text"
              name="name"
              id="name"
              onChange={searchCocktail}
              ref={searchValue}
            />
        </div>
      </form>
    </section>
  );
}