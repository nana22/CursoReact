import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config"
import { collection, doc, getDocs } from 'firebase/firestore/lite';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from 'react-loader-spinner'
import { recipe } from '../../Model/Types';
type State = {
    recipes: recipe[];
    isLoading: boolean
};
class MyRecipes extends Component<any, State> {
    readonly foodTypesCollectionRef = collection(db, "MyRecipes");
    constructor(props: any) {
        super(props);
        this.state = { recipes: [], isLoading: true }
        this.goToRecipe = this.goToRecipe.bind(this);

    }
    goToRecipe(id: string) {
        window.location.href = `/myRecipe${id}`
    }

    async componentDidMount() {
        try {
            const data = await getDocs(this.foodTypesCollectionRef);
            const elements = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Array<recipe>;
            this.setState({ recipes: elements, isLoading: false });
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.isLoading ?
                    <div className="spinner">  <Oval color="#6e0000" secondaryColor="#505050" height={380} width={380} /></div>
                    :
                    <div className="main">
                        <h1 className='header'>My Recipes</h1>
                        <ul>
                            {this.state.recipes.map((recipe) => (
                                <div className="row" key={recipe.id}>
                                    <div className="col-sm-3 col-md-6 item">
                                        <span className="material-icons">
                                            menu_book
                                        </span>
                                        <span>{recipe.recipeName}</span>
                                    </div>
                                    <div className="col-sm-1 col-md-1 item">
                                        <span onClick={() => this.goToRecipe(recipe.id)} className="material-icons">
                                            visibility
                                        </span>
                                    </div>
                                    <div className="col-sm-1 col-md-1 item">
                                        <span className="material-icons">edit</span>
                                    </div>
                                    <div className="col-sm-1 col-md-1 item">
                                        <span className="material-icons">delete</span>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default MyRecipes;