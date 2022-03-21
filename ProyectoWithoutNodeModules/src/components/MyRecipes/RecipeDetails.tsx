import React, { Component, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { db } from "../../firebase-config"
import { collection, doc, getDoc, getDocs } from 'firebase/firestore/lite';
import { recipe } from '../../Model/Types';
import { Oval } from 'react-loader-spinner';
import { formatIngredients } from '../../Utilities';

interface recipeProps {
    id?: string,
}
export default function RecipeDetails(props: recipeProps) {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState<recipe | null>(null);
    useEffect(() => {
        async function getRecipeFirebase() {
            let snap = await getDoc(doc(db, 'MyRecipes', id!));
            let result = { ...snap.data() } as recipe;
            setRecipe(formatIngredients(result));
            console.log(recipe?.ingredients)
            setLoading(false);
        }

        getRecipeFirebase()
    }, [])
    return (<div>
        {isLoading ?
            <div className="spinner">  <Oval color="#6e0000" secondaryColor="#505050" height={380} width={380} /></div>
            :
            <div className="main">
                <h1>My Recipe: {recipe?.recipeName}</h1>
                <p>Ingredient :</p>
                <ul>
                    {(recipe?.ingredients as string[]).map((ingredient, id) => (
                        <li key={id}>{ingredient}</li>
                    ))}
                </ul>
                <p>Steps :</p>
                <ul>
                    {(recipe?.steps as string[]).map((step, id) => (
                        <li key={id}>{step}</li>
                    ))}
                </ul>
            </div>
        }
    </div>)

}

