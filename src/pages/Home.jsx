import React, { useState, useEffect } from 'react';
import { getRecipes } from '../api/spoonacular';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('pasta');

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes(query);
      setRecipes(data.results);
    };
    fetchRecipes();
  }, [query]);

  return (
    <div>
      <h1>Food Recipes</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for recipes..."
      />
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;