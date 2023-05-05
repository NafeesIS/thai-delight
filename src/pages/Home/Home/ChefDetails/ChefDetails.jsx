import React, { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChefDetails.css'
const ChefDetails = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
        toast("This recipe is your favorite!");
    };
    const chef = useLoaderData();
    const { picture, name, experience, recipes, likes, bio, recipe_info } = chef;
    console.log(chef.id)
    return (
        <div>
            <CardGroup className='mx-auto w-75'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{bio}</p>
                            <p className='fw-bolder '>Numbers of recipes:{chef.recipes}</p>
                            <p className='fw-bolder '>Number Of Likes: {chef.likes}</p>
                            <h3 className='text-center'>Top 3 Recipes</h3>
                            <div className='recipe'>
                                {
                                    recipe_info.map(recipe =>

                                        <div>
                                            <Card className='mx-auto mt-4 mb-4' style={{ width: '18rem' }}>
                                                <Card.Img className='img' variant="top" src={recipe.img} />
                                                <Card.Body>
                                                    <Card.Title>{recipe.name}</Card.Title>
                                                    <Card.Text>
                                                        <p><span className='fw-bolder ingredients'>Ingrediants</span>: {recipe.ingredients}</p>
                                                        <p><span className='fw-bolder '>Cooking Method</span>: {recipe.method}</p>


                                                        <button className="favorite-button" onClick={handleFavoriteClick}>
                                                            <FontAwesomeIcon icon={faHeart} color={isFavorited ? 'red' : 'grey'} />
                                                        </button>
                                                        <ToastContainer />
                                                    </Card.Text>


                                                </Card.Body>
                                            </Card>
                                        </div>

                                    )
                                }
                            </div>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </CardGroup>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetails;