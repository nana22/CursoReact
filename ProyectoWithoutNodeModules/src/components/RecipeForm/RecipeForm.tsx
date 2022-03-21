import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

interface AuthorFullName {
    isAuthenticated: boolean;
    firstName?: string;
    lastName?: string;
}

const RecipeForm = (props: { numberOfRecipes: number, addRecipe: (num: number) => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        alert('submit...saving not implemented');
        props.addRecipe(props.numberOfRecipes + 1);
        console.log(data)
    }
    return (
        <div className="main">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field className='formField'>
                    <div className="form-group">
                        <label>Recipe Name</label>
                        <input className="form-control" placeholder='Recipe Name'
                            type="text"
                            {...register("recipeName", { required: true, maxLength: 40 })}
                        />
                    </div>
                    {errors.recipeName && <p>Please check the Recipe Name.Lenght max is 40.</p>}
                </Form.Field>
                <Form.Field className='formField'>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" placeholder='Description'
                            type="text"
                            {...register("description", { required: true, maxLength: 200 })}
                        />
                    </div>
                    {errors.description && <p>Please check the Description.</p>}
                </Form.Field>
                <Form.Field className='formField'>
                    <div className="form-group">
                        <label>Ingredients List</label>
                        <textarea className="form-control" placeholder='Ingredients'
                            {...register("ingredients",
                                {
                                    required: true
                                })}
                        />
                    </div>
                    {errors.ingredients && <p>Please check the Ingredients</p>}
                </Form.Field>
                <Form.Field className='formField'>
                    <div className="form-group">
                        <label>Steps</label>
                        <textarea className="form-control" placeholder='Steps'
                            {...register("steps",
                                {
                                    required: true
                                })}
                        />
                    </div>
                    {errors.steps && <p>Please check the Steps</p>}
                </Form.Field>
                <Form.Field className='formField'>
                    <div className="form-group">
                        <label>Food types</label>
                        <select multiple className="form-control" {...register("foodType", { required: true })}>
                            <option>Vegetarian</option>
                            <option>Sugar free</option>
                            <option>Keto</option>
                            <option>Healthy</option>
                            <option>Fast Food</option>
                        </select>
                    </div>
                    {errors.foodType && <p>Please check the Food type</p>}
                </Form.Field>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
};

export default RecipeForm;
