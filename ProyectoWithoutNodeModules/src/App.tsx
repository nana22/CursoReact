import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import MainScreen from './MainScreen';
import RecipeForm from './components/RecipeForm/RecipeForm';
import MyRecipes from './components/MyRecipes/MyRecipes';
import RecipeDetails from './components/MyRecipes/RecipeDetails';
import DrinksList from './DrinksList';


function App() {
  //react hooks
  const [numberOfRecipes, setNumberOfRecipes] = React.useState(0);

  const addRecipe = (number: number) => {
    setNumberOfRecipes(number);
  }
  //React router
  return (
    <BrowserRouter>
      <Header numberOfRecipes={numberOfRecipes} />
      <Routes>
        <Route path="/" element={<MainScreen numberOfRecipes={numberOfRecipes} />} />
        <Route path="/addRecipeAction" element={<RecipeForm numberOfRecipes={numberOfRecipes} addRecipe={addRecipe} />} />
        <Route path="/myRecipes" element={<MyRecipes />} />
        <Route path="/myRecipe:id" element={<RecipeDetails />} />
        <Route path="/drinks" element={<DrinksList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
