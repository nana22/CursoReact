import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DrinkObject } from './Model/Drink';


export default function DrinksList() {

    //react hooks
    const [drinkList, setDrinks] = useState<DrinkObject[]>([]);

    useEffect(() => {
        getDrinks();
    });

    const getDrinks = () => {
        let drinks: DrinkObject[] = [];
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then(response => {
                response.data.forEach((element: DrinkObject) => {
                    drinks.push(element);
                })
                setDrinks(drinks);
            })
            .catch(function (error) {
                // manipulate the error response here
            });
    }
    return (
        <div className="DrinkList">
            <h1>Drinks we sell</h1>
            {drinkList.map((drink) => (
                <div className="row" key={drink.id}>
                    <div className="col-sm-3 col-md-6 item">
                        <span className="material-icons">
                            sports_bar
                        </span>
                        <span>{drink.name}</span>
                    </div>
                    <div className="col-sm-3 col-md-6 item">
                        <span>{drink.food_pairing}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
