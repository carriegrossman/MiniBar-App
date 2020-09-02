import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div>
    <Hero>
     <Banner
       title="Thirsty?"
       subtitle="All About MiniBar"
     >
     </Banner>
   </Hero>
   
   <section className="section about-section">
   <Link to="/" className="btn btn-primary">
       Back Home
     </Link>
   <h2 className="section-title">About</h2>
   <hr></hr>
   <p>
   <h3>Developer:</h3>
							<h4>Carrie Grossman</h4>
							<br />
							<p>Welcome to my Cocktail App. I built this mostly for fun, and also because I love trying new cocktails and one of my main struggles is trying to figure out what specialty cocktails to make and/or order.</p>
              <p>Need a Drink? Search for directions on how to make an old favorite or 
              search up something new to try. Just enter one of your favorite liquors or ingredients
              and browse the cocktails. Feeling lucky? Take a chance, and get a Random Drink suggestion. Enjoy responsibly..</p>
							<p>I hope this app helps you out as much as it's helped me out! </p>
							<p><a href="https://github.com/carriegrossman" >Github</a></p>
   </p>
 </section>
 </div>
);
}