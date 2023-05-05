import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Chefs.css'
const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://thai-delight-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false)
            })
            .catch(error => console.error(error))
    }, []);
    const handleViewDetails = (id) => {
        fetch(`https://thai-delight-server.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => {
                // Display the details in a modal or a separate page
                console.log(data);
            })
            .catch(error => console.error(error))
    };
    return (
        <div>
            <section>
                <h2 className='text-center'>Our Best Foods</h2>
                <div>
                    <div className='chefs'>

                        {isLoading ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) :
                            chefs.map(chef => (
                                <div key={chef.id} >
                                    <div >
                                        <Card className='mx-auto mt-4 mb-4' style={{ width: '18rem' }}>
                                            <Card.Img className='img' variant="top" src={chef.food_img} />
                                            <Card.Body>
                                                <Card.Title>{chef.food_name}</Card.Title>
                                                <Card.Text>
                                                    <p className='fw-bolder '>Number Of Deliverd Order: {chef.likes}</p>
                                                </Card.Text>
                                                <Link to='/categoriesss'><Button variant="primary" >Order</Button></Link>

                                            </Card.Body>
                                        </Card>
                                    </div>


                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <h2 className='text-center'>Our Best Chefs</h2>
            <div className='chefs'>

                {isLoading ? (
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) :
                    chefs.map(chef => (
                        <div key={chef.id} >
                            <div >
                                <Card className='mx-auto mt-4 mb-4' style={{ width: '18rem' }}>
                                    <Card.Img className='img' variant="top" src={chef.picture} />
                                    <Card.Body>
                                        <Card.Title>{chef.name}</Card.Title>
                                        <Card.Text>
                                            <p>Experience: {chef.experience}</p>
                                            <p>Numbers of recipes:{chef.recipes}</p>
                                            <p>Number Of Likes: {chef.likes}</p>
                                        </Card.Text>
                                        <Link to={`/categories/${chef.id}`}><Button variant="primary" onClick={() => handleViewDetails(chef.id)}>View Recipes</Button></Link>

                                    </Card.Body>
                                </Card>
                            </div>


                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Chefs;
