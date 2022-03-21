import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DrinkObject } from './Model/Drink';
import { FixedSizeList as List } from "react-window";

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
            <List
                innerElementType="ul"
                itemCount={drinkList.length}
                itemSize={40}
                height={900}
                width={900}
            >
                {({ index, style }) => {
                    return (
                        <li style={style}>
                            <div className="row" key={drinkList[index].id}>
                                <div className="col-sm-3 col-md-6 item">
                                    <span className="material-icons">
                                        sports_bar
                                    </span>
                                    <span>{drinkList[index].name}</span>
                                </div>
                                <div className="col-sm-3 col-md-6 item">
                                    <span>{drinkList[index].food_pairing}</span>
                                </div>
                            </div>
                        </li>
                    );
                }}
            </List>
        </div>
    )
}


