import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import { Component } from 'react';

export default class MainScreen extends Component<{ numberOfRecipes: number }, { showComponent: boolean }> {
    private numRecipes;
    constructor(props: { numberOfRecipes: number }) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.numRecipes = props.numberOfRecipes;
        this._onAddClick = this._onAddClick.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onAddClick() {
        window.history.pushState({}, 'undefined', "/addRecipeAction");
        window.location.reload();
    }
    _onButtonClick() {
        console.log('find recipe')
        window.history.pushState({}, 'undefined', "/myRecipes");
        window.location.reload();
    }

    _onGoDrinkClick() {
        console.log('go drinks')
        window.history.pushState({}, 'undefined', "/drinks");
        window.location.reload();
    }

    render() {
        return <div className="App">
            <div className='main-content'>
                <div className="row">
                    <div className="col-sm-3 col-md-4 item">
                        <div>
                            <div id="AddRecipe" className="item-container" onClick={this._onAddClick}>
                                <div className="add-item">
                                    <h2 className="">Add Recipe <span className="material-icons">
                                        add_circle_outline
                                    </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-4 item">
                        <div>
                            <div id="MyRecipes" className="item-container" onClick={this._onButtonClick}>
                                <div className="recipe-item">
                                    <h2 className="">My Recipes: {this.numRecipes} <span className="material-icons">
                                        description
                                    </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-4 item">
                        <div id="FindRecipe" className="item-container">
                            <div className="find-item">
                                <h2 className="">Find Recipe  <span className="material-icons">search</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-md-4 item">
                        <div>
                            <div id="Drinks" className="item-container" onClick={this._onGoDrinkClick}>
                                <div className="add-item">
                                    <h2 className="">Want drinks?
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
